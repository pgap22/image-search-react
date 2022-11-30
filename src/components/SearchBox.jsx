import React, { useEffect, useRef } from "react";

const SearchBox = ({ saveQuery }) => {
  useEffect(() => {
    console.log("Rendering...");
  });

  const SearchQuery = useRef();

  const handlerClickButton = () => {
    saveQuery(SearchQuery.current.value);
  };

  return (
    <div className="SearchBox">
      <h1 className="SearchBox-h1">Buscador de imagenes</h1>
      <form onSubmit={(e)=>{e.preventDefault()}} className="SearchBox-div">
        <input
          ref={SearchQuery}
          placeholder="Busca lo que quieras"
          type="text"
          className="SearchBox-input"
        />
        <button onClick={handlerClickButton} className="SearchBox-button">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
