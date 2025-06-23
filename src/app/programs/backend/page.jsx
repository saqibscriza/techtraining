'use client';

import CoreTechnologies from '@/app/components/CoreTechnologies';
import ProgramBanner from '@/app/components/ProgramBanner';
import ProgramOverview from '@/app/components/ProgramOverview';
import ProgramsWeOffer from '@/app/components/ProgramsWeOffer';
import React from 'react'



const BackendDevelopment = () => {
    return (
        <div>

            <ProgramBanner title={"Backend Development"} />
            <ProgramOverview
                title="Backend Development Overview"
                description="Backend Development involves building and maintaining the server-side logic, databases, and application infrastructure that power websites and web applications. It focuses on creating robust APIs, managing data storage, and ensuring secure communication between the server and frontend. Backend developers work with technologies like Node.js, Python (Django/Flask), Java (Spring), and Ruby on Rails to handle business logic, database operations, and server configuration. They ensure applications are scalable, performant, and secure, while implementing features like user authentication, data processing, and server optimization. Good backend development combines strong programming skills with system architecture knowledge to create efficient, reliable systems that support seamless frontend experiences."
            />
            <CoreTechnologies />
            <ProgramsWeOffer />
        </div>
    )
}


export default BackendDevelopment;