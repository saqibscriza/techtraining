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

const HtmlCssJsProgram = () => {
    return (
        <div>
            <ProgramBanner title={"HTML/CSS/JS Training"} />
            <ProgramOverview title="HTML/CSS/JS Training In Noida:"
                description="Looking to build the foundation of web development? HTML, CSS, and JavaScript form the essential trinity of front-end technologies that power every website on the internet. Our HTML/CSS/JS Industrial Training in Noida is designed for beginners, career-changers, and aspiring developers who want to master these core web technologies and create responsive, interactive websites from scratch. Gain hands-on experience with modern web standards and best practices to kickstart your career in the ever-growing digital landscape." />

            <WhyLearn
                title="Why Learn HTML/CSS/JS?"
                subtitle="The Foundation of Web Development"
                description="HTML, CSS, and JavaScript are the essential building blocks of every website. Mastering these core technologies gives you complete control over web content, presentation, and interactivity. Whether you're starting your development journey or expanding your skills, these fundamental languages remain the most valuable and universally required skills in the tech industry."

            />
            <TechBenefits />
            <CourseCurriculum />
            <TrainingProgram title="HTML/CSS/JS" />
            <WhoShouldAttend />
            <CourseDuration
                title="HTML/CSS/JS"
                description="HTML, CSS, and JavaScript are the fundamental building blocks of the web. Our training provides comprehensive knowledge of core web technologies including semantic HTML5, modern CSS3 layouts, and interactive JavaScript programming, preparing you for essential front-end development roles."
            />
            <FAQSection title="HTML/CSS/JS" />
        </div>
    )
}

export default HtmlCssJsProgram;
