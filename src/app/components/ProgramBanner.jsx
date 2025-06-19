'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const ProgramBanner = ({ title }) => {
    return (
        <BannerContainer>
            {/* Background Image using next/image */}
            <BackgroundImage
                src="/ProgramBanner.svg"
                alt="Banner Background"
                fill
                priority
                style={{ objectFit: 'cover' }}
            />
            <BannerContent>
                <BannerTitle>{title}</BannerTitle>
                <BannerImageContainer>
                    <Image
                        src="/ProgramBannerLine.svg" // Replace with your image path
                        alt="Frontend Technologies"
                        width={300} // Adjust as needed
                        height={20} // Adjust as needed
                        style={{ objectFit: 'contain' }}
                    />
                </BannerImageContainer>
            </BannerContent>
        </BannerContainer>
    );
};

// Styled Components
const BannerContainer = styled.div`
  position: relative;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: center;
  overflow: hidden;
  padding-left:80px;

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
  
`;

const BannerTitle = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
const BannerImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: auto;
  position: relative;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;


export default ProgramBanner;