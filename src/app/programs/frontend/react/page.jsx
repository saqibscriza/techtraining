'use client';
import ProgramBanner from '@/app/components/ProgramBanner';
import ProgramOverview from '@/app/components/ProgramOverview';
import CourseDuration from '@/app/components/CourseDuration';
import FAQSection from '@/app/components/FAQSection';

import TrainingProgram from '@/app/components/TrainingProgram';
import WhoShouldAttend from '@/app/components/WhoShouldAttend';
import WhyLearn from '@/app/components/WhyLearn';
import React from 'react';
import CourseCurriculum from '@/app/components/CourseCurriculum';
import TechBenefits from '@/app/components/TechBenefits';


const ReactProgram = () => {
    return (
        <div>
            <ProgramBanner title={"React.js Training"} />
            <ProgramOverview
                title="React.js Training In Noida:"
                description="Want to start web development or increase your skills in the profile? Well, React JS happens to be one of today's most sought-after technologies as it is meant for a modern, responsive, dynamic web application. Our  React JS Industrial Training in Noida  is designed by us for students, fresher graduates, and also professionals who want to learn that powerful JavaScript library and hence get a strong foothold within the highly competitive tech-industry."
            />
            <WhyLearn title="Why Learn React JS?" subtitle="React JS – Powering Modern Web Interfaces." description="React JS, a child of Facebook, is an extremely popular library to design an interactive user interface. With its flexibility, great performance, and community support, the skill is absolutely important to possess for web developers.
" />
            <TechBenefits />
            <CourseCurriculum />
            <TrainingProgram title="React JS" />
            <WhoShouldAttend />
            <CourseDuration title="React JS"
                description="React JS is a must-have skill for web developers, and our training program provides the perfect platform to master it. With expert guidance and practical experience, you’ll be well-prepared to work in the tech industry or pursue freelance opportunities." />
            <FAQSection title="React JS" />

        </div>
    );
};

export default ReactProgram;