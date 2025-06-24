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

const MySQLProgram = () => {
    return (
        <div>
            <ProgramBanner title={"MySQL Mastery Training"} />
            <ProgramOverview
                title="MySQL Training In Noida:"
                description="Looking to become proficient in one of the world's most popular open-source relational databases? Our MySQL Industrial Training in Noida is designed for aspiring database administrators, backend developers, and data professionals who want to master this powerful database system. Gain hands-on experience with database design, optimization, and administration using MySQL - the database that powers millions of web applications worldwide."
            />
            <WhyLearn
                title="Why Learn MySQL?"
                subtitle="MySQL - The World's Most Popular Open-Source Database"
                description="MySQL is the backbone of modern web applications, used by tech giants and startups alike. As the M in LAMP and MERN stacks, MySQL skills are in high demand for web development, e-commerce systems, and data-driven applications. Learning MySQL gives you expertise in a reliable, scalable database system that combines performance with ease of use."
            />
            <TechBenefits />
            <CourseCurriculum />
            <TrainingProgram title="MySQL" />
            <WhoShouldAttend />
            <CourseDuration
                title="MySQL"
                description="Our MySQL training program provides comprehensive knowledge from basic queries to advanced administration. You'll learn database design principles, performance tuning, security practices, and integration with popular programming languages, preparing you for real-world database challenges."
            />
            <FAQSection title="MySQL" />
        </div>
    );
};

export default MySQLProgram;