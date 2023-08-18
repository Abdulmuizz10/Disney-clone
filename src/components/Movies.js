import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img src="/img/moana1.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/img/onward.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/img/frozen.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/img/simpsons.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/img/lion king.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/img/club house.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/img/mickey mouse.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/img/cinderella.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/img/moana1.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/img/onward.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/img/frozen.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/img/simpsons.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/img/lion king.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/img/club house.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/img/mickey mouse.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/img/cinderella.jpg" alt="" />
        </Wrap>
      </Content>
    </Container>
  );
}
// /images/viewers-national.png
// https://prod-ripcut-delivery.disney-plus-net/v1/variant/disney/5EA416AD3815FCC1BADC817A932A5?EEE707556D02233FFCB4CFEB7CBEEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg
export default Movies;

const Container = styled.div`
  overflow-x: hidden;
  padding: 5px 0 10px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  // grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  grid-gap: 15px;
  padding: 0 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.02);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
