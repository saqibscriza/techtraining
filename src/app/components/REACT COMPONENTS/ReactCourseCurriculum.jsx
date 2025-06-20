import React from 'react';
import styled from 'styled-components';

const ReactCourseCurriculum = () => {
  const topics = [
    {
      title: "Introduction to React JS",
      description: "Overview of React and advantages in web development. Start setting up your development environment and learning JSX.",
      image: "/React/Intro.png",
      bgColor: "#5B72EE"
    },
    {
      title: "Components and Props",
      description: "Learn how to create reusable components and pass data using props.",
      image: "/React/Props.png",
      bgColor: "#00CBB8"
    },
    {
      title: "State Management",
      description: "Learn what state is and how it controls the behavior of your application.",
      image: "/React/state.png",
      bgColor: "#29B9E7"
    },
    {
      title: "React Hooks",
      description: "Master the use of Hooks such as useState, useEffect, and useContext to build efficiently.",
      image: "/React/hooks.png",
      bgColor: "#EE7D5B"
    },
    {
      title: "Routing using React Router",
      description: "Build SPAs with zero page reload when routing with the least amount of effort.",
      image: "/React/hooks.png",
      bgColor: "#00CB58"
    },
    {
      title: "State Management using Redux",
      description: "Learn how Redux makes it easy for complex application states.",
      image: "/React/state.png",
      bgColor: "#296EE7"
    },
    {
      title: "API Integration",
      description: "Read from the server and display data fetched by using APIs to create dynamic apps.",
      image: "/React/api.png",
      bgColor: "#EE915B"
    },
    {
      title: "Real-Time Projects",
      description: "Design a living project, be it a weather app, a task manager, or maybe an e-commerce website.",
      image: "/React/projects.png",
      bgColor: "#009FCB"
    },
    {
      title: "Portfolio",
      description: "This is basically putting all your projects into a professional portfolio for marketing or demonstration purposes.",
      image: "/React/portfolio.png",
      bgColor: "#F2526A"
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
            <div className="col-md-6 col-lg-4 mb-5" key={index}> {/* Increased mb-4 to mb-5 */}
              <TopicCardContainer>
                <TopicImageContainer $bgColor={topic.bgColor}>
                  <TopicImage src={topic.image} alt={topic.title} />
                </TopicImageContainer>
                <TopicCard>
                  <TopicContent>
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                  </TopicContent>
                </TopicCard>
              </TopicCardContainer>
            </div>
          ))}
        </div>
      </div>
    </CurriculumSection>
  );
};


const CurriculumSection = styled.section`
  background-color: #ECF2F9;
  padding: 4rem 8rem;
`;

const SectionHeader = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #252641;
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

const TopicCardContainer = styled.div`
  position: relative;

  height: 100%;
  
  padding-top: 40px; /* Space for the overlapping image */
  max-width:300px;
 
 
`;

const TopicImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 70px;
  background: ${props => props.$bgColor || 'white'}; // Use provided bgColor or default to white
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
  
 
`;

const TopicImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const TopicCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 3rem 3rem 1.5rem; /* More top padding */
  min-height:290px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    
    ${TopicImageContainer} {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

const TopicContent = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2F327D;
    margin-bottom: 0.75rem;
    text-align: center;
    margin-top: 1rem;
  }
  
  p {
    color: #696984;
    line-height: 1.6;
    margin-bottom: 0;
    text-align: center;
  }
`;

export default ReactCourseCurriculum;