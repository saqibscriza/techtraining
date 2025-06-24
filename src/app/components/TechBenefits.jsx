'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const TechBenefits = () => {
    const path = usePathname();

    // Benefits data for all technologies
    const techBenefits = {
        frontend: {
            react: {
                title: 'React.js Benefits',
                benefits: [
                    {
                        title: 'High Demand',
                        description: 'The top companies really look for skilled professionals working in React JS.'
                    },
                    {
                        title: 'Ease of Use',
                        description: 'React makes development easier using reusable components.'
                    },
                    {
                        title: 'Broad Applications',
                        description: 'Applied to web, mobile (React Native), and even desktop applications.'
                    },
                    {
                        title: 'Career Advancement',
                        description: 'Learning React opens up exciting jobs and freelance projects.'
                    }
                ]
            },
            angular: {
                title: 'Angular Benefits',
                benefits: [
                    {
                        title: 'Enterprise Demand',
                        description: 'Large corporations prefer Angular for building scalable enterprise applications.'
                    },
                    {
                        title: 'Structured Framework',
                        description: 'Angular provides a complete solution with built-in best practices and patterns.'
                    },
                    {
                        title: 'TypeScript Advantage',
                        description: 'Develop with type safety and enhanced tooling support.'
                    },
                    {
                        title: 'Career Growth',
                        description: 'Angular skills are highly valued in enterprise and government sectors.'
                    }
                ]
            },
            'html-css-js': {
                title: 'HTML/CSS/JS Benefits',
                benefits: [
                    {
                        title: 'Universal Web Foundation',
                        description: 'Every website uses HTML/CSS/JS - these are essential skills for any web developer.'
                    },
                    {
                        title: 'Complete Control',
                        description: 'Understand how the web actually works before using any frameworks or libraries.'
                    },
                    {
                        title: 'Faster Performance',
                        description: 'Vanilla JS sites load quicker than framework-based ones - crucial for user experience.'
                    },
                    {
                        title: 'Career Flexibility',
                        description: 'These fundamentals transfer to all frameworks (React, Angular, Vue) and platforms.'
                    },
                    {
                        title: 'In-Demand Skills',
                        description: '90% of web developer jobs require strong HTML/CSS/JS knowledge as a baseline.'
                    }
                ]
            }
        },
        backend: {
            node: {
                title: 'Node.js Benefits',
                benefits: [
                    {
                        title: 'JavaScript Everywhere',
                        description: 'Use the same language on frontend and backend.'
                    },
                    {
                        title: 'Scalability',
                        description: 'Event-driven architecture handles concurrent connections efficiently.'
                    },
                    {
                        title: 'NPM Ecosystem',
                        description: 'Largest package registry with over 1 million packages.'
                    },
                    {
                        title: 'Real-time Capabilities',
                        description: 'Ideal for chat apps and collaborative tools with WebSockets.'
                    }
                ]
            },
            java: {
                title: 'Java Benefits',
                benefits: [
                    {
                        title: 'Enterprise Standard',
                        description: 'Dominates banking, finance, and large-scale systems.'
                    },
                    {
                        title: 'Strong Typing',
                        description: 'Compile-time checking reduces runtime errors.'
                    },
                    {
                        title: 'Spring Ecosystem',
                        description: 'Comprehensive tools for every enterprise need.'
                    },
                    {
                        title: 'Performance',
                        description: 'JVM optimization delivers high throughput applications.'
                    }
                ]
            },
            python: {
                title: 'Python Benefits',
                benefits: [
                    {
                        title: 'Versatility',
                        description: 'Powers web development, data science, AI, scripting, and more.'
                    },
                    {
                        title: 'Readability',
                        description: 'Clean syntax and English-like commands boost productivity.'
                    },
                    {
                        title: 'Rich Ecosystem',
                        description: '200,000+ packages (Django, Flask, Pandas, NumPy) for every need.'
                    },
                    {
                        title: 'High Demand',
                        description: '#1 most wanted language with 30%+ job market growth (StackOverflow 2023).'
                    }
                ]
            }, csharp: {
                title: 'C# Benefits',
                benefits: [
                    {
                        title: 'Enterprise Power',
                        description: 'Microsoft-backed language for mission-critical Windows applications.'
                    },
                    {
                        title: '.NET Integration',
                        description: 'Seamless access to Microsoft ecosystem (Azure, Office, SQL Server).'
                    },
                    {
                        title: 'Type Safety',
                        description: 'Strong static typing prevents runtime errors in large codebases.'
                    },
                    {
                        title: 'Cross-Platform',
                        description: '.NET Core runs on Windows, Linux, and macOS.'
                    }
                ]
            }, php: {
                title: 'PHP Benefits',
                benefits: [
                    {
                        title: 'Web Dominance',
                        description: 'Powers 78% of all websites including WordPress and Facebook.'
                    },
                    {
                        title: 'Rapid Development',
                        description: 'Built-in web features enable quick prototyping and deployment.'
                    },
                    {
                        title: 'Laravel Framework',
                        description: 'Modern MVC architecture with elegant syntax and robust tools.'
                    },
                    {
                        title: 'Cost-Effective',
                        description: 'Open-source with affordable hosting and vast CMS ecosystems.'
                    }
                ]
            },
            ruby: {
                title: 'Ruby Benefits',
                benefits: [
                    {
                        title: 'Developer Happiness',
                        description: 'Elegant syntax designed for programmer productivity and joy.'
                    },
                    {
                        title: 'Rails Magic',
                        description: 'Convention-over-configuration enables rapid application development.'
                    },
                    {
                        title: 'Startup Favorite',
                        description: 'Chosen by GitHub, Shopify, and Airbnb for initial scaling.'
                    },
                    {
                        title: 'Testing Culture',
                        description: 'Built-in testing frameworks promote robust code practices.'
                    }
                ]
            }

        },
        fullstack: {
            mern: {
                title: 'MERN Stack Benefits',
                benefits: [
                    {
                        title: 'Full JavaScript',
                        description: 'Single language across entire development stack.'
                    },
                    {
                        title: 'Rapid Development',
                        description: 'Rich ecosystems of both React and Node.js.'
                    },
                    {
                        title: 'JSON Throughout',
                        description: 'Consistent data format from database to UI.'
                    },
                    {
                        title: 'Community Support',
                        description: 'Vast resources and solutions available.'
                    }
                ]
            },
            mean: {
                title: 'MEAN Stack Benefits',
                benefits: [
                    {
                        title: 'End-to-End Framework',
                        description: 'Angular provides structured architecture for large apps.'
                    },
                    {
                        title: 'Type Safety',
                        description: 'TypeScript across frontend and backend.'
                    },
                    {
                        title: 'Productivity',
                        description: 'Angular CLI and Node tools accelerate development.'
                    },
                    {
                        title: 'Enterprise Ready',
                        description: 'Proven stack for mission-critical applications.'
                    }
                ]
            }
        },
        mobile: {
            flutter: {
                title: 'Flutter Benefits',
                benefits: [
                    {
                        title: 'Single Codebase',
                        description: 'Build for iOS, Android, web, and desktop from one Dart codebase'
                    },
                    {
                        title: 'Hot Reload',
                        description: 'See changes instantly without losing app state during development'
                    },
                    {
                        title: 'Rich Widget Library',
                        description: 'Beautiful, customizable widgets for pixel-perfect UIs'
                    },
                    {
                        title: 'Native Performance',
                        description: 'Compiles to native ARM code for smooth animations and fast execution'
                    },
                    {
                        title: 'Growing Ecosystem',
                        description: 'Supported by Google with increasing industry adoption'
                    }
                ]
            },
            android: {
                title: 'Android (Kotlin) Benefits',
                benefits: [
                    {
                        title: 'Official Android Language',
                        description: 'Google\'s preferred language for modern Android development'
                    },
                    {
                        title: 'Concise Syntax',
                        description: 'Reduces boilerplate code by ~40% compared to Java'
                    },
                    {
                        title: 'Null Safety',
                        description: 'Built-in null prevention eliminates common crashes'
                    },
                    {
                        title: 'Coroutines',
                        description: 'Simplified asynchronous programming for responsive apps'
                    },
                    {
                        title: 'Interoperability',
                        description: '100% compatible with existing Java code and libraries'
                    }
                ]
            },
        },
        database: {
            sql: {
                title: 'SQL Benefits',
                benefits: [
                    {
                        title: 'Universal Query Language',
                        description: 'Standardized across major relational databases like MySQL, PostgreSQL, and Oracle'
                    },
                    {
                        title: 'Powerful Data Retrieval',
                        description: 'Supports filtering, grouping, joins, and aggregations for complex insights'
                    },
                    {
                        title: 'Industry-Wide Demand',
                        description: 'Essential skill for developers, analysts, and data engineers'
                    },
                    {
                        title: 'Strong Data Integrity',
                        description: 'Enforces ACID compliance and relational constraints'
                    },
                    {
                        title: 'Foundation for Advanced Tools',
                        description: 'Used behind BI tools, ETL pipelines, and backend services'
                    }
                ]
            },
            mysql: {
                title: 'MySQL Benefits',
                benefits: [
                    {
                        title: 'Open Source & Widely Used',
                        description: 'Powering web apps, CMS platforms, and large SaaS systems'
                    },
                    {
                        title: 'Performance Optimization',
                        description: 'Indexing, query caching, and schema design improve scalability'
                    },
                    {
                        title: 'Secure Transactions',
                        description: 'Supports ACID properties and role-based access control'
                    },
                    {
                        title: 'Great for Web Stacks',
                        description: 'Integrated easily with PHP, Node.js, Python, and Java'
                    },
                    {
                        title: 'Reliable Community Support',
                        description: 'Vibrant ecosystem with tools like phpMyAdmin and Workbench'
                    }
                ]
            },
            postgreSql: {
                title: 'PostgreSQL Benefits',
                benefits: [
                    {
                        title: 'Advanced SQL Features',
                        description: 'Support for CTEs, window functions, full-text search, and triggers'
                    },
                    {
                        title: 'JSON & NoSQL Capabilities',
                        description: 'Store and query structured + unstructured data efficiently'
                    },
                    {
                        title: 'Geospatial Support',
                        description: 'PostGIS extension enables GIS and location-based applications'
                    },
                    {
                        title: 'Enterprise-Grade Security',
                        description: 'Role-based access, SSL, and row-level security options'
                    },
                    {
                        title: 'Scalability & Extensibility',
                        description: 'Designed for large datasets, with support for custom data types and functions'
                    }
                ]
            }
        }


    };

    // Extract technology from URL
    const getCurrentTech = () => {
        if (!path) return techBenefits.frontend.react; // Default fallback

        const parts = path.split('/').filter(Boolean);
        const category = parts[1] || 'frontend';
        const tech = parts[2] || 'react';

        return techBenefits[category]?.[tech] || techBenefits.frontend.react;
    };

    const { title, benefits } = getCurrentTech();

    return (
        <BenefitsSection className="py-5">
            <div className="container">
                <SectionHeader className="mb-3">
                    <h2>Here's why learning {title} would be beneficial:</h2>
                </SectionHeader>

                <BenefitsList>
                    {benefits.map((benefit, index) => (
                        <BenefitItem key={index}>
                            <BenefitNumber>{index + 1}</BenefitNumber>
                            <BenefitContent>
                                <BenefitTitle>{benefit.title}: </BenefitTitle>
                                <BenefitDescription>{benefit.description}</BenefitDescription>
                            </BenefitContent>
                        </BenefitItem>
                    ))}
                </BenefitsList>
            </div>
        </BenefitsSection>
    );
};

// Styled Components (same as original)
const BenefitsSection = styled.section`
  padding: 4rem 8.4rem;
`;

const SectionHeader = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #2F327D;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  padding: 1rem 0;
  

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    align-items: flex-start;
    flex-direction: column;
  }
`;

const BenefitNumber = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #2F327D;
  min-width: 2rem;
`;

const BenefitContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
  flex: 1;
`;

const BenefitTitle = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #696984;
`;

const BenefitDescription = styled.span`
  color: #696984;
  line-height: 1.6;
  font-size: 1rem;
  font-weight: 400;
`;

export default TechBenefits;