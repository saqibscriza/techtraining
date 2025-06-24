'use client';
import CoreTechnologies from '@/app/components/CoreTechnologies';
import PageHeader from '@/app/components/PageHeader';
import ProgramBanner from '@/app/components/ProgramBanner';
import ProgramOverview from '@/app/components/ProgramOverview';
import ProgramsWeOffer from '@/app/components/ProgramsWeOffer';
import WhatAppsLogo from '@/app/components/WhatAppsLogo';
import React from 'react';

const SoftwareTesting = () => {
    return (
        <div>
            <WhatAppsLogo />
            <ProgramBanner title={"Software Testing"} />
            <ProgramOverview
                title="Software Testing Overview"
                description="Software Testing is the process of evaluating a software application to ensure it meets the required standards and functions correctly without errors. It involves manual and automated techniques to identify bugs, performance issues, and usability problems. Testers validate both functional and non-functional aspects of software through different testing levels like unit, integration, system, and acceptance testing. Tools such as Selenium, JUnit, TestNG, and Cypress are commonly used. Effective software testing ensures product quality, reliability, and a smooth user experience by identifying issues before the software reaches end users."
            />
            <CoreTechnologies />
            <ProgramsWeOffer />
        </div>
    );
};

export default SoftwareTesting;
