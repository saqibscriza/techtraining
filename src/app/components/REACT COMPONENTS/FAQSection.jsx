import React, { useState } from 'react';
import styled from 'styled-components';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How many months will the training program in React JS last?",
      answer: "The duration of the training will be 2 to 3 months, as per your preferred schedule."
    },
    {
      question: "Do I need prior experience with coding?",
      answer: "No prior coding experience is required, though basic computer literacy is recommended."
    },
    {
      question: "Will I get a certificate upon completing the course?",
      answer: "Yes, you'll receive a certificate of completion after successfully finishing the course."
    },
    {
      question: "Are there live projects in the course?",
      answer: "Yes, the course includes hands-on live projects to build your portfolio."
    },
    {
      question: " Do you have job placement support?",
      answer: "Yes, we even have  job placement support , resume writing, preparation for interviews, and more and even some referrals to great companies."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQContainer className="py-5">
      <Main className="container">
        <SectionHeader className="mb-3">
          <h2>Frequently Asked Questions</h2>
        </SectionHeader>

        <div className="row">
          <div className="col-lg-12">
            <AccordionWrapper>
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;
                return (
                  <AccordionItem key={index}>
                    <AccordionHeader
                      onClick={() => toggleAccordion(index)}
                      $isActive={isActive} // Using transient prop
                    >
                      {faq.question}
                      <AccordionIcon $isActive={isActive}>
                        {isActive ? '-' : '+'}
                      </AccordionIcon>
                    </AccordionHeader>
                    <AccordionContent $isActive={isActive}>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </AccordionWrapper>
          </div>
        </div>
      </Main>
    </FAQContainer>
  );
};

// Styled Components
const FAQContainer = styled.section`
  background-color: #f8f9fa;
  padding: 1rem 5rem;
`;

const Main = styled.div`
  border: 1px solid #eee;
  padding: 1rem 2rem;
`;

const SectionHeader = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #2F327D;
    margin-bottom: 1rem;
  }
`;

const AccordionWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

const AccordionHeader = styled.div`
  background-color: white;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  color: ${props => props.$isActive ? '#F48B01' : '#2F327D'};
  transition: all 0.3s ease;
  
  &:hover {
    color: #F48B01;
  }
`;

const AccordionIcon = styled.span`
  font-size: 1.5rem;
  color: ${props => props.$isActive ? '#F48B01' : '#696984'};
`;

const AccordionContent = styled.div`
  padding: ${props => props.$isActive ? '1.5rem' : '0 1.5rem'};
  background-color: white;
  color: #696984;
  line-height: 1.6;
  max-height: ${props => props.$isActive ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
`;

export default FAQSection;