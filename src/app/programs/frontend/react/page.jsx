'use client';
import ProgramBanner from '@/app/components/ProgramBanner';
import ProgramOverview from '@/app/components/ProgramOverview';
import CourseDuration from '@/app/components/REACT COMPONENTS/CourseDuration';
import FAQSection from '@/app/components/REACT COMPONENTS/FAQSection';
import ReactBenefits from '@/app/components/REACT COMPONENTS/ReactBenefits';
import ReactCourseCurriculum from '@/app/components/REACT COMPONENTS/ReactCourseCurriculum';
import TrainingProgram from '@/app/components/REACT COMPONENTS/TrainingProgram';
import WhoShouldAttend from '@/app/components/REACT COMPONENTS/WhoShouldAttend';
import WhyLearnReact from '@/app/components/REACT COMPONENTS/WhyLearnReact';
import React from 'react';


const ReactProgram = () => {
    return (
        <div>
            <ProgramBanner title={"React.js Training"} />
            <ProgramOverview
                title="React.js Training In Noida:"
                description="Want to start web development or increase your skills in the profile? Well, React JS happens to be one of today's most sought-after technologies as it is meant for a modern, responsive, dynamic web application. Our  React JS Industrial Training in Noida  is designed by us for students, fresher graduates, and also professionals who want to learn that powerful JavaScript library and hence get a strong foothold within the highly competitive tech-industry."
            />
            <WhyLearnReact />
            <ReactBenefits />
            <ReactCourseCurriculum />
            <TrainingProgram />
            <WhoShouldAttend />
            <CourseDuration />
            <FAQSection />

        </div>
    );
};

export default ReactProgram;