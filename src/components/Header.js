import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      <Nav>
        <Logo src="/images/logo (1).svg" />

        <NavMenu>
          <Link to="#">
            <img src="/images/home-icon.svg" alt="" />
            <span>HOME</span>
          </Link>
          <Link to="#">
            <img src="/images/search-icon.svg" alt="" />
            <span>SEARCH</span>
          </Link>
          <Link to="#">
            <img src="/images/watchlist-icon.svg" alt="" />
            <span>WATCHLIST</span>
          </Link>
          <Link to="#">
            <img src="/images/original-icon.svg" alt="" />
            <span>ORIGINAL</span>
          </Link>
          <Link to="#">
            <img src="/images/movie-icon.svg" alt="" />
            <span>MOVIES</span>
          </Link>
          <Link to="#">
            <img src="/images/series-icon.svg" alt="" />
            <span>SERIES</span>
          </Link>
        </NavMenu>

        <div className="mobile__nav">
          <UserImg src="/images/logo (1).svg" />
          <i className="bx bx-menu" onClick={() => setShowNavbar(true)}></i>
        </div>
      </Nav>

      {showNavbar && (
        <MobileNavbar>
          <div className="close">
            <i className="bx bx-x" onClick={() => setShowNavbar(false)}></i>
          </div>
          <MobileNav>
            <div className="links">
              <Link to="#" onClick={() => setShowNavbar(false)}>
                <img src="/images/home-icon.svg" alt="" />
                <span>HOME</span>
              </Link>
              <Link to="#" onClick={() => setShowNavbar(false)}>
                <img src="/images/search-icon.svg" alt="" />
                <span>SEARCH</span>
              </Link>
              <Link to="#" onClick={() => setShowNavbar(false)}>
                <img src="/images/watchlist-icon.svg" alt="" />
                <span>WATCHLIST</span>
              </Link>
              <Link to="#" onClick={() => setShowNavbar(false)}>
                <img src="/images/original-icon.svg" alt="" />
                <span>ORIGINAL</span>
              </Link>
              <Link to="#" onClick={() => setShowNavbar(false)}>
                <img src="/images/movie-icon.svg" alt="" />
                <span>MOVIES</span>
              </Link>
              <Link to="#" onClick={() => setShowNavbar(false)}>
                <img src="/images/series-icon.svg" alt="" />
                <span>SERIES</span>
              </Link>
            </div>
          </MobileNav>
        </MobileNavbar>
      )}
    </>
  );
}

export default Header;

const Nav = styled.nav`
  position: fixed;
  height: 70px;
  width: 100%;
  background: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  overflow-x: hidden;
  z-index: 100;

  /* @media (max-width: 568px) {
    height: 50px;
    padding: 15px;
  } */

  // left: 0;
  // right: 0;
  // top: 0;

  .mobile__nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    i {
      font-size: 30px;
      display: none;
      margin-top: 9px;
      cursor: pointer;

      @media (max-width: 768px) {
        display: block;
      }
    }
  }
`;

const Logo = styled.img`
  width: 80px;
  z-index: 1000;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        position: absolute;
        background: white;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 568px) {
    height: 40px;
    width: 40px;
  }
`;

const MobileNavbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: #0b0b0b; */
  background-color: #070a16;
  height: 1000vh;
  width: 100%;
  z-index: 100000;

  .close {
    position: relative;
    i {
      position: absolute;
      top: 23px;
      right: 35px;
      color: #fff;
      font-size: 30px;
      cursor: pointer;
    }
  }
`;

const MobileNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      img {
        width: 20px;
      }
    }

    span {
      cursor: pointer;
      font-size: 1rem;
    }
  }
`;
