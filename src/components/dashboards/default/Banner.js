import React from 'react';
import { Carousel } from 'react-bootstrap';
import generic6 from 'assets/img/generic/6.jpg';
import generic7 from 'assets/img/generic/7.jpg';
import generic8 from 'assets/img/generic/8.jpg';
import generic5 from 'assets/img/generic/5.jpg';
import generic9 from 'assets/img/generic/9.jpg';
import chat8 from 'assets/img/chat/8.jpg';

const Banner = () => {
  return (
    <Carousel className="light">
      <Carousel.Item>
        <img className="d-block w-100" src={generic5} alt="First slide" />
        <Carousel.Caption>
          <h3 className="text-white">First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={chat8} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="text-white">Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={generic9} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="text-white">Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
