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

const PythonProgram = () => {
    return (
        <div>
            <ProgramBanner
                title={"Python Development Training"}
                subtitle={"Master Web Development, Data Science & Automation"}
            />

            <ProgramOverview
                title="Python Training In Noida:"
                description="Looking to build versatile skills for web development, data analysis, or automation? Python's simplicity and powerful libraries make it ideal for beginners and professionals alike. Our Python training in Noida covers Django/Flask for web development, Pandas for data analysis, and scripting for automation."
            />

            <WhyLearn
                title="Why Learn Python?"
                subtitle="Python - The Versatile Programming Language"
                description="Python dominates in web development, data science, AI, and scripting with its readable syntax and vast ecosystem. Whether you're building web apps with Django, analyzing data with Pandas, or automating tasks, Python skills are in high demand across industries."
            />

            <TechBenefits />
            <CourseCurriculum />

            <TrainingProgram
                title="Python"
                highlights={[
                    'Django/Flask for web development',
                    'Pandas & NumPy for data analysis',
                    'Python scripting for automation',
                    'REST API development',
                    'Database integration (SQL & NoSQL)',
                    'Deployment to cloud platforms'
                ]}
            />

            <WhoShouldAttend
                profiles={[
                    'Beginners in programming',
                    'Web developers expanding their skillset',
                    'Data analysts and scientists',
                    'IT professionals automating tasks',
                    'Career changers entering tech'
                ]}
            />

            <CourseDuration
                title="Python"
                description="Our Python Industrial Training is a 2-month intensive program covering both fundamentals and specialized tracks (web development/data science). Through real-world projects, you'll build portfolio pieces demonstrating your Python expertise."
                duration="2 Months Intensive Program"
                features={[
                    'Daily coding exercises',
                    'Weekly mini-projects',
                    'Industry-relevant case studies',
                    'Git version control practice',
                    'Career guidance sessions'
                ]}
            />

            <FAQSection
                title="Python"

            />
        </div>
    );
};

export default PythonProgram;