'use client';
import CoreTechnologies from '@/app/components/CoreTechnologies';
import PageHeader from '@/app/components/PageHeader';
import ProgramBanner from '@/app/components/ProgramBanner';
import ProgramOverview from '@/app/components/ProgramOverview';
import WhatAppsLogo from '@/app/components/WhatAppsLogo';
import React from 'react'



const FrontendDevelopment = () => {
    return (
        <div>
            <WhatAppsLogo />
            <ProgramBanner title={"Frontend Development"} />
            <ProgramOverview
                title="Frontend Development Overview"
                description="Frontend Development involves creating the visual and interactive parts of a website that users see in their browsers. It focuses on building responsive, user-friendly interfaces using technologies like HTML for structure, CSS for design, and JavaScript for functionality."
            />
            <CoreTechnologies />
        </div>
    )
}

export default FrontendDevelopment;