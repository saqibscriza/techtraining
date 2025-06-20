import React from 'react';
import styled from 'styled-components';

const CourseDuration = () => {
    return (
        <Main>
            <DurationSection className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Text Content Column */}
                        <div className="col-lg-12 mb-4 mb-lg-0">
                            <SectionHeader>
                                <MainTitle>Launch Your Career with React JS</MainTitle>
                                <SubTitle>Course Duration and Curriculum</SubTitle>
                            </SectionHeader>

                            <ContentWrapper>
                                <DurationHighlight>
                                    React JS Industrial Training has a <strong>2 to 3 months</strong> duration.
                                    The course structure includes theoretical classes, practical classes, and project-based classes.
                                </DurationHighlight>

                                <p>
                                    React JS is a must-have skill for web developers, and our training program provides the perfect platform to master it.
                                    With expert guidance and practical experience, you'll be well-prepared to work in the tech industry or pursue freelance opportunities.
                                </p>
                            </ContentWrapper>
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
`;

const DurationSection = styled.section`
  background-color: #692FA2;
  color:#FFFFFF;
  padding: 4rem 0;
  border-Radius:20px;
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
  p{
    padding:0px 80px;
  }
`;

const ImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const CourseImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export default CourseDuration;