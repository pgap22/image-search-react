import { useEffect, useState } from "react";
import Results from "./components/Results";
import SearchBox from "./components/SearchBox";

const App = () => {
  const KEY = "22472227-1f992e35c74ba4fca0c4153b2";
  const BASE_URL = "https://pixabay.com/api";

  const [query, changeQuery] = useState("");
  
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  
  const [imgList, saveImg] = useState([]);

  const getImagesData = () => {
    fetch(`${BASE_URL}?key=${KEY}&q=${query}&page=${page}`).then((data) => {
      data.json().then((data) => {
        saveImg(data.hits);
        setTotalPage(Math.ceil(data.totalHits / 20));
      });
    });
  };

  const previusPage = ()=>{
    if(page-1 === 0) return
    setPage(page-1);
  }
  const nextPage = ()=>{
    if(page+1 > totalPage) return
    setPage(page+1);
    document.querySelector(".container").scrollIntoView({behavior: 'smooth',block:'start' });
  }

  const saveQuery = (q) => {
    setPage(1);
    changeQuery(q);
  };

  useEffect(() => {
    if (!query) return;
    getImagesData();
  }, [query,page]);

  return (
    <>
      <div className="App">
        <div className="container">
          <SearchBox saveQuery={saveQuery} />
          <Results images={imgList} />

          <div className="buttons-container">
              {
                page === 1 ? null : (
                  <button onClick={()=>{
                    previusPage()
                  }} className="button-page">Anterior</button>
                )
              }
              {
                page === totalPage ? null : (
                  <button onClick={()=>{
                    nextPage()
                  }} className="button-page">Siguiente</button>
                )
              }
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
