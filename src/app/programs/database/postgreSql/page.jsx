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

const PostgreSQLProgram = () => {
    return (
        <div>
            <ProgramBanner title={"PostgreSQL Industrial Training"} />

            <ProgramOverview
                title="PostgreSQL Training in Noida:"
                description="Looking to work with enterprise-grade databases? PostgreSQL is a powerful open-source relational database trusted by startups and Fortune 500 companies alike. Our PostgreSQL Industrial Training in Noida is ideal for developers, DBAs, and data engineers who want to master robust data modeling, performance tuning, and advanced SQL features supported by PostgreSQL."
            />

            <WhyLearn
                title="Why Learn PostgreSQL?"
                subtitle="PostgreSQL - The World's Most Advanced Open-Source RDBMS"
                description="PostgreSQL combines powerful SQL capabilities with support for JSON, full-text search, geospatial queries (PostGIS), and complex transactions. It’s used by major companies like Apple, Instagram, and Reddit. Learning PostgreSQL gives you the skills to handle scalable, high-performance, and secure data-driven applications."
            />

            <TechBenefits />
            <CourseCurriculum />

            <TrainingProgram
                title="PostgreSQL"
                highlights={[
                    'Advanced SQL querying with CTEs & window functions',
                    'Relational schema design & normalization',
                    'PostGIS for geospatial applications',
                    'JSON, arrays, and unstructured data support',
                    'Indexing, constraints, and performance tuning',
                    'Secure user & role management'
                ]}
            />

            <WhoShouldAttend
                profiles={[
                    'Developers working on data-heavy applications',
                    'Database Administrators (DBAs)',
                    'Data engineers & analysts',
                    'Backend developers moving beyond MySQL',
                    'Anyone interested in enterprise-scale RDBMS'
                ]}
            />

            <CourseDuration
                title="PostgreSQL"
                description="This hands-on 2-month PostgreSQL training equips you with production-ready skills including schema design, advanced querying, optimization, and database management. Whether you're building analytics platforms or transactional systems, this course prepares you to use PostgreSQL confidently."
                duration="2 Months Practical Training"
                features={[
                    'Live PostgreSQL environment setup',
                    'Case studies & optimization labs',
                    'Real-world database schema projects',
                    'Data migrations & backup strategies',
                    'Version control integration with pgAdmin or CLI tools'
                ]}
            />

            <FAQSection title="PostgreSQL" />
        </div>
    );
};

export default PostgreSQLProgram;
