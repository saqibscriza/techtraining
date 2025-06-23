import React from 'react';
import styled from 'styled-components';

const WhoShouldAttend = () => {
    const attendeeGroups = [
        {
            title: "Students",
            description: "Who want to get into the career of web development."
        },
        {
            title: "Fresh Graduates",
            description: "Looking to build skills that make them stand apart in the job market."
        },
        {
            title: "Professionals",
            description: "Interested in transitioning to front-end development careers."
        }
    ];

    return (
        <AttendeeSection className="py-5">
            <div className="container">
                <div className="row align-items-center">

                    {/* Image Column */}
                    <div className="col-lg-6">
                        <ImageContainer>
                            <AttendeeImage
                                src="/KeySkillsRightImage.png"
                                alt="Diverse group of learners"
                                className="img-fluid"
                            />
                        </ImageContainer>
                    </div>

                    {/* Text Content Column */}
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <SectionHeader className="mb-4">
                            <h2>Who Should Attend?</h2>
                            <p className="lead">This course is perfect for:</p>
                        </SectionHeader>

                        <AttendeeList>
                            {attendeeGroups.map((group, index) => (
                                <AttendeeItem key={index}>
                                    <AttendeeTitle>{group.title}</AttendeeTitle>
                                    <AttendeeDescription>{group.description}</AttendeeDescription>
                                </AttendeeItem>
                            ))}
                        </AttendeeList>
                    </div>

                </div>
            </div>
        </AttendeeSection>
    );
};

// Styled Components
const AttendeeSection = styled.section`
  background-color: #fff;
  padding: 4rem 0;
`;

const SectionHeader = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #2F327D;
    margin-bottom: 1rem;
  }
  
  .lead {
    font-size: 1.25rem;
    color: #696984;
    margin-bottom: 2rem;
  }
`;

const AttendeeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AttendeeItem = styled.li`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const AttendeeTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #F48B01;
  margin-bottom: 0.5rem;
`;

const AttendeeDescription = styled.p`
  color: #696984;
  line-height: 1.6;
  font-size: 1.1rem;
  margin: 0;
`;

const ImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  
`;

const AttendeeImage = styled.img`
  width: 80%;
  height: auto;
  object-fit: cover;
`;

export default WhoShouldAttend;