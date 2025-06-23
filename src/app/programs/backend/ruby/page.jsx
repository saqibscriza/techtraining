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

const RubyProgram = () => {
    return (
        <div>
            <ProgramBanner
                title={"Ruby on Rails Development Training"}
                subtitle={"Build Powerful Web Applications with Ruby"}
            />

            <ProgramOverview
                title="Ruby Training In Noida:"
                description="Ready to dive into rapid web application development? Our Ruby training in Noida covers core Ruby programming and the popular Ruby on Rails framework. Learn to build scalable web apps with MVC architecture, integrate databases, and follow agile workflows."
            />

            <WhyLearn
                title="Why Learn Ruby?"
                subtitle="Ruby - Simple, Elegant, Productive"
                description="Ruby is praised for its readable syntax and developer happiness. Paired with Rails, it powers thousands of websites including GitHub, Shopify, and Airbnb. Whether you're a beginner or transitioning from another language, Ruby accelerates your development journey."
            />

            <TechBenefits />
            <CourseCurriculum />

            <TrainingProgram
                title="Ruby"
                highlights={[
                    'Core Ruby programming fundamentals',
                    'Web development with Ruby on Rails',
                    'RESTful API development',
                    'MVC architecture implementation',
                    'ActiveRecord for database integration',
                    'Agile development & TDD with RSpec'
                ]}
            />

            <WhoShouldAttend
                profiles={[
                    'Beginners in software development',
                    'Web developers transitioning to Ruby',
                    'Freelancers & startup founders',
                    'Back-end developers exploring Rails',
                    'Anyone interested in rapid web app prototyping'
                ]}
            />

            <CourseDuration
                title="Ruby"
                description="Our Ruby on Rails Industrial Training is a 2-month project-based program designed to take you from zero to deployment. Through coding labs, agile sprints, and live server setups, you'll gain job-ready backend development skills."
                duration="2 Months Project-Based Training"
                features={[
                    'Hands-on Ruby & Rails coding',
                    'End-to-end CRUD applications',
                    'Version control with Git & GitHub',
                    'Test-driven development with RSpec',
                    'Deployment on Heroku or Render'
                ]}
            />

            <FAQSection
                title="Ruby"
            />
        </div>
    );
};

export default RubyProgram;
