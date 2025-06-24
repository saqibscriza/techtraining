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

const FlutterProgram = () => {
    return (
        <div>
            <ProgramBanner
                title={"Flutter Development Training"} />
            <ProgramOverview
                title="Flutter Training In Noida:"
                description="Looking to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase? Our Flutter Industrial Training in Noida is designed for students, fresh graduates, and professionals who want to master this revolutionary framework by Google. Gain hands-on experience building cross-platform applications with Dart programming language and launch your career in mobile development."
            />
            <WhyLearn
                title="Why Learn Flutter?"
                subtitle="Build for Any Screen with a Single Codebase."
                description="Flutter is Google's UI toolkit for crafting beautiful, natively compiled applications from a single codebase. With its hot reload feature, rich widget library, and growing adoption by major companies, Flutter skills are in high demand for modern app development."
            />
            <TechBenefits />
            <CourseCurriculum />
            <TrainingProgram
                title="Flutter Development" />
            <WhoShouldAttend />
            <CourseDuration
                title="Flutter"
                description="Flutter is transforming mobile development with its cross-platform capabilities. Our training program provides comprehensive hands-on experience to build production-ready apps for both iOS and Android platforms, preparing you for exciting opportunities in mobile development or freelance work."
            />
            <FAQSection
                title="Flutter" />
        </div>
    );
};

export default FlutterProgram;