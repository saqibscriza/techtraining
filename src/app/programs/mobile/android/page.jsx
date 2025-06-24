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

const AndroidKotlinProgram = () => {
    return (
        <div>
            <ProgramBanner
                title={"Android Kotlin Development Training"}

            />
            <ProgramOverview
                title="Android Kotlin Training In Noida:"
                description="Want to build high-performance native Android applications using modern development practices? Our Android Kotlin Industrial Training in Noida is designed for students, fresh graduates, and professionals looking to master Google's preferred language for Android development. Gain hands-on experience with Jetpack components, modern architecture patterns, and industry best practices to launch your career as an Android developer."
            />
            <WhyLearn
                title="Why Learn Android Kotlin?"
                subtitle="Build Native Android Apps with Modern Tools."
                description="Kotlin is now Google's preferred language for Android development, offering concise syntax, null safety, and full interoperability with Java. With Jetpack Compose revolutionizing UI development and growing demand for Kotlin skills, mastering Android development with Kotlin opens doors to exciting career opportunities in mobile development."
            />
            <TechBenefits

            />
            <CourseCurriculum

            />
            <TrainingProgram
                title="Android Kotlin Development"
            />
            <WhoShouldAttend />
            <CourseDuration
                title="Android Kotlin"
                description="Our Android Kotlin training program provides comprehensive hands-on experience to build production-ready native applications. You'll learn modern development practices using Jetpack components, architecture patterns, and the latest tools, preparing you for professional Android development roles or freelance opportunities."
            />
            <FAQSection
                title="Android Kotlin"

            />
        </div>
    );
};

export default AndroidKotlinProgram;