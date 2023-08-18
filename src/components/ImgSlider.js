import React from "react";
import styled from "styled-components";
import slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(slider)`
  margin-top: 100px;

  @media (max-width: 1300px) {
    margin-top: 100px;
  }
  @media (max-width: 868px) {
    margin-top: 100px;
  }

  @media (max-width: 830px) {
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    margin-top: 55px;
  }

  @media (max-width: 568px) {
    margin-top: 90px;
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;

    @media (max-width: 768px) {
      z-index: -5;
    }
  }
`;

const Wrap = styled.div`
  cursor: pointer;

  @media (max-width: 768px) {
    height: 230px;
  }

  @media (max-width: 568px) {
    height: 170px;
  }

  @media (max-width: 468px) {
    height: 130px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 4px solid transparent;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
