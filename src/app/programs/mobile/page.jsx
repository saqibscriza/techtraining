'use client';
import CoreTechnologies from '@/app/components/CoreTechnologies';
import PageHeader from '@/app/components/PageHeader';
import ProgramBanner from '@/app/components/ProgramBanner';
import ProgramOverview from '@/app/components/ProgramOverview';
import ProgramsWeOffer from '@/app/components/ProgramsWeOffer';
import WhatAppsLogo from '@/app/components/WhatAppsLogo';
import React from 'react';

const MobileDevelopment = () => {
    return (
        <div>

            <ProgramBanner title={"Mobile Development"} />
            <ProgramOverview
                title="Mobile Development Overview"
                description="Mobile Development focuses on creating applications for mobile devices like smartphones and tablets. It involves building native apps for iOS (using Swift/Objective-C) and Android (using Kotlin/Java), or cross-platform apps using frameworks like React Native or Flutter. Mobile developers ensure apps are performant, have intuitive user interfaces, and take full advantage of device capabilities like GPS, cameras, and sensors. The field requires understanding platform-specific guidelines, responsive design principles, and mobile-specific challenges like limited screen size and battery optimization. Modern mobile development also includes Progressive Web Apps (PWAs) that combine web and mobile app features."
            />
            <CoreTechnologies />
            <ProgramsWeOffer />
        </div>
    );
};

export default MobileDevelopment;