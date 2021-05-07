import React from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.css";

function Slider() {
    return (
        <Carousel className="carousel">
            <Carousel.Item interval={1500}>
                <Carousel.Caption>
                    <p>
                        Nulla vitae elit libero,{" "}
                        <span className="green">a pharetra </span>
                        augue mollis interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <Carousel.Caption>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <Carousel.Caption>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
