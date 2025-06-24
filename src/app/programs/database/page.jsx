'use client';
import CoreTechnologies from '@/app/components/CoreTechnologies';
import ProgramBanner from '@/app/components/ProgramBanner';
import ProgramOverview from '@/app/components/ProgramOverview';
import ProgramsWeOffer from '@/app/components/ProgramsWeOffer';
import React from 'react';

const DatabaseManagement = () => {
    return (
        <div>
            <ProgramBanner title={"Database Management"} />
            <ProgramOverview
                title="Database Management Overview"
                description="Database Management involves designing, implementing, and maintaining structured systems for efficient data storage, retrieval, and manipulation. It encompasses both relational (SQL) and non-relational (NoSQL) database systems that form the foundation of modern applications. Database professionals work with technologies like MySQL, PostgreSQL, MongoDB, Oracle, and SQL Server to ensure data integrity, security, and optimal performance. They design schemas, optimize queries, implement backup strategies, and ensure ACID compliance for transactional systems. Effective database management combines knowledge of data modeling, query optimization, and system administration to create robust data storage solutions that support business operations and analytics needs."
            />
            <CoreTechnologies />
            <ProgramsWeOffer />
        </div>
    );
};

export default DatabaseManagement;