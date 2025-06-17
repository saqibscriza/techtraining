'use client';
import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const T3 = () => {
    return (
        <BannerContainer className="container-fluid p-5">
            <div className="row g-0">
                {/* Text Content Column - Left-aligned */}
                <div className="col-lg-6 col-12">
                    <BannerContent className="d-flex flex-column justify-content-center py-5 px-4 ps-lg-5">
                        <StartNow className="mb-2">Start Now!</StartNow>
                        <MainHeading className="mb-3">T3 - Train, Transform, Triumph.</MainHeading>
                        <Description className="pe-lg-5">
                            T3 - The Tech Training founded by Scriza pvt. ltd. in Noida offers hands-on industrial training programs that bridge the gap between academics and industry demands.
                        </Description>
                    </BannerContent>
                </div>

                {/* Image Column */}
                <div className="col-lg-6 col-12 ">
                    <ImageContainer className="h-100">
                        <Image
                            src="/T3.webp"
                            alt="T3 Training"
                            className="img-fluid"
                            style={{
                                objectFit: 'contain', // Changed from 'cover' to 'contain' to see the full image
                                width: '100%',
                                height: '400px',
                                maxHeight: '100%'
                            }}
                            priority
                            width={600} // Increased from 400 for better quality
                            height={800} // Increased from 700 for better quality
                        />
                    </ImageContainer>
                </div>
            </div>
        </BannerContainer>
    );
};

// Styled Components
const BannerContainer = styled.div`
  background-color: #ededec;
  position: relative;
  overflow: hidden;
  padding: 5rem 3rem;
`;

const BannerContent = styled.div`
  min-height: 60vh;
  padding: 2rem;
  text-align: left; /* Force left alignment */

  @media (max-width: 768px) {
    min-height: auto;
    padding: 3rem 1.5rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 4rem;
  overflow: hidden; /* Ensure the image doesn't overflow */

  @media (max-width: 992px) {
    min-height: 300px;
    padding: 2rem;
  }
`;

const StartNow = styled.div`
  color: #F24080;
  font-size: 1.5rem;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const MainHeading = styled.h1`
  font-size: 3.8rem;
  font-weight: 700;
  color: #301a52;
  line-height: 1.2;
  text-align: left; /* Explicit left alignment */

  @media (max-width: 992px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  line-height: 1.5;
  color: #3f354d;
  text-align: left; /* Explicit left alignment */

  @media (max-width: 992px) {
    font-size: 1.1rem;
    max-width: 700px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

export default T3;