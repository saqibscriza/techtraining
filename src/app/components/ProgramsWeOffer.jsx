

'use client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const ProgramsWeOffer = () => {
  const router = useRouter();
  const path = usePathname();// Get current URL path

  // All programs data
  const programCategories = {
    frontend: {
      title: 'Frontend Development Programs',
      subtitle: 'Client-side technologies',
      programs: [
        {
          id: 'html-css-js',
          image: '/HtmlLogo.png',
          title: 'HTML/CSS/JS',
          description: 'Master the core web technologies for building responsive, interactive websites.',
          cta: 'Choose Program'
        },
        {
          id: 'react',
          image: '/ReactLogo.png',
          title: 'React.js',
          description: 'Build modern component-based UIs with this popular JavaScript library.',
          cta: 'Choose Program'
        },
        {
          id: 'angular',
          image: '/AngularTitleLogo.png',
          title: 'Angular',
          description: 'Develop scalable enterprise applications with this TypeScript-based framework.',
          cta: 'Choose Program'
        }
      ]
    },
    backend: {
      title: 'Backend Development Programs',
      subtitle: 'Server-side technologies ',
      programs: [
        {
          id: 'node',
          image: '/NodeLogo.svg',
          title: 'Node.js',
          description: 'Build fast, scalable network applications using JavaScript on the server.',
          cta: 'Choose Program'
        },
        {
          id: 'java',
          image: '/JavaLogo.png',
          title: 'Java',
          description: 'Enterprise-grade applications with Spring framework and Java ecosystem.',
          cta: 'Choose Program'
        },
        {
          id: 'python',
          image: '/PythonLogo.png',
          title: 'Python',
          description: 'Rapid development with Django/Flask for web applications and APIs.',
          cta: 'Choose Program'
        },
        {
          id: 'csharp',
          image: '/CSharpLogo.png',
          title: 'C#',
          description: 'Build robust applications with .NET framework and ASP.NET Core.',
          cta: 'Choose Program'
        },
        {
          id: 'ruby',
          image: '/RubyLogo.png',
          title: 'Ruby',
          description: 'Develop web applications quickly with Ruby on Rails framework.',
          cta: 'Choose Program'
        },
        {
          id: 'php',
          image: '/PhpLogo.png',
          title: 'PHP',
          description: 'Create dynamic websites with Laravel or Symfony frameworks.',
          cta: 'Choose Program'
        }
      ]
    },
    fullstack: {
      title: 'Full Stack Development Programs',
      subtitle: 'Complete development solutions',
      programs: [
        {
          id: 'mern',
          image: '/MernLogo.png',
          title: 'MERN Stack',
          description: 'MongoDB, Express, React, and Node.js - JavaScript full stack solution.',
          cta: 'Choose Program'
        },
        {
          id: 'mean',
          image: '/MeanLogo.png',
          title: 'MEAN Stack',
          description: 'MongoDB, Express, Angular, and Node.js - end-to-end JavaScript framework.',
          cta: 'Choose Program'
        },

      ]
    }
  };

  // Determine which programs to show based on URL
  const getCurrentCategory = () => {
    if (path.includes('/fullstack')) return 'fullstack';
    if (path.includes('/backend')) return 'backend';
    return 'frontend'; // default
  };

  const currentCategory = getCurrentCategory();
  const { title, subtitle, programs } = programCategories[currentCategory];

  const handleProgramSelect = (programId) => {
    router.push(`/programs/${currentCategory}/${programId}`);
  };

  return (
    <ProgramsSection className="py-5">
      <div className="container">
        <SectionHeader className="text-center mb-5">
          <h4>{subtitle}</h4>
          <h2>{title}</h2>
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
                  <ChooseButton onClick={() => handleProgramSelect(program.id)}>
                    {program.cta}
                  </ChooseButton>
                </ProgramContent>
              </ProgramCard>
            </div>
          ))}
        </div>
      </div>
    </ProgramsSection>
  );
};

// Styled Components (remain the same)
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
  align-items: center;
  text-align: center;
  justify-content: space-between;
  height: calc(100% - 120px);

  h3 {
    color: #000000;
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    width: 100%;
  }

  p {
    color: #696984;
    margin-bottom: 1.5rem;
    flex-grow: 1;
    width: 100%;
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

export default ProgramsWeOffer;