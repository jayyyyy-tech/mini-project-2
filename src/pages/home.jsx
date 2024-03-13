import React from "react";
import Carousel from "react-bootstrap/Carousel";
import http from "../http";

// const home = () => {
//   return (
const api = http();
const [carouselItems, setCarouselItems] = useState([]);

function CarouselFadeExample() {
  {
    carouselItems.map((item) => {
      return (
        <>
          <Carousel className="mb-4">
            {carouselItems.map((item) => {
              return (
                <Carousel.Item key={item.book_id} className="position-relative">
                  <div className="carousel-overlay"></div>
                  <img className="carousel-img" src={item.cover} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </>
      );
    });
  }
}

export default home;
// export default CarouselFadeExample;
