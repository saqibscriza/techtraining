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

const MEANProgram = () => {
    return (
        <div>
            <ProgramBanner title={"MEAN Stack Training"} />
            <ProgramOverview
                title="MEAN Stack Training In Noida:"
                description="Master full-stack development with the MEAN stack - MongoDB, Express.js, Angular, and Node.js. Our MEAN Stack Industrial Training in Noida is designed for developers who want to build robust, scalable web applications using TypeScript and JavaScript. This program combines frontend and backend technologies to create a complete development ecosystem."
            />
            <WhyLearn
                title="Why Learn MEAN Stack?"
                subtitle="Enterprise-Grade JavaScript Development."
                description="The MEAN stack offers a structured approach to full-stack development with Angular's powerful frontend framework and Node.js's efficient backend runtime. With TypeScript's type safety across the entire stack and MongoDB's flexible document model, MEAN is ideal for building complex, data-driven applications."
            />
            <TechBenefits />
            <CourseCurriculum />
            <TrainingProgram title="MEAN Stack" />
            <WhoShouldAttend />
            <CourseDuration
                title="MEAN Stack"
                description="Our MEAN Stack training provides comprehensive experience in building end-to-end applications. You'll master Angular for dynamic UIs, Express/Node for backend services, and MongoDB for data persistence, preparing you for advanced full-stack development roles."
            />
            <FAQSection title="MEAN Stack" />
        </div>
    );
};

export default MEANProgram;