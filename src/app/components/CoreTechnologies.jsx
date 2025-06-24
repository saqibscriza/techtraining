


'use client';
import React from 'react';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import ProgramBannerLine from './ProgramBannerLine';

// Data for different technology stacks
const techStacks = {
  frontend: {
    technologies: [
      {
        image: '/HtmlLogo.png',
        title: 'HTML',
        description: 'The structure of a webpage is built using HTML, which organizes content like text, images, and links.',
      },
      {
        image: '/CssLogo.png',
        title: 'CSS',
        description: 'CSS styles the webpage—controlling colors, fonts, layout, and responsive design.',
      },
      {
        image: '/jsLogo.png',
        title: 'JavaScript',
        description: 'Adds interactivity and dynamic content to webpages, enabling features like sliders and form validation.',
      },
      {
        image: '/framework.png',
        title: 'Frameworks',
        description: 'React, Vue, and Angular help build fast, dynamic, and modern web apps efficiently.',
      }
    ],
    skills: [
      'Responsive Web Design – Seamless Experience on All Devices',
      'DOM Manipulation – Dynamically Change Webpage Content',
      'Browser Debugging – Find and Fix Errors Using Developer Tools',
      'API Integration – Fetch Real-Time Data from Servers',
      'Version Control – Collaborate Using Git & GitHub'
    ],
    description: 'Our expertise covers all fundamental frontend technologies that form the building blocks of modern web applications.'
  },
  backend: {
    technologies: [
      {
        image: '/NodeLogo.svg',
        title: 'Node.js',
        description: 'JavaScript runtime for building scalable server-side applications and APIs.',
      },
      {
        image: '/JavaLogo.png',
        title: 'Java',
        description: 'Enterprise-grade applications with Spring framework and robust Java ecosystem.',
      },
      {
        image: '/PythonLogo.png',
        title: 'Python',
        description: 'Django/Flask for rapid development of secure web applications and APIs.',
      },
      {
        image: '/RubyLogo.png',
        title: 'Ruby',
        description: 'Ruby is a object-oriented language  known for its elegant syntax and developer productivity.',
      }
    ],
    skills: [
      'API Development – Build Robust RESTful Services',
      'Database Design – Efficient Data Modeling and Management',
      'Authentication – Secure User Login Systems (JWT, OAuth)',
      'Server Optimization – Improve Performance and Scalability',
      'Cloud Deployment – AWS, Azure, and Google Cloud Integration'
    ],
    description: 'Master the server-side technologies that power modern web applications and handle complex business logic.'
  },
  fullstack: {
    technologies: [
      {
        image: '/MernGroup.svg',
        title: 'MERN Stack',
        description: 'MongoDB, Express, React, and Node.js for full JavaScript development.',
      },
      {
        image: '/MeanGroup.svg',
        title: 'MEAN Stack',
        description: 'MongoDB, Express, Angular, and Node.js end-to-end framework.',
      },
      {
        image: '/DjangoReact.jpeg',
        title: 'Django + React',
        description: 'Python backend with React frontend for powerful applications.',
      },
      {
        image: '/serverless.png',
        title: 'Serverless',
        description: 'Build scalable applications with cloud functions and microservices.',
      }
    ],
    skills: [
      'End-to-End Development – From UI to Database',
      'Architecture Design – Plan Scalable Application Structures',
      'CI/CD Pipelines – Automated Testing and Deployment',
      'Performance Tuning – Optimize Both Frontend and Backend',
      'DevOps Basics – Containerization and Orchestration'
    ],
    description: 'Comprehensive full stack expertise covering both client and server-side development for complete solutions.'
  },
  mobile: {
    technologies: [
      {
        image: '/flutter.png',
        title: 'Flutter',
        description: 'Google\'s UI toolkit for building natively compiled cross-platform apps from a single codebase.',
      },
      {
        image: '/kotlin.jpeg',
        title: 'Kotlin (Android)',
        description: 'Modern, concise programming language for native Android development.',
      },
      {
        image: '/swift.jpeg',
        title: 'Swift (iOS)',
        description: 'Powerful and intuitive language for iOS, macOS, and other Apple platforms.',
      },
      {
        image: '/firebase.png',
        title: 'Firebase',
        description: 'Backend services for mobile apps including authentication, databases, and analytics.',
      }
    ],
    skills: [
      'Cross-Platform Development – Single Codebase for iOS & Android',
      'Native Performance Optimization – Platform-Specific Tuning',
      'UI/UX for Mobile – Adaptive Interfaces for All Screen Sizes',
      'State Management – Provider, Bloc, Riverpod, etc.',
      'API Integration – RESTful Services and GraphQL',
      'Offline Capabilities – Local Storage and Sync',
      'App Store Deployment – Google Play & Apple App Store',
      'CI/CD for Mobile – Automated Builds and Testing'
    ],
    description: 'Comprehensive mobile development expertise covering both cross-platform (Flutter) and native (Kotlin/Swift) approaches for building high-performance applications.'
  },
  digital: {
    technologies: [
      {
        image: '/seo.jpeg',
        title: 'SEO',
        description: 'Search Engine Optimization techniques to improve organic website visibility and rankings.',
      },
      {
        image: '/ppc.png',
        title: 'PPC Advertising',
        description: 'Paid advertising campaigns on Google, social media, and other digital platforms.',
      },
      {
        image: '/social.png',
        title: 'Social Media Marketing',
        description: 'Strategies for brand building and engagement across social platforms.',
      },
      {
        image: '/content.png',
        title: 'Content Marketing',
        description: 'Creating valuable content to attract and retain target audiences.',
      }
    ],
    skills: [
      'Search Engine Optimization – Improve Organic Rankings & Traffic',
      'Pay-Per-Click Management – Run Effective Ad Campaigns',
      'Social Media Strategy – Build Brand Presence & Engagement',
      'Content Creation – Develop Compelling Marketing Content',
      'Email Marketing – Design High-Converting Campaigns',
      'Analytics & Reporting – Measure Performance with Google Analytics',
      'Conversion Rate Optimization – Improve Website Performance',
      'Marketing Automation – Streamline Digital Campaigns'
    ],
    description: 'Comprehensive digital marketing expertise covering all major channels and strategies to drive online visibility, customer acquisition, and business growth in the digital landscape.'
  },
  database: {
    technologies: [
      {
        image: '/sql.png',
        title: 'SQL Fundamentals',
        description: 'Structured Query Language for managing relational database systems and performing CRUD operations.',
      },
      {
        image: '/mysql.png',
        title: 'MySQL',
        description: 'Popular open-source relational database management system known for its reliability and performance.',
      },
      {
        image: '/postgresql.jpeg',
        title: 'PostgreSQL',
        description: 'Advanced open-source RDBMS with extensibility and standards compliance features.',
      },
      {
        image: '/mongoDb.png',
        title: 'MongoDB',
        description: 'Leading NoSQL document database for flexible, scalable data storage.',
      }
    ],
    skills: [
      'Database Design – Entity Relationship Modeling & Normalization',
      'Query Optimization – Indexing and Execution Plan Analysis',
      'Data Migration – ETL Processes and Schema Transformations',
      'Backup & Recovery – Disaster Recovery Planning',
      'Security Management – User Privileges and Data Encryption',
      'Performance Tuning – Query Optimization Techniques',
      'Replication & Sharding – High Availability Strategies',
      'Cloud Databases – AWS RDS, Azure SQL, Cloud Firestore'
    ],
    description: 'Comprehensive database management expertise covering both relational (SQL) and non-relational (NoSQL) systems for optimal data storage, retrieval, and analysis solutions.'
  },
  testing: {
    technologies: [
      {
        image: '/selenium.jpeg',
        title: 'Selenium',
        description: 'Open-source automation tool for web application testing across multiple browsers and platforms.',
      },
      {
        image: '/junit.jpeg',
        title: 'JUnit/TestNG',
        description: 'Unit testing frameworks for Java applications to ensure code reliability and functionality.',
      },
      {
        image: '/postman.png',
        title: 'Postman',
        description: 'API testing tool for sending requests, validating responses, and automating test workflows.',
      },
      {
        image: '/jmeter.png',
        title: 'JMeter',
        description: 'Performance testing tool for analyzing and measuring system behavior under load.',
      },
      {
        image: '/cypress.svg',
        title: 'Cypress',
        description: 'Modern JavaScript-based end-to-end testing framework for web applications.',
      },
      {
        image: '/appium.png',
        title: 'Appium',
        description: 'Open-source tool for automating mobile application testing (iOS and Android).',
      }
    ],
    skills: [
      'Test Planning – Requirement Analysis & Test Strategy Design',
      'Test Automation – Scripting & Framework Development',
      'Functional Testing – Unit, Integration, System, and UAT',
      'Performance Testing – Load, Stress, and Scalability Testing',
      'Security Testing – Vulnerability Assessment & Penetration Testing',
      'API Testing – REST/SOAP Validation & Contract Testing',
      'Mobile Testing – Cross-platform & Device Compatibility',
      'CI/CD Integration – Jenkins, GitHub Actions, Azure Pipelines',
      'Defect Tracking – JIRA, Bugzilla, or Test Management Tools',
      'BDD/TDD – Behavior-Driven & Test-Driven Development'
    ],
    description: 'End-to-end software testing expertise covering manual and automated testing methodologies to ensure software quality, reliability, and performance across web, mobile, and API applications.'
  },
  graphic: {
    technologies: [
      {
        image: '/adobe.png',
        title: 'Adobe Photoshop',
        description: 'Industry-standard tool for photo editing, digital painting, and raster-based design.'
      },
      {
        image: '/adobeillustrator.png',
        title: 'Adobe Illustrator',
        description: 'Powerful vector graphics editor for creating logos, icons, and scalable illustrations.'
      },
      {
        image: '/figma.png',
        title: 'Figma',
        description: 'Collaborative design tool for UI/UX design, wireframing, and prototyping in real time.'
      },
      {
        image: '/canva.png',
        title: 'Canva',
        description: 'User-friendly tool for creating social media graphics, presentations, and marketing materials.'
      }
    ],
    skills: [
      'Visual Composition – Layout, Color Theory, Typography',
      'Raster & Vector Design – Bitmap vs. Scalable Graphics',
      'UI/UX Principles – Designing for Web and Mobile Interfaces',
      'Branding – Logo Design, Identity Systems, Moodboards',
      'Digital Imaging – Photo Retouching and Manipulation',
      'Design Systems – Grids, Style Guides, Component Libraries',
      'Tools Mastery – Photoshop, Illustrator, Figma, InDesign',
      'Portfolio Development – Real-world Projects & Case Studies'
    ],
    description: 'Gain creative and technical skills in visual communication, using industry-leading tools to design impactful graphics, brand assets, and user interfaces for digital and print platforms.'
  },
  prompt: {
    technologies: [
      {
        image: '/openai.png',
        title: 'OpenAI GPT',
        description: 'Advanced LLM for generating human-like text responses through optimized prompts.',
      },
      {
        image: '/langchain.jpeg',
        title: 'LangChain',
        description: 'Framework for chaining prompts, tools, and models to build AI workflows.',
      },
      {
        image: '/huggingface.png',
        title: 'Hugging Face',
        description: 'Platform for fine-tuning and deploying LLMs with custom prompt templates.',
      },
      {
        image: '/Llama.jpeg',
        title: 'Llama 2/3',
        description: 'Meta’s open-source LLM optimized for efficient prompt-guided text generation.',
      },
      {
        image: '/claude.png',
        title: 'Claude',
        description: 'AI assistant focused on safety and precision via structured prompting.',
      },
      {
        image: '/gemini.jpg',
        title: 'Gemini',
        description: 'Google’s multimodal model requiring tailored prompts for text/image tasks.',
      }
    ],
    skills: [
      'Prompt Design – Crafting clear, context-rich instructions for LLMs',
      'Few-Shot Learning – Providing examples to improve model output',
      'Chain-of-Thought (CoT) – Guiding models through step-by-step reasoning',
      'Fine-Tuning – Adapting models with domain-specific prompts',
      'Bias Mitigation – Reducing harmful/inaccurate outputs via constraints',
      'Tool Integration – Combining prompts with APIs, databases, or plugins',
      'Evaluation Metrics – Measuring output quality (relevance, coherence, accuracy)',
      'Multimodal Prompts – Optimizing for text, image, or hybrid inputs',
      'A/B Testing – Comparing prompt variations for performance',
      'Security – Preventing prompt injections and data leaks'
    ],
    description: 'Mastery of designing, optimizing, and testing prompts to control AI model behavior for accurate, relevant, and safe outputs across text, code, and multimodal applications.'
  }

};

const CoreTechnologies = () => {
  const path = usePathname();

  // Determine current stack based on URL
  const getCurrentStack = () => {
    if (!path) return 'frontend';
    if (path.includes('/mobile')) return 'mobile'; // Add this line
    if (path.includes('/backend')) return 'backend';
    if (path.includes('/fullstack')) return 'fullstack';
    if (path.includes('/digital')) return 'digital';
    if (path.includes('/database')) return 'database';
    if (path.includes('/testing')) return 'testing';
    if (path.includes('/graphic')) return 'graphic';
    if (path.includes('/prompt')) return 'prompt';
    return 'frontend';
  };

  const currentStack = getCurrentStack();
  const { technologies, skills, description } = techStacks[currentStack];

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
                <p>{description}</p>
              </TechDescriptionContainer>
            </div>

            {/* Right Side - Technologies Cards */}
            <div className="col-md-12">
              <div className="row">
                {technologies.map((tech, index) => (
                  <div
                    className={`
          ${technologies.length === 3 ? 'col-md-4' : ''}
          ${technologies.length === 4 ? 'col-md-6 col-lg-3' : ''}
          ${technologies.length === 6 ? 'col-md-4' : ''}
          mb-4
        `}
                    key={index}
                  >
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
                alt={`${currentStack} Skills Illustration`}
              />
            </div>
          </div>
        </div>
      </div>
    </TechSection>
  );
};

// Styled Components (remain the same as in your original file)
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