'use client';
import CoreTechnologies from '@/app/components/CoreTechnologies';
import PageHeader from '@/app/components/PageHeader';
import ProgramBanner from '@/app/components/ProgramBanner';
import ProgramOverview from '@/app/components/ProgramOverview';
import ProgramsWeOffer from '@/app/components/ProgramsWeOffer';
import WhatAppsLogo from '@/app/components/WhatAppsLogo';
import React from 'react';

const GraphicDesigning = () => {
    return (
        <div>
            <WhatAppsLogo />
            <ProgramBanner title={"Graphic Designing"} />
            <ProgramOverview
                title="Graphic Designing Overview"
                description="Graphic Designing is the art of visually communicating ideas and information using typography, imagery, color, and layout. It plays a crucial role in branding, marketing, and digital content creation. Graphic designers use tools like Adobe Photoshop, Illustrator, and Figma to create logos, brochures, advertisements, social media graphics, and UI designs. The goal is to make designs that are not only visually appealing but also effective in conveying messages. Strong graphic design enhances user engagement, brand identity, and the overall aesthetics of digital and print media."
            />
            <CoreTechnologies />
            <ProgramsWeOffer />
        </div>
    );
};

export default GraphicDesigning;
