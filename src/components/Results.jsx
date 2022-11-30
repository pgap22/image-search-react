import React from "react";
import Image from "./Image";
const Results = ({images}) => {

    return (
    <div className="result-container">
      
        {
            images.map(
                image => (
                    <Image
                     key={image.id}
                     img={image.webformatURL}
                     imgName={image.tags}
                     views={image.views}
                     likes={image.likes}
                     url={image.largeImageURL}
                     />
                )
            )
        }

      {/* <Image
        img={
          "https://pixabay.com/get/gc539a2216736b902b81cca85eb0e18059bf625e88ef2f9ec92f923fc4efb90aef4d1d5da4ede7a8fef0d25e0228c68f2_640.jpg"
        }
        imgName={"drop of water, drop, impact"}
        views={1231179}
        likes={12312}
        url={
          "https://pixabay.com/get/g1f18bdd426fdca8e0322c2d441085f5d13ddee33c517886cec006dd3e92cf2d1b3eb05513025045b8736c96c10b49149f52d67dd4b32097750b2201c41085441_1280.jpg"
        }
      /> */}
    </div>
  );
};

export default Results;
