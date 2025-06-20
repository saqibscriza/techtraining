
// 'use client';
// import React from 'react';
// import styled from 'styled-components';
// import ProgramBannerLine from './ProgramBannerLine';

// // Data array for technologies
// const technologies = [
//   {
//     image: '/HtmlLogo.png',
//     title: 'HTML',
//     description:
//       'The structure of a webpage is built using HTML, which organizes content like text, images, and links in a readable and logical format for web browsers.',
//   },
//   {
//     image: '/CssLogo.png',
//     title: 'CSS',
//     description:
//       'CSS styles the webpage—controlling colors, fonts, layout, and making it look good on all devices.',
//   },
//   {
//     image: '/jsLogo.png',
//     title: 'JavaScript',
//     description:
//       'JavaScript adds interactivity and dynamic content to webpages, enabling features like sliders, form validation, pop-ups, and real-time updates.',
//   },
//   {
//     image: '/framework.png',
//     title: 'Frameworks',
//     description:
//       'Frameworks like React, Vue, and Angular help build fast, dynamic, and modern web apps easily.',
//   },
// ];

// // Skill list
// const skills = [
//   'Responsive Web Design – Seamless Experience on Phones, Tablets & Desktops',
//   'DOM Manipulation – Dynamically Change Webpage Content with JavaScript',
//   'Browser Debugging – Find and Fix Errors Using Developer Tools',
//   'API Integration – Fetch Real-Time Data from Servers Easily',
//   'Version Control – Collaborate and Manage Code Efficiently Using Git & GitHub',
// ];

// const CoreTechnologies = () => {
//   return (
//     <TechSection className="py-5">
//       <div className="container">


//         {/* core Technologies */}
//         <Heading>
//           <SectionTitle className="text-center mb-5">Core Technologies</SectionTitle>
//           <ProgramBannerLine width="300px" height="15px" />
//         </Heading>
//         <div className="row">
//           {technologies.map((tech, index) => (
//             <div className="col-md-6 col-lg-3 mb-4" key={index}>
//               <TechCard className="h-100 p-4 text-center">
//                 <TechImage src={tech.image} alt={tech.title} />
//                 <TechIcon className="mb-2 mt-3">{tech.title}</TechIcon>
//                 <TechDescription>{tech.description}</TechDescription>
//               </TechCard>
//             </div>
//           ))}
//         </div>

//         {/* Key Skills section */}
//         <div className="container-fluid">
//           <div className="row align-items-center">

//             {/* Left Side - Skills */}
//             <div className="col-md-6">
//               <SkillsListContainer>
//                 <SectionTitle className="mt-5 mb-2">Key Skills:</SectionTitle>
//                 {skills.map((skill, index) => (
//                   <SkillLineItem key={index}>
//                     <SkillIcon src="/skillPointer.png" alt={skill} />
//                     {skill}
//                   </SkillLineItem>
//                 ))}
//               </SkillsListContainer>
//             </div>

//             {/* Right Side - Full Image */}
//             <div className="col-md-6 p-0">
//               <RightImage
//                 src="/KeySkillsRightImage.png"
//                 alt="Skills Illustration"
//                 className="img-fluid w-30 h-30"
//               />
//             </div>
//           </div>
//         </div>


//       </div>
//     </TechSection>
//   );
// };

// // Styled Components
// const TechSection = styled.section`
//   background-color: #ECF2F9;
// `;

// const Heading = styled.div`
//   display:flex;
//   flex-direction:column;
//   justify-content:center;
//   align-items:center;
//   margin-bottom:30px;

// `;

// const SectionTitle = styled.h2`
//   font-size: 2rem;
//   font-weight: 600;
//   color: #2F327D;
//   position: relative;
// `;

// const TechCard = styled.div`
//   background: white;
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease;
//   max-width:270px;

//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// const TechImage = styled.img`
//   width: 60px;
//   height: 60px;
//   object-fit: contain;
// `;

// const TechIcon = styled.div`
//   font-size: 1.2rem;
//   font-weight: 700;
//   color: #000000;
// `;

// const TechDescription = styled.p`
//   color: #696984;
//   font-size: 0.95rem;
//   line-height: 1.6;
// `;
// const SkillsListContainer = styled.div`
//   padding: 1rem;
//   margin-right: 2rem;
// `;

// const SkillLineItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   padding: 12px 0;
//   color: #696984;
//   transition: all 0.2s ease;
//   border-bottom: 1px solid #eee;

//   &:hover {
//     color: #f24080;
//     padding-left: 5px;
//   }

//   &:last-child {
//     border-bottom: none;
//   }
// `;

// const SkillIcon = styled.img`
//   width: 16px;
//   height: 16px;
//   object-fit: contain;
// `;

// const RightImage = styled.img`
//   object-fit: contain;
//   height: 400px;       /* Set your desired fixed height */
//   width: auto; 
//   border-radius: 0 8px 8px 0;

//   @media (max-width: 768px) {
//     border-radius: 0 0 8px 8px;
//     margin-top: 1rem;
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
    image: '/HtmlLogo.png',
    title: 'HTML',
    description:
      'The structure of a webpage is built using HTML, which organizes content like text, images, and links in a readable and logical format for web browsers.',
  },
  {
    image: '/CssLogo.png',
    title: 'CSS',
    description:
      'CSS styles the webpage—controlling colors, fonts, layout, and making it look good on all devices.',
  },
  {
    image: '/jsLogo.png',
    title: 'JavaScript',
    description:
      'JavaScript adds interactivity and dynamic content to webpages, enabling features like sliders, form validation, pop-ups, and real-time updates.',
  },
  {
    image: '/framework.png',
    title: 'Frameworks',
    description:
      'Frameworks like React, Vue, and Angular help build fast, dynamic, and modern web apps easily.',
  },
];

// Skill list
const skills = [
  'Responsive Web Design – Seamless Experience on Phones, Tablets & Desktops',
  'DOM Manipulation – Dynamically Change Webpage Content with JavaScript',
  'Browser Debugging – Find and Fix Errors Using Developer Tools',
  'API Integration – Fetch Real-Time Data from Servers Easily',
  'Version Control – Collaborate and Manage Code Efficiently Using Git & GitHub',
];

const CoreTechnologies = () => {
  return (
    <TechSection className="py-5">
      <div className="container">
        {/* Core Technologies Section */}
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left Side - Technologies Content */}
            <div className="col-md-12">
              <Heading>
                <SectionTitle className="mb-1">Core Technologies</SectionTitle>
                <ProgramBannerLine width="300px" height="20px" />
              </Heading>
              <TechDescriptionContainer>
                <p>
                  Our expertise covers all fundamental web technologies that form the building blocks of modern web applications.
                </p>
              </TechDescriptionContainer>
            </div>

            {/* Right Side - Technologies Cards */}
            <div className="col-md-12">
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
            </div>
          </div>
        </div>

        {/* Key Skills section */}
        <div className="container-fluid mt-5">
          <div className="row align-items-center">
            {/* Left Side - Skills */}
            <div className="col-lg-6">
              <SkillsListContainer>
                <SectionTitle className="">Key Skills:</SectionTitle>
                <ProgramBannerLine width="150px" height="10px" />
                {skills.map((skill, index) => (
                  <SkillLineItem key={index}>
                    <SkillIcon src="/skillPointer.png" alt={skill} />
                    {skill}
                  </SkillLineItem>
                ))}
              </SkillsListContainer>
            </div>

            {/* Right Side - Full Image */}
            <div className="col-md-6 p-0 d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
              <RightImage
                src="/KeySkillsRightImage.png"
                alt="Skills Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </TechSection>
  );
};

// Styled Components
const TechSection = styled.section`
  background-color: #ECF2F9;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const TechDescriptionContainer = styled.div`
  margin-bottom: 30px;
  text-align:center;
  p {
    color: #696984;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #2F327D;
`;

const TechCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;

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
  color: #000000;
`;

const TechDescription = styled.p`
  color: #696984;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const SkillsListContainer = styled.div`
  padding: 1rem;
  margin-right: 2rem;
`;

const SkillLineItem = styled.div`
  display: flex;
  align-items: center;
  
  gap: 8px;
  padding: 12px 0;
  color: #696984;
  transition: all 0.2s ease;
  border-bottom: 1px solid #eee;

  &:hover {
    color: #f24080;
    padding-left: 5px;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const SkillIcon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;





const RightImage = styled.img`
  object-fit: contain;
  max-height: 400px;
  width: auto;
  max-width: 100%;
  border-radius: 0 8px 8px 0;

  @media (max-width: 768px) {
    max-height: 300px;
    border-radius: 0 0 8px 8px;
    margin-top: 2rem;
  }
`;





export default CoreTechnologies;