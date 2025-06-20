import React from 'react';
import styled from 'styled-components';

const ReactBenefits = () => {
    const benefits = [
        {
            title: 'High Demand',
            description: 'The top companies really look for skilled professionals working in React JS.'
        },
        {
            title: 'Ease of Use',
            description: 'React makes development easier using reusable components.'
        },
        {
            title: 'Broad Applications',
            description: 'Applied to web, mobile (React Native), and even desktop applications.'
        },
        {
            title: 'Career Advancement',
            description: 'Learning React opens up exciting jobs and freelance projects.'
        }
    ];

    return (
        <BenefitsSection className="py-5">
            <div className="container">
                <SectionHeader className="mb-3">
                    <h2>Here's why learning React JS would be beneficial:</h2>
                </SectionHeader>

                <BenefitsList>
                    {benefits.map((benefit, index) => (
                        <BenefitItem key={index}>
                            <BenefitNumber>{index + 1}</BenefitNumber>
                            <BenefitContent>
                                <BenefitTitle>{benefit.title}: </BenefitTitle>
                                <BenefitDescription>{benefit.description}</BenefitDescription>
                            </BenefitContent>
                        </BenefitItem>
                    ))}
                </BenefitsList>
            </div>
        </BenefitsSection>
    );
};

// Styled Components
const BenefitsSection = styled.section`
  
  padding: 4rem 0;
`;

const SectionHeader = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #2F327D;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
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
  align-items: baseline;
  gap: 1.5rem;
  padding: 1rem 0;
  

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    align-items: flex-start;
    flex-direction: column;
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

export default ReactBenefits;