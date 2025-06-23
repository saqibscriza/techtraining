'use client';
import CourseDuration from '@/app/components/CourseDuration';
import FAQSection from '@/app/components/FAQSection';
import ProgramBanner from '@/app/components/ProgramBanner';
import ProgramOverview from '@/app/components/ProgramOverview';
import WhoShouldAttend from '@/app/components/WhoShouldAttend';
import TrainingProgram from '@/app/components/TrainingProgram';
import WhyLearn from '@/app/components/WhyLearn';
import React from 'react'


import CourseCurriculum from '@/app/components/CourseCurriculum';
import TechBenefits from '@/app/components/TechBenefits';

const AngularProgram = () => {
    return (
        <div>
            <ProgramBanner title={"Angular.js Training"} />
            <ProgramOverview title="Angular.js Training In Noida:"
                description="Looking to build robust enterprise-level web applications? Angular is one of the most powerful front-end frameworks, trusted by developers worldwide for creating scalable, maintainable single-page applications. Our Angular Industrial Training in Noida is crafted for students, fresh graduates, and professionals seeking to master this TypeScript-based platform and gain a competitive edge in today's demanding tech landscape." />

            <WhyLearn
                title="Why Learn Angular?"
                subtitle="Angular – The Enterprise-Grade Web Framework"
                description="Angular, developed by Google, is a comprehensive platform for building scalable single-page applications. With its powerful features like two-way data binding, dependency injection, and modular architecture, Angular is the preferred choice for large-scale enterprise applications with complex requirements."
                imageSrc="/WhyLearnAngularImage.png"
                imageAlt="Angular Framework Illustration"
            />
            <TechBenefits />
            <CourseCurriculum />
            <TrainingProgram title="Angular JS" />
            <WhoShouldAttend />
            <CourseDuration
                title="Angular JS"
                description="Angular is the premier framework for building scalable enterprise applications. Our training provides in-depth knowledge of Angular's powerful features like dependency injection, RxJS, and reactive forms, preparing you for high-demand development roles."
            />
            <FAQSection title="Angular JS" />
        </div>
    )
}

export default AngularProgram;
