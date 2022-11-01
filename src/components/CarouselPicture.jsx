import React from "react";

const CarouselPicture = (props) => {
    return (
        <div className="carousel-picture" style={{width: props.wd+"%"}}>
            <img src={`${props.data}`}/>
            {/* {props.data} */}
        </div>
        
    )
}

export default CarouselPicture;