import React, { useEffect, useState } from "react";
import CarouselPicture from "./CarouselPicture.jsx";

const Carousel = (props) => {
    const [carousel, setCarousel] = useState(0);

    useEffect(() => {
        if (carousel < 0) {
            setCarousel(props.data.length - 1)
        } else if (carousel >= props.data.length) {
            setCarousel(0)
        }
    }, [carousel, props.data.length])

    return (
        <div className="carousel">
            <div className="carousel-wrapper" style = {{width: "100%"}}>
                {/* {props.data.map((itm, idx) => 
                    <CarouselPicture key={idx} data={itm} wd={100 / props.data.length}/>
                )} */}
                <CarouselPicture data={props.data[carousel]}/>
            </div>
            <div className="arrows">
                <div className="arrow left" onClick={() => carousel > 0 ? setCarousel(carousel-1) : setCarousel(props.data.length-1)}>{'<'}</div>
                <div className="arrow right" onClick={() => carousel < props.data.length-1 ? setCarousel(carousel+1) : setCarousel(0)}>{'>'}</div>
            </div>
        </div>
    )
}

export default Carousel;