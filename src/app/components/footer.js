"use client"; // if you're using Next.js App Router

import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Main = styled.div`
  background-color: #1d1131;
  padding: 60px 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .copyright {
    font-size: 18px;
    color: #fff;
    margin-bottom: 15px;

    .scriza {
      color: #b0b2b5;
      transition: color 0.3s ease;
      cursor: pointer;

      &:hover {
        color: #fcb900;
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 20px;

    .copyright {
      margin-bottom: 25px;
    }
  }
`;
const Footer = () => {
  return (
    <Main>
      <div className="copyright">
        Copyright © 2025 by <span className="scriza">Scriza</span> <br />
        All Rights Reserved
      </div>
      <div>
        <Link className="navbar-brand" href="/">
          <img
            loading="lazy"
            className="logo_image"
            // src="//thetechtraining.in/wp-content/uploads/2018/07/t3-logo-1.png"
            src="/images/logo.png"
            alt="The Tech Training"
            width="auto"
            height="50"
          />
        </Link>
      </div>
    </Main>
  );
};

export default Footer;
