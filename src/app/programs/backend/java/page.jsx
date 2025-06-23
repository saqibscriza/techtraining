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

const JavaProgram = () => {
    return (
        <div>
            <ProgramBanner
                title={"Java Backend Development Training"}
                subtitle={"Master Enterprise-Grade Application Development"}
            />

            <ProgramOverview
                title="Java Training In Noida:"
                description="Looking to build robust, scalable enterprise applications? Java powers mission-critical systems in banking, finance, and large-scale enterprises. Our comprehensive Java training in Noida equips you with Spring framework expertise and production-ready development skills for high-demand backend roles."
            />

            <WhyLearn
                title="Why Learn Java?"
                subtitle="Java – The Enterprise Backbone"
                description="Java remains the dominant language for enterprise systems with its strong typing, JVM optimization, and vast ecosystem. With Spring Framework and Hibernate, it provides a complete solution for building secure, high-performance backend systems."
            />

            <TechBenefits />
            <CourseCurriculum />

            <TrainingProgram
                title="Java Backend"
                highlights={[
                    'Spring Framework (Core, Boot, MVC)',
                    'Hibernate & JPA for database integration',
                    'RESTful API development',
                    'Microservices architecture',
                    'Spring Security implementation',
                    'Cloud deployment strategies'
                ]}
            />

            <WhoShouldAttend
                profiles={[
                    'Computer Science graduates',
                    'Backend developers transitioning to Java',
                    'Engineers working with enterprise systems',
                    'Full-stack developers expanding backend skills',
                    'Tech leads architecting Java solutions'
                ]}
            />

            <CourseDuration
                title="Java Backend"
                description="Our Java Industrial Training spans 3 months of intensive learning, covering everything from core Java concepts to advanced Spring framework patterns. Through real-world projects simulating enterprise environments, you'll gain hands-on experience with production-grade application development."
                duration="3 Months Intensive Program"
                features={[
                    'Daily coding exercises',
                    'Weekly project milestones',
                    'Enterprise case studies',
                    'Code reviews by Java experts',
                    'Interview preparation sessions'
                ]}
            />

            <FAQSection
                title="Java Backend"

            />
        </div>
    );
};

export default JavaProgram;