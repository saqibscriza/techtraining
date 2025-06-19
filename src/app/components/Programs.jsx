'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const Programs = () => {
    const router = useRouter();
    const programs = [
        {
            id: 'frontend',
            title: "Frontend Development",
            description: "Learn HTML, CSS, JavaScript and frameworks like React, Vue to build responsive websites.",
        },
        {
            id: 'backend',
            title: "Backend Development",
            description: "Master scalable server-side technologies",
        },
        {
            title: "Mobile App Development",
            description: "Create responsive apps for Android and iOS.",
        },
        {
            title: "Digital Marketing",
            description: "Become a pro in SEO, social media, and online advertising.",
        },
        {
            title: "Database Management",
            description: "Learn SQL, MySQL, MongoDB, and more.",
        },
        {
            title: "Software Testing",
            description: "Ensure software quality with top testing tools.",
        }, {
            title: "Software Testing",
            description: "Ensure software quality with top testing tools.",
        }, {
            title: "Software Testing",
            description: "Ensure software quality with top testing tools.",
        }, {
            title: "Software Testing",
            description: "Ensure software quality with top testing tools.",
        }
    ];

    const handleProgramSelect = (programId) => {
        router.push(`/programs/${programId}`);
    };

    return (
        <Container>
            <MainTitle>The Tech Training</MainTitle>
            <SectionTitle>Programs We Offer</SectionTitle>

            <ProgramsContainer>
                {programs.map((program, index) => (
                    <ProgramWrapper key={index}>
                        <ProgramCard>
                            <TrainingStrip> TRAINING</TrainingStrip>
                            <ProgramTitle>{program.title}</ProgramTitle>
                            <ProgramDescription>{program.description}</ProgramDescription>
                        </ProgramCard>
                        <ProgramButton onClick={() => handleProgramSelect(program.id)}>CHOOSE THIS PROGRAM</ProgramButton>
                    </ProgramWrapper>
                ))}
            </ProgramsContainer>
        </Container>
    );
};

// Styled Components
const Container = styled.div`
    margin: 0 auto;
    padding: 6rem 4rem;
    font-family: Arial, sans-serif;
    background-color: #fff;


    @media (max-width: 768px) {

    }
`;

const MainTitle = styled.h1`
    text-align: center;
    font-size: 1.5rem;
    color: #f24080;
    margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
    text-align: center;
    font-size: 3.8rem;
    font-weight: 700;
    color: #301a52;
    margin-bottom: 4rem;

    @media (max-width: 768px) {
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }
`;

const ProgramsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 1200px) {
        justify-content: center;
        gap: 1.5rem;
    }
`;

const ProgramWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(33.33% - 2rem);
    min-width: 300px;
    margin-bottom: 2rem;

    @media (max-width: 1200px) {
        width: calc(50% - 1.5rem);
    }

    ${'' /* @media (max-width: 600px) {
        width: 100%;
    } */}
`;

const ProgramCard = styled.div`
 overflow: hidden; 
position:relative;
    background-color: transparent;
    padding: 3rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    border: 2px solid #4a287c;
    width: 100%;
    min-height:230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    &:hover {
        transform: translateY(-5px);
    }
`;


const ProgramTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: 600;
    color: #301a52;
    margin-bottom: 1rem;
`;

const ProgramDescription = styled.p`
    color: #3f354d;
    line-height: 1.5;
    text-align:center;
`;

const ProgramButton = styled.button`
    background-color: #4a287c;
    color: white;
    border: none;
    padding: 2rem 2rem;
    cursor: pointer;
    font-size:14px;
    font-weight: 600;
    transition: background-color 0.3s ease;
    margin-top: 1.5rem;
    min-width: 101%;
    max-width: 300px;

    &:hover {
        background-color: #f5b417;
    }
`;





const TrainingStrip = styled.div`
  position: absolute;
  top: 15px;
  left: -30px;
  width: 120px;
  background-color: #f24080;
  color: white;
  padding: 0.3rem 0;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  transform: rotate(-45deg);
  box-shadow: 0 2px 3px rgba(0,0,0,0.2);
  z-index: 1;

  /* Creates the diagonal cut effect */
  &::before, &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    width: 5px;
    height: 100%;
    background-color: #d1376e;
  }

  &::before {
    left: 0;
    transform: skewY(45deg);
    transform-origin: top right;
  }

  &::after {
    right: 0;
    transform: skewY(-45deg);
    transform-origin: top left;
  }

  @media (max-width: 768px) {
    width: 100px;
    font-size: 0.6rem;
    left: -25px;
  }
`;



export default Programs;

