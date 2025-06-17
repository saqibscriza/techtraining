'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Banner = () => {
  return (
    <BannerContainer>
      {/* Background Image using next/image */}
      <BackgroundImage
        src="/Banner.jpeg" 
        alt="Banner Background"
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
      <BannerContent>
        <BannerTitle>Shape Your Future with T3.</BannerTitle>
        <BannerSubtitle>The Training that <span style={{ color: "#FCC101" }}>Transforms.</span></BannerSubtitle>
      </BannerContent>
    </BannerContainer>
  );
};

// Styled Components
const BannerContainer = styled.div`
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;

  /* Gradient overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.1));
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const BackgroundImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
`;

const BannerTitle = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const BannerSubtitle = styled.h2`
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export default Banner;