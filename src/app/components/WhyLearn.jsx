import React from 'react';
import styled from 'styled-components';
import ProgramBannerLine from './ProgramBannerLine';

const WhyLearn = ({
  title,
  subtitle,
  description
}) => {
  return (
    <SectionContainer className="py-5">
      <div className="container">
        <Heading>
          <SectionTitle>{title}</SectionTitle>
          <ProgramBannerLine width='200px' height='10px' />
        </Heading>

        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <ContentWrapper>
              <SubTitle>{subtitle}</SubTitle>
              <Description>
                {description}
              </Description>
            </ContentWrapper>
          </div>
          <div className="col-lg-6">
            <ImageWrapper>
              <ReactImage
                src="/WhyLearnReactImage.png"
                alt="React JS Illustration"
                className="img-fluid"
              />
            </ImageWrapper>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

// Styled Components
const SectionContainer = styled.section`
  background-color: #f8f9fa;
  padding:0px 8rem;
`;

const Heading = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-bottom:30px;
`;

const ContentWrapper = styled.div`
  padding: 1rem;
`;

const SectionTitle = styled.h1`
  font-size: 2.3rem;
  font-weight: 600;
  color: #252641;
  margin-bottom: 1.5rem;
  

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2F327D;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #696984;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImageWrapper = styled.div`
  padding: 1rem;
  text-align: center;
`;

const ReactImage = styled.img`
  max-width: 70%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default WhyLearn;