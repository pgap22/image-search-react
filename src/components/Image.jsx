import React from 'react'

const Image = (
    {
        img,
        imgName,
        likes,
        views,
        url
    }
) => {
  return (
    <div className="Image">
        <img src={img} alt={imgName} className="Image-img" />
        <div className="Image-stats">
            <p className="Image-likes">{likes} Me gusta</p>
            <p className="Image-views">{views} Vistas</p>
        </div>
        <div className="Image-backgroundButton">
            <button onClick={()=>{ window.open(url, "_blank").focus() }} className="Image-button">
                Ver Imagen
            </button>
        </div>
    </div>
  )
}

export default Image