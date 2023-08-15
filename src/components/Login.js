import React, { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import SignInPopUp from "./SignInPopUp";

function Login() {
  const [signInPopUp, setSignInPopUp] = useState(false);

  return (
    <Container>
      <CTA>
        <CtaLogoOne src="/images/cta-logo-one.svg" />
        <SignUp onClick={() => setSignInPopUp(true)}>
          <a style={{ textDecoration: "none", color: "#f9f9f9" }}>
            GET ALL THERE
          </a>
        </SignUp>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          architecto laboriosa omnis praesentium accusamus eius officiis.
          Explicabo esse, deleniti consequuntur delectus dolorem sed id.
        </Description>
        <CtaLogoTwo src="/images/cta-logo-two.png" />
      </CTA>
      {signInPopUp && <SignInPopUp setSignInPopUp={setSignInPopUp} />}
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    background-image: url("images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.7;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
`;
const CtaLogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  color: #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  text-align: center;
  font-size: 11px;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;

const CtaLogoTwo = styled.img`
  width: 90%;
`;
