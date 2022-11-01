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
            <div className="carousel-wrapper" style = {{width: 100 * props.data.length + "%", left: -100*carousel+"%"}}>
                {props.data.map((itm, idx) => 
                    // make carousel item component
                    <CarouselPicture key={idx} data={itm} wd={100/props.data.length}/>
                )}
            </div>
            <div className="arrows">
                <div className="arrow left" onClick={() => setCarousel(carousel-1)}>Left</div>
                <div className="arrow left" onClick={() => setCarousel(carousel+1)}>Right</div>
            </div>
        </div>
    )
}

export default Carousel;