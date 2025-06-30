

import React, { useState } from 'react';
import styled from 'styled-components';
import CourseInquiryModal from './CourseInquiryModal';
import Image from 'next/image';
import { useModal } from '../contexts/ModalContext';

const CourseDuration = ({
  title, description
}) => {
  const { showModal, hideModal } = useModal();
  const handleButtonClick = () => {
    showModal(<CourseInquiryModal />);
  };
  return (
    <Main>
      <DurationSection className="py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Content Column */}
            <div className="col-lg-12 mb-4 mb-lg-0">
              <SectionHeader>
                <MainTitle>Launch Your Career with {title}</MainTitle>
                <SubTitle>Course Duration and Curriculum</SubTitle>
              </SectionHeader>

              <ContentWrapper>
                <DurationHighlight>
                  {title} Industrial Training has a <strong>2 to 3 months</strong> duration.
                  The course structure includes theoretical classes, practical classes, and project-based classes.
                </DurationHighlight>

                <p>
                  {description}
                </p>
              </ContentWrapper>

              <ButtonContainer>
                <ApplyButton onClick={handleButtonClick}>
                  APPLY NOW
                  <ButtonIcon>
                    <Image
                      src="/buttonPhone.png"
                      alt="Apply icon"
                      width={16}
                      height={16}
                    />
                  </ButtonIcon>
                </ApplyButton>
              </ButtonContainer>
            </div>
          </div>

        </div>
      </DurationSection>
    </Main>
  );
};

// Styled Components
const Main = styled.div`
  padding: 0rem 5rem;
  @media (max-width: 800px) {
    padding: 0rem 2rem;
  }
`;

const DurationSection = styled.section`
  background-color: #692FA2;
  color:#FFFFFF;
  padding: 4rem 4rem;
  border-radius:20px;
  @media (max-width: 800px) {
    padding: 4rem 1rem;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 2rem;
  text-align:center;
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700; 
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  text-align:center;
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

`;

const DurationHighlight = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  text-align:center;
  padding:0px 80px;
  
  strong {
    color: #F48B01;
  }

  @media (max-width: 900px) {
    padding:0px 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const ApplyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  background: radial-gradient(95.48% 385.91% at 88.4% 50%, #9634F6 0%, #F48C06 100%);
  color: white;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  color:#fff;
`;

export default CourseDuration;