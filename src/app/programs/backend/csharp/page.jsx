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

const CSharpProgram = () => {
    return (
        <div>
            <ProgramBanner
                title={"C# & .NET Development Training"}
                subtitle={"Build Enterprise Applications with Microsoft's Flagship Language"}
            />

            <ProgramOverview
                title="C# Training In Noida:"
                description="Looking to develop robust, scalable applications for Windows, web, or cloud? C# is Microsoft's premier language for building enterprise-grade solutions. Our C# training in Noida covers .NET Core, ASP.NET, Entity Framework, and Azure integration."
            />

            <WhyLearn
                title="Why Learn C#?"
                subtitle="The Language of Enterprise Development"
                description="C# powers mission-critical systems in banking, healthcare, and government sectors. With .NET's cross-platform capabilities and Unity's game development features, C# skills open doors to diverse career paths in enterprise and gaming industries."
            />

            <TechBenefits />
            <CourseCurriculum />

            <TrainingProgram
                title="C# & .NET"
                highlights={[
                    'C# language fundamentals and OOP',
                    '.NET Core framework',
                    'ASP.NET MVC and Web API development',
                    'Entity Framework Core for database access',
                    'Windows Presentation Foundation (WPF)',
                    'Azure cloud integration',
                    'Microservices architecture',
                    'Unit testing with xUnit'
                ]}
            />

            <WhoShouldAttend
                profiles={[
                    'Computer Science graduates',
                    'Windows application developers',
                    'Backend engineers transitioning to .NET',
                    'Enterprise software developers',
                    'Game developers using Unity'
                ]}
            />

            <CourseDuration
                title="C# & .NET"
                description="Our C# Industrial Training is a 3-month intensive program covering everything from core language concepts to advanced architectural patterns. Through real-world projects simulating enterprise environments, you'll gain hands-on experience with production-grade application development."
                duration="3 Months Intensive Program"
                features={[
                    'Daily coding challenges',
                    'Weekly enterprise application projects',
                    'Microsoft certification preparation',
                    'Code reviews by .NET experts',
                    'Interview preparation sessions',
                    'Azure deployment labs'
                ]}
            />

            <FAQSection
                title="C# & .NET"

            />
        </div>
    );
};

export default CSharpProgram;