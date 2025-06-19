// 'use client';
// import React from 'react';
// import styled from 'styled-components';

// const CoreTechnologies = () => {
//     return (
//         <TechSection className="py-5">
//             <div className="container">
//                 {/* Core Technologies Section */}
//                 <SectionTitle className="text-center mb-5">Core Technologies</SectionTitle>
//                 <div className="row">
//                     <div className="col-md-6 col-lg-3 mb-4">
//                         <TechCard className="h-100 p-4">
//                             <TechIcon className="mb-3">HTML</TechIcon>
//                             <TechDescription>
//                                 The structure of a webpage is built using HTML, which organizes content like text, images, and links in a readable format.
//                             </TechDescription>
//                         </TechCard>
//                     </div>

//                     <div className="col-md-6 col-lg-3 mb-4">
//                         <TechCard className="h-100 p-4">
//                             <TechIcon className="mb-3">CSS</TechIcon>
//                             <TechDescription>
//                                 CSS styles the webpage—controlling colors, fonts, layout, and making it look good on all devices.
//                             </TechDescription>
//                         </TechCard>
//                     </div>

//                     <div className="col-md-6 col-lg-3 mb-4">
//                         <TechCard className="h-100 p-4">
//                             <TechIcon className="mb-3">JavaScript</TechIcon>
//                             <TechDescription>
//                                 Adds interactivity and dynamic content to webpages, enabling features like sliders, form validation, and real-time updates.
//                             </TechDescription>
//                         </TechCard>
//                     </div>

//                     <div className="col-md-6 col-lg-3 mb-4">
//                         <TechCard className="h-100 p-4">
//                             <TechIcon className="mb-3">Frameworks</TechIcon>
//                             <TechDescription>
//                                 Frameworks like React, Vue, and Angular help build fast, dynamic, and modern web apps easily.
//                             </TechDescription>
//                         </TechCard>
//                     </div>
//                 </div>

//                 {/* Key Skills Section */}
//                 <SectionTitle className="text-center mt-5 mb-5">Key Skills</SectionTitle>
//                 <div className="row">
//                     <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
//                         <SkillItem className="p-3 text-center">Responsive Web Design</SkillItem>
//                     </div>
//                     <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
//                         <SkillItem className="p-3 text-center">DOM Manipulation</SkillItem>
//                     </div>
//                     <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
//                         <SkillItem className="p-3 text-center">Browser Debugging</SkillItem>
//                     </div>
//                     <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
//                         <SkillItem className="p-3 text-center">API Integration</SkillItem>
//                     </div>
//                     <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
//                         <SkillItem className="p-3 text-center">Version Control</SkillItem>
//                     </div>
//                 </div>
//             </div>
//         </TechSection>
//     );
// };

// // Styled Components
// const TechSection = styled.section`
//   background-color: #f8f9fa;
// `;

// const SectionTitle = styled.h2`
//   font-size: 2rem;
//   font-weight: 600;
//   color: #301a52;
//   position: relative;

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -10px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 80px;
//     height: 3px;
//     background-color: #f24080;
//   }
// `;

// const TechCard = styled.div`
//   background: white;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// const TechIcon = styled.div`
//   font-size: 1.8rem;
//   font-weight: 700;
//   color: #f24080;
// `;

// const TechDescription = styled.p`
//   color: #555;
//   line-height: 1.6;
// `;

// const SkillItem = styled.div`
//   background: white;
//   border-radius: 6px;
//   font-weight: 500;
//   color: #252641;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #f24080;
//     color: white;
//     transform: scale(1.05);
//   }
// `;

// export default CoreTechnologies;



'use client';
import React from 'react';
import styled from 'styled-components';
import ProgramBannerLine from './ProgramBannerLine';

// Data array for technologies
const technologies = [
  {
    image: '/images/html.png',
    title: 'HTML',
    description:
      'The structure of a webpage is built using HTML, which organizes content like text, images, and links in a readable format.',
  },
  {
    image: '/images/css.png',
    title: 'CSS',
    description:
      'CSS styles the webpage—controlling colors, fonts, layout, and making it look good on all devices.',
  },
  {
    image: '/images/javascript.png',
    title: 'JavaScript',
    description:
      'Adds interactivity and dynamic content to webpages, enabling features like sliders, form validation, and real-time updates.',
  },
  {
    image: '/images/frameworks.png',
    title: 'Frameworks',
    description:
      'Frameworks like React, Vue, and Angular help build fast, dynamic, and modern web apps easily.',
  },
];

// Skill list
const skills = [
  'Responsive Web Design',
  'DOM Manipulation',
  'Browser Debugging',
  'API Integration',
  'Version Control',
];

const CoreTechnologies = () => {
  return (
    <TechSection className="py-5">
      <div className="container">
        <Heading>
          <SectionTitle className="text-center mb-5">Core Technologies</SectionTitle>
          <ProgramBannerLine width="300px" height="15px" />
        </Heading>
        <div className="row">
          {technologies.map((tech, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <TechCard className="h-100 p-4 text-center">
                <TechImage src={tech.image} alt={tech.title} />
                <TechIcon className="mb-2 mt-3">{tech.title}</TechIcon>
                <TechDescription>{tech.description}</TechDescription>
              </TechCard>
            </div>
          ))}
        </div>

        <SectionTitle className="text-center mt-5 mb-5">Key Skills</SectionTitle>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3" key={index}>
              <SkillItem className="p-3 text-center">{skill}</SkillItem>
            </div>
          ))}
        </div>
      </div>
    </TechSection>
  );
};

// Styled Components
const TechSection = styled.section`
  background-color: #f8f9fa;
`;

const Heading = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-bottom:30px;
 
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #301a52;
  position: relative;
`;

const TechCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  max-width:270px;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TechImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

const TechIcon = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #f24080;
`;

const TechDescription = styled.p`
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const SkillItem = styled.div`
  background: white;
  border-radius: 6px;
  font-weight: 500;
  color: #252641;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    background-color: #f24080;
    color: white;
    transform: scale(1.05);
  }
`;

const BannerLineSVG = styled.svg`
  width: 411px;
  height: 31px;
`;

const BannerPath = styled.path`
  fill: #F48B01;
`;

export default CoreTechnologies;
