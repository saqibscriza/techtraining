import React from 'react';
import styled from 'styled-components';

const WebDevBenefits = () => {
    const benefits = [
        {
            title: 'Universal Web Foundation',
            description: 'Every website uses HTML/CSS/JS - these are essential skills for any web developer.'
        },
        {
            title: 'Complete Control',
            description: 'Understand how the web actually works before using any frameworks or libraries.'
        },
        {
            title: 'Faster Performance',
            description: 'Vanilla JS sites load quicker than framework-based ones - crucial for user experience.'
        },
        {
            title: 'Career Flexibility',
            description: 'These fundamentals transfer to all frameworks (React, Angular, Vue) and platforms.'
        },
        {
            title: 'In-Demand Skills',
            description: '90% of web developer jobs require strong HTML/CSS/JS knowledge as a baseline.'
        }
    ];

    return (
        <BenefitsSection className="py-5">
            <div className="container">
                <SectionHeader className="mb-3">
                    <h2>Here's why learning HTML, CSS & JavaScript is essential:</h2>
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

// Styled Components (same as original)
const BenefitsSection = styled.section`
  padding: 4rem 8.4rem;
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

export default WebDevBenefits;