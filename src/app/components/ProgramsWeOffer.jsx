import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const TechPrograms = () => {

    const router = useRouter();
    const programs = [
        {
            id: 'html-css-js',
            image: '/HtmlLogo.png',
            title: 'HTML/CSS/Javascript',
            description: 'Learn front-end technology stacks like HTML, CSS, JavaScript, and frameworks such as React or Vue to build responsive, interactive, and modern websites that work across all devices.',
            cta: 'Choose This Program'
        },
        {
            id: 'react',
            image: '/ReactLogo.png',
            title: 'React.js Training',
            description: 'Master React.js to build modern, component-based user interfaces with state management and efficient rendering.',
            cta: 'Choose This Program'
        },
        {
            id: 'angular',
            image: '/AngularTitleLogo.png',
            title: 'Angular.js Training',
            description: 'Learn Angular framework to build scalable single-page applications with TypeScript and powerful tooling.',
            cta: 'Choose This Program'
        }
    ];

    const handleProgramSelect = (programId) => {
        router.push(`/programs/frontend/${programId}`);
    };

    return (
        <ProgramsSection className="py-5">
            <div className="container">
                <SectionHeader className="text-center mb-5">
                    <h4>The Tech Training</h4>
                    <h2>Programs We Offer</h2>

                </SectionHeader>

                <div className="row">
                    {programs.map((program, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <ProgramCard className="h-100">
                                <ProgramImageContainer>
                                    <ProgramImage src={program.image} alt={program.title} />
                                </ProgramImageContainer>
                                <ProgramContent>
                                    <h3>{program.title}</h3>
                                    <p>{program.description}</p>
                                    <ChooseButton onClick={() => handleProgramSelect(program.id)}>{program.cta}</ChooseButton>
                                </ProgramContent>
                            </ProgramCard>
                        </div>
                    ))}
                </div>
            </div>
        </ProgramsSection>
    );
};

// Styled Components
const ProgramsSection = styled.section`
  background-color: #f8f9fa;
`;

const SectionHeader = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #252641;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 1.3rem;
    font-weight: 400;
    color: #252641;
    margin-bottom: .5rem;
  }
`;



const ProgramCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  overflow: hidden;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProgramImageContainer = styled.div`
  height: 120px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const ProgramImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
`;

const ProgramContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;  /* Centers horizontally */
  text-align: center;
  justify-content:space-between;  /* Centers text content */
  height: calc(100% - 120px);

  h3 {
    color: #000000;
    font-size: 1.3rem;
    font-weight:600;
    margin-bottom: 1rem;
    width: 100%;  /* Ensures full width for proper centering */
  }

  p {
    color: #696984;
    margin-bottom: 1.5rem;
    flex-grow: 1;
    width: 100%;  /* Ensures full width for proper centering */
  }
`;

const ChooseButton = styled.button`
  background-color: #692FA2;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e07d00;
    transform: scale(1.02);
  }
`;

export default TechPrograms;