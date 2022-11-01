import React from "react";

const CarouselPicture = (props) => {
    return (
        // <div className="carousel-picture" style={{width: props.wd+"%"}}>
        //     {/* <img src={`${props.data}`}/> */}
        //     test
        //     {/* {props.data} */}
        // </div>

        <img className="carousel-picture" src={`${props.data}`}/>
        
    )
}

export default CarouselPicture;