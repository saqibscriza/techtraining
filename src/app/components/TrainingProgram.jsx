import React from 'react';
import styled from 'styled-components';

const TrainingProgram = ({ title }) => {

  const benefits = [
    {
      id: 1,
      title: "Expert trainers",
      description: `Highly knowledgeable trainers about ${title}`
    },
    {
      id: 2,
      title: "Learning by doing",
      description: "Actual hands-on experience through completion of practical projects."
    },
    {
      id: 3,
      title: "Placement Assistance",
      description: "Resume preparation, interview preparation and job reference."
    },
    {
      id: 4,
      title: "Flexi Timing",
      description: "Batches can be availed on weekdays or weekends at your convenience."
    },
    {
      id: 5,
      title: "Curriculum Updated",
      description: "Newest tools, libraries, and prevailing industry practices."
    }
  ];

  return (
    <ProgramBenefits className="py-5">
      <div className="container">
        <SectionHeader className="text-center mb-5">
          <h1>Why Our Training Program?</h1>
        </SectionHeader>

        <div className="row align-items-center">
          {/* Benefits Text Column (col-8) */}
          <div className="col-lg-8 mb-4 mb-lg-0">
            <BenefitsList>
              {benefits.map((benefit) => (
                <BenefitItem key={benefit.id}>
                  <BenefitNumber>{benefit.id}</BenefitNumber>
                  <BenefitContent>
                    <BenefitTitle>{benefit.title}: </BenefitTitle>
                    <BenefitDescription>{benefit.description}</BenefitDescription>
                  </BenefitContent>
                </BenefitItem>
              ))}
            </BenefitsList>
          </div>

          {/* Image Column (col-4) */}
          <div className="col-lg-4">
            <ImageContainer>
              <ProgramImage
                src="/Trainingprogram.png"
                alt="React Training Program"
                className="img-fluid"
              />
            </ImageContainer>
          </div>
        </div>
      </div>
    </ProgramBenefits>
  );
};

// Styled Components
const ProgramBenefits = styled.section`
  background-color: #f8f9fa;
  padding: 4rem 8rem;
`;

const SectionHeader = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2F327D;
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const BenefitNumber = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #2F327D;
  min-width: 2rem;
`;

const BenefitContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
  flex: 1;
`;

const BenefitTitle = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #696984;
`;

const BenefitDescription = styled.span`
  color: #696984;
  line-height: 1.6;
  font-size: 1rem;
  font-weight: 400;
`;


const ImageContainer = styled.div`
  padding: 1rem;
  border-radius: 10px;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const ProgramImage = styled.img`
  border-radius: 8px;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export default TrainingProgram;