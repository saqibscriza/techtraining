'use client';
import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutT3 = () => {
    const features = [
        "WIDE RANGE OF TECH COURSES",
        "INDUSTRY-EXPERT TRAINERS",
        "FLEXIBLE, SELF-PACED LEARNING",
        "INTERACTIVE CONTENT & ASSIGNMENTS",
        "COURSE COMPLETION CERTIFICATES",
        "USER-FRIENDLY WEBSITE INTERFACE"
    ];

    return (
        <AboutSection className="py-5">
            <div className="container">
                <div className="row">
                    {/* Left Side - Main Content */}
                    <div className="col-lg-7">
                        <SectionHeader className="text-start mb-3">
                            <SectionSubtitle className="mb-1">About T3</SectionSubtitle>
                            <SectionTitle className="mb-4">Think. Train. <span style={{ color: "#fcbe00" }}>Transform.</span></SectionTitle>
                        </SectionHeader>

                        <AboutContent>
                            <p className="">
                                T3 - The Tech Training, an initiative by Scriza Pvt. Ltd., brings opportunities for employment through a 6-month industrial training program. We focus on important tech skills, such as frontend, backend, full-stack development, and advanced digital marketing. Our program includes hands-on learning, a certificate, and 100% job assistance.
                            </p>
                        </AboutContent>

                        <div className="d-flex flex-column gap-4 mb-5">
                            <MissionCard className="">
                                <h3 className="mb-3">Our Mission</h3>
                                <p className="mb-0">T3 wants to help people acquire valuable tech skills and also grow personally so that, in the end, people can succeed not just in a job but in life too.</p>
                            </MissionCard>
                            <VisionCard className="">
                                <h3 className="mb-3">Our Vision</h3>
                                <p className="mb-0">A world where everyone interested in tech can learn, get their career growing, and bring new ideas to life.</p>
                            </VisionCard>
                        </div>
                    </div>

                    {/* Right Side - Features */}
                    <div className="col-lg-5">

                        <FeaturesContainer className="h-100 d-flex align-items-center"> {/* New wrapper div */}
                            <FeaturesSection>
                                <div className="row">
                                    {features.map((feature, index) => (
                                        <div className="col-12 mb-1" key={index}>
                                            <FeatureCard className="p-3 h-100 d-flex align-items-start">
                                                <FeatureText className="mb-0">{feature}</FeatureText>
                                            </FeatureCard>
                                        </div>
                                    ))}
                                </div>
                            </FeaturesSection>
                        </FeaturesContainer>
                    </div>
                </div>
            </div>
        </AboutSection>
    );
};

// Styled Components (keep the same as before)
const AboutSection = styled.section`
  background-color: #f8f9fa;
  padding: 6rem 8rem;

  @media (max-width: 992px) {
    padding: 4rem 2rem;
  }
`;

const FeaturesContainer = styled.div`
  padding-left: 2rem;

  @media (max-width: 992px) {
    padding-left: 0;
    padding-top: 2rem;
  }
`;
const SectionHeader = styled.div``;

const SectionSubtitle = styled.p`
    font-size: 1.5rem;
    color: #f24080;

    `;

const SectionTitle = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    color: #301a52;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
    `;

const AboutContent = styled.div`
    margin-bottom:60px;
    p {
        font-size: 1rem;
        line-height: 1.5;
        color: #3f354d;
    }
    `;

const MissionCard = styled.div`
    

    h3 {
        color: #301a52;
        font-size: 1.5rem;
    }

    p {
        color: #504462;
        line-height: 1.6;
    }
    `;

const VisionCard = styled(MissionCard)`
    border-left-color: #fcc101;
    `;

const FeaturesSection = styled.div`
    
    display:flex;
    align-items:center;

    `;

const FeatureCard = styled.div`
    background: #ededec;
    
    `;



const FeatureText = styled.p`
    color: #301a52;
    font-weight: 600;
    font-size: 0.75rem;
    `;

export default AboutT3;