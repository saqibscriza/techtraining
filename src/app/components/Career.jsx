'use client';
import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const Career = () => {
    return (
        <BannerContainer className="container-fluid">
            <div className="row align-items-center">
                {/* Image Column */}
                <div className="col-lg-6 col-md-12 order-lg-1 order-1">
                    <ImageWrapper>
                        <Image
                            src="/career.webp"
                            alt="Industrial Training"

                            className="img-fluid"
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                            priority
                            height={800}
                            width={550}
                        />
                    </ImageWrapper>
                </div>

                {/* Text Content Column */}
                <div className="col-lg-6 col-md-12 order-lg-2 order-2">
                    <ContentWrapper className="px-4 py-5">
                        <Heading className="mb-4">
                            6 Months to<br />
                            Transform Your<br />
                            <HighlightedText>Career!</HighlightedText>
                        </Heading>

                        <Description className="mb-4">
                            Our 6-month Industrial Training program is well-planned to develop both theoretical
                            knowledge and practical exposure. This program is best for students as well as working
                            professionals wanting to enhance their skills further. On completion, participants are
                            awarded a certificate and receive 100% job assistance.
                        </Description>

                        <ConnectButton className="btn">
                            CONNECT NOW
                        </ConnectButton>
                    </ContentWrapper>
                </div>
            </div>
        </BannerContainer>
    );
};

// Styled Components
const BannerContainer = styled.div`
  background-color: #f8f9fa;
  padding: 4rem 0;

  @media (max-width: 992px) {
    padding: 2rem 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  height: 100%;
  min-height: 800px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 992px) {
    min-height: 300px;
    margin-bottom: 2rem;
  }
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: #301a52;
  margin-bottom: 1.5rem;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 992px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HighlightedText = styled.span`
  color: #fcc101;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: rgba(79, 70, 229, 0.3);
    z-index: -1;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #3f354d;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ConnectButton = styled.button`
  background-color: #f24080;
  color: white;
  padding: 1rem 2rem;
  font-size: 0.7rem;
  font-weight: 600;
  border: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover { 
    background-color: #4338ca;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.75rem 1rem;
  }
`;

export default Career;