import React from 'react';
import styled from 'styled-components';

const TrainingProgram = () => {
    const benefits = [
        {
            id: 1,
            title: "Expert trainers",
            description: "Highly knowledgeable trainers about React JS."
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
                                        <h3>
                                            <BenefitTitle>{benefit.title}:</BenefitTitle>
                                        </h3>
                                        <p>{benefit.description}</p>
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
  padding: 4rem 0;
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
  font-size: 1.8rem;
  font-weight: 700;
  color: #F48B01;
  min-width: 2.5rem;
`;

const BenefitContent = styled.div`
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2F327D;
    margin: 0 0 0.5rem 0;
    display: inline;
  }
  
  p {
    color: #696984;
    line-height: 1.6;
    margin: 0;
    display: inline;
  }
`;

const BenefitTitle = styled.span`
  color: #2F327D;
  font-weight: 600;
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