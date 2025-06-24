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

const MERNProgram = () => {
    return (
        <div>
            <ProgramBanner title={"MERN Stack Training"} />
            <ProgramOverview
                title="MERN Stack Training In Noida:"
                description="Want to become a full-stack developer with JavaScript expertise? Our MERN Stack Industrial Training in Noida covers MongoDB, Express, React, and Node.js - the most popular JavaScript stack for building modern web applications. This comprehensive program is designed for students, fresh graduates, and professionals who want to master end-to-end development using a single programming language."
            />
            <WhyLearn
                title="Why Learn MERN Stack?"
                subtitle="Full-Stack JavaScript Development."
                description="The MERN stack combines four powerful technologies that allow you to build complete web applications using just JavaScript. With its component-based architecture, non-blocking I/O, and document-oriented database, MERN enables rapid development of scalable, high-performance applications that are in high demand across industries."
            />
            <TechBenefits />
            <CourseCurriculum />
            <TrainingProgram title="MERN Stack" />
            <WhoShouldAttend />
            <CourseDuration
                title="MERN Stack"
                description="Our MERN Stack training provides comprehensive hands-on experience in building full-stack applications. You'll master both frontend and backend development using JavaScript, preparing you for exciting opportunities as a full-stack developer or for freelance projects."
            />
            <FAQSection title="MERN Stack" />
        </div>
    );
};

export default MERNProgram;