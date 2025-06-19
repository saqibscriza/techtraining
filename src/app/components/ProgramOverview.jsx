'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const ProgramOverview = ({ title, description, cornerImage }) => {
  return (
    <OverviewContainer>
      {cornerImage && (
        <CornerImageWrapper>
          <Image
            src="/ProgramOverviewImage.svg"
            alt="Decorative corner element"
            width={120} // Adjust as needed
            height={120} // Adjust as needed
          />
        </CornerImageWrapper>
      )}
      <ContentWrapper>
        <OverviewTitle>{title}</OverviewTitle>
        <OverviewDescription>{description}</OverviewDescription>
      </ContentWrapper>
    </OverviewContainer>
  );
};

// Styled Components
const OverviewContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative; /* Needed for absolute positioning of corner image */
`;

const CornerImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: 0.8; /* Adjust transparency as needed */
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 20; /* Ensure content appears above corner image */
`;

const OverviewTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  color: #252641;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const OverviewDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #696984;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default ProgramOverview;