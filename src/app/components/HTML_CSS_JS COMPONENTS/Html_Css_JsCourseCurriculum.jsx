import React from 'react';
import styled from 'styled-components';

const WebDevCourseCurriculum = () => {
    const topics = [
        {
            title: "HTML Fundamentals",
            description: "Master document structure, semantic HTML5 elements, forms, and accessibility best practices.",
            image: "/React/intro.png",
            bgColor: "#5B72EE"
        },
        {
            title: "CSS Styling",
            description: "Learn selectors, box model, responsive units, and modern layout techniques with Flexbox/Grid.",
            image: "/React/Props.png",
            bgColor: "#00CBB8"
        },
        {
            title: "Responsive Design",
            description: "Create mobile-friendly websites using media queries, fluid layouts, and responsive images.",
            image: "/React/state.png",
            bgColor: "#29B9E7"
        },
        {
            title: "JavaScript Basics",
            description: "Understand variables, functions, DOM manipulation, and event handling in vanilla JS.",
            image: "/React/hooks.png",
            bgColor: "#EE7D5B"
        },
        {
            title: "Advanced JavaScript",
            description: "Work with ES6+ features, async programming, APIs, and modern browser APIs.",
            image: "/React/hooks.png",
            bgColor: "#00CB58"
        },
        {
            title: "CSS Animations",
            description: "Create smooth transitions, transforms, and keyframe animations for engaging UIs.",
            image: "/React/state.png",
            bgColor: "#296EE7"
        },
        {
            title: "Web Performance",
            description: "Optimize loading times, minimize render blocking, and implement best practices.",
            image: "/React/api.png",
            bgColor: "#EE915B"
        },
        {
            title: "Projects",
            description: "Build real-world projects like portfolios, e-commerce sites, and web applications.",
            image: "/React/projects.png",
            bgColor: "#009FCB"
        },
        {
            title: "Deployment",
            description: "Learn to host websites using Netlify/Vercel and set up CI/CD workflows.",
            image: "/React/portfolio.png",
            bgColor: "#F2526A"
        }
    ];

    return (
        <CurriculumSection className="py-5">
            <div className="container">
                <SectionHeader className="text-center mb-5">
                    <h1>What You Will Learn in the Course</h1>
                    <p className="lead">Our comprehensive HTML/CSS/JS course covers everything from basics to advanced web development.</p>
                </SectionHeader>

                <div className="row">
                    {topics.map((topic, index) => (
                        <div className="col-md-6 col-lg-4 mb-5" key={index}>
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

// Styled Components remain exactly the same as in the original
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
  padding-top: 40px;
  max-width: 300px;
`;

const TopicImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 70px;
  background: ${props => props.$bgColor || 'white'};
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
  padding: 3rem 3rem 1.5rem;
  min-height: 290px;
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

export default WebDevCourseCurriculum;