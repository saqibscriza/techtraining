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

const PHPProgram = () => {
    return (
        <div>
            <ProgramBanner
                title={"PHP Development Training"}
                subtitle={"Build Dynamic Web Applications with PHP & Laravel"}
            />

            <ProgramOverview
                title="PHP Training In Noida:"
                description="Want to develop dynamic, database-driven websites? Our PHP training in Noida covers core PHP programming along with the Laravel framework to help you build scalable, secure, and maintainable web applications. Ideal for backend developers and full-stack beginners."
            />

            <WhyLearn
                title="Why Learn PHP?"
                subtitle="PHP - The Web’s Most Proven Backend Language"
                description="PHP powers over 75% of websites including WordPress, Facebook (early days), and Wikipedia. With frameworks like Laravel and tools like Composer, PHP is faster, more structured, and beginner-friendly than ever for web backend development."
            />

            <TechBenefits />
            <CourseCurriculum />

            <TrainingProgram
                title="PHP"
                highlights={[
                    'Core PHP syntax and server-side scripting',
                    'Working with forms, sessions, cookies',
                    'Laravel for structured MVC development',
                    'MySQL database integration',
                    'RESTful API creation',
                    'Deploying PHP apps to shared or cloud hosting'
                ]}
            />

            <WhoShouldAttend
                profiles={[
                    'Beginners in backend/web development',
                    'Students looking for job-ready PHP skills',
                    'WordPress users wanting to learn custom PHP',
                    'Freelancers building dynamic web apps',
                    'Anyone interested in Laravel and MVC'
                ]}
            />

            <CourseDuration
                title="PHP"
                description="Our PHP Industrial Training is a 2-month backend-focused program. It starts with raw PHP and transitions into building enterprise-grade web applications using Laravel and MySQL. You’ll complete real-world projects from scratch to deployment."
                duration="2 Months Hands-on Program"
                features={[
                    'Daily PHP coding labs',
                    'Laravel-based mini-projects',
                    'Form handling and session management',
                    'CRUD applications using MySQL',
                    'Deployment on live server + Git integration'
                ]}
            />

            <FAQSection
                title="PHP"
            />
        </div>
    );
};

export default PHPProgram;
