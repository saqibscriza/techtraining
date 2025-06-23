'use client';
import ProgramBanner from '@/app/components/ProgramBanner';
import ProgramOverview from '@/app/components/ProgramOverview';
import CourseDuration from '@/app/components/CourseDuration';
import FAQSection from '@/app/components/FAQSection';
import ReactBenefits from '@/app/components/REACT COMPONENTS/ReactBenefits';
import ReactCourseCurriculum from '@/app/components/REACT COMPONENTS/ReactCourseCurriculum';
import TrainingProgram from '@/app/components/TrainingProgram';
import WhoShouldAttend from '@/app/components/WhoShouldAttend';
import WhyLearn from '@/app/components/WhyLearn';
import React from 'react';
import CourseCurriculum from '@/app/components/CourseCurriculum';
import TechBenefits from '@/app/components/TechBenefits';


const NodeProgram = () => {
    return (
        <div>
            <ProgramBanner title={"Node.js Training"} />
            <ProgramOverview
                title="Node.js Training In Noida:"
                description="Want to develop lightning-fast web servers and APIs? Node.js powers the backend of modern web applications with its non-blocking I/O model. Our intensive Node.js training in Noida helps developers of all levels harness JavaScript's full potential on the server side, preparing them for high-demand backend and full-stack roles."
            />
            <WhyLearn title="Why Learn Node JS?" subtitle="Node.js – JavaScript Everywhere"
                description="Node.js extends JavaScript's reach to server-side development, allowing developers to use a single language across the full stack. With frameworks like Express and Nest.js, it provides a robust foundation for building everything from REST APIs to microservices architectures." />
            <TechBenefits />
            <CourseCurriculum />
            <TrainingProgram title="Node JS" />
            <WhoShouldAttend />
            <CourseDuration title="Node JS"
                description="Node.js is an essential skill for modern backend and full-stack developers, and our intensive training program provides the ideal environment to master it. Through hands-on projects and expert mentorship, you'll gain the practical skills needed to build scalable server applications and pursue high-value opportunities in the tech industry." />
            <FAQSection title="Node JS" />
        </div>
    );
};

export default NodeProgram;