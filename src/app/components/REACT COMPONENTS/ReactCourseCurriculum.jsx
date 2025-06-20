import React from 'react';
import styled from 'styled-components';

const ReactCourseCurriculum = () => {
  const topics = [
    {
      title: "Introduction to React JS",
      description: "Overview of React and advantages in web development. Start setting up your development environment and learning JSX.",
      image: "/ReactLogo.png"
    },
    {
      title: "Components and Props",
      description: "Learn how to create reusable components and pass data using props.",
      image: "/components-icon.png"
    },
    {
      title: "State Management",
      description: "Learn what state is and how it controls the behavior of your application.",
      image: "/state-icon.png"
    },
    {
      title: "React Hooks",
      description: "Master the use of Hooks such as useState, useEffect, and useContext to build efficiently.",
      image: "/hooks-icon.png"
    },
    {
      title: "Routing using React Router",
      description: "Build SPAs with zero page reload when routing with the least amount of effort.",
      image: "/router-icon.png"
    },
    {
      title: "State Management using Redux",
      description: "Learn how Redux makes it easy for complex application states.",
      image: "/redux-icon.png"
    },
    {
      title: "API Integration",
      description: "Read from the server and display data fetched by using APIs to create dynamic apps.",
      image: "/api-icon.png"
    },
    {
      title: "Real-Time Projects",
      description: "Design a living project, be it a weather app, a task manager, or maybe an e-commerce website.",
      image: "/projects-icon.png"
    },
    {
      title: "Portfolio",
      description: "This is basically putting all your projects into a professional portfolio for marketing or demonstration purposes.",
      image: "/portfolio-icon.png"
    }
  ];

  return (
    <CurriculumSection className="py-5">
      <div className="container">
        <SectionHeader className="text-center mb-5">
          <h1>What You Will Learn in the Course</h1>
          <p className="lead">Our course will cover all aspects of making you a master in React JS.</p>
        </SectionHeader>

        <div className="row">
          {topics.map((topic, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <TopicCard>
                <TopicImageContainer>
                  <TopicImage src={topic.image} alt={topic.title} />
                </TopicImageContainer>

                <TopicContent>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </TopicContent>
              </TopicCard>
            </div>
          ))}
        </div>
      </div>
    </CurriculumSection>
  );
};

// Styled Components
const CurriculumSection = styled.section`
  background-color: #ECF2F9;
  padding: 4rem 0;
`;

const SectionHeader = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2F327D;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  .lead {
    font-size: 1.25rem;
    color: #696984;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const TopicCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const TopicImageContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const TopicImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

const TopicNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #F48B01;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const TopicContent = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2F327D;
    margin-bottom: 0.75rem;
  }
  
  p {
    color: #696984;
    line-height: 1.6;
    margin-bottom: 0;
  }
`;

export default ReactCourseCurriculum;