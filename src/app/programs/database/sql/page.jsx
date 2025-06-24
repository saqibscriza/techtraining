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

const SQLProgram = () => {
    return (
        <div>
            <ProgramBanner title={"SQL Mastery Training"} />
            <ProgramOverview
                title="SQL Training In Noida:"
                description="Want to master data management or enhance your database skills? SQL remains the fundamental language for working with relational databases, powering nearly all data-driven applications. Our SQL Industrial Training in Noida is designed for students, fresh graduates, and professionals who want to gain expertise in database querying, design, and optimization to excel in data-centric roles across industries."
            />
            <WhyLearn
                title="Why Learn SQL?"
                subtitle="SQL - The Language of Data."
                description="SQL (Structured Query Language) is the standard language for relational database management systems. With its universal adoption across MySQL, PostgreSQL, SQL Server, and Oracle, SQL skills are essential for developers, analysts, and database administrators. Mastering SQL enables you to efficiently store, retrieve, and manipulate data - a critical skill in our data-driven world."
            />
            <TechBenefits />
            <CourseCurriculum />
            <TrainingProgram title="SQL" />
            <WhoShouldAttend />
            <CourseDuration
                title="SQL"
                description="Our SQL training program provides comprehensive hands-on experience with database concepts, query writing, and performance optimization. You'll gain practical skills applicable to various database systems, preparing you for roles in database administration, backend development, or data analysis."
            />
            <FAQSection title="SQL" />
        </div>
    );
};

export default SQLProgram;