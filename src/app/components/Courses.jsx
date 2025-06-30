'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Courses = () => {
  const courses = [
    "React.js Training",
    "Java Training",
    "Node Training",
    "PHP Training",
    "Python Training",
    "Ruby & Rails Training",
    "Android/iOS App Training",
    "MySQL/MongoDB Training",
    "Figma/Graphic Training",
    "HTML/CSS Training",
    "Software Testing Training",
    "Digital Marketing Training"
  ];

  return (
    <PageContainer className="container-fluid">
      <Header className="text-center ">
        <PageTitle>Find a Course</PageTitle>
        <SectionTitle>Training Courses</SectionTitle>
        <Tagline>Shape Your Future with T3 - The Training that Transforms</Tagline>
      </Header>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {courses?.map((course, index) => (
            <div key={index} className="col">
              <CourseCard className="h-100">
                <CourseTitle>{course}</CourseTitle>
              </CourseCard>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

// Styled Components (for custom styling beyond Bootstrap)
const PageContainer = styled.div`
  background-color: #4a287c;
  min-height: 75  0px;
  padding: 6rem 2rem;
`;

const Header = styled.header`
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  color: #f5b417;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const SectionTitle = styled.h2`
  color: #fff;
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0.5rem 0;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Tagline = styled.p`
  color: #B0B2B5;
  font-size: 1.2rem;
  margin-top: 1.5rem;
`;

// const CourseCard = styled.div`
//   background-color: transparent;
//   border: 1px solid #e0e0e0;
//   border-radius: 8px;
//   padding: 2rem 1.5rem;
//   text-align: center;
//   transition: all 0.3s ease;
//   /* Shiny 3px shadow */
//   box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 
//               0 2px 3px rgba(0, 0, 0, 0.1);
//   height: 100%;
//   position: relative;
//   overflow: hidden;

//   /* Shiny overlay effect */
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     height: 3px;
//     background: linear-gradient(90deg, 
//       rgba(255,255,255,0) 0%, 
//       rgba(255,255,255,0.7) 50%, 
//       rgba(255,255,255,0) 100%);
//   }

//   &:hover {
//     transform: translateY(-5px);
//     /* Greyish 1px shadow on hover */
//     box-shadow: 0 1px 1px rgba(255, 255, 255, 0.9);
//     border-color: #4a287c;

//     /* Remove shiny effect on hover */
//     &::before {
//       opacity: 0;
//     }
//   }
// `;


const CourseCard = styled.div`
   background-color: transparent;
 border: 1px solid #e0e0e0;
 border-radius: 8px;
 padding: 2rem 1.5rem;
 text-align: center;
transition: all 0.3s ease;
   box-shadow: 0 2px 10px rgba(0,0,0,0.05);
   height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border-color: #4a287c;
  }
`;

const CourseTitle = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`;

export default Courses;