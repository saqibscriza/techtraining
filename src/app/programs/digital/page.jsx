'use client';
import CoreTechnologies from '@/app/components/CoreTechnologies';
import ProgramBanner from '@/app/components/ProgramBanner';
import ProgramOverview from '@/app/components/ProgramOverview';
import ProgramsWeOffer from '@/app/components/ProgramsWeOffer';
import React from 'react';

const DigitalMarketing = () => {
    return (
        <div>
            <ProgramBanner title={"Digital Marketing"} />
            <ProgramOverview
                title="Digital Marketing Overview"
                description="Digital Marketing encompasses all marketing efforts that use digital channels to connect with customers, build brand awareness, and drive conversions. It leverages platforms like search engines, social media, email, and websites to reach targeted audiences with measurable results. Our training covers essential strategies including Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, social media marketing, content creation, email campaigns, and analytics. Digital marketers combine creativity with data analysis to optimize campaigns, improve online visibility, and maximize return on investment. In today's digital-first world, these skills are crucial for businesses of all sizes to effectively compete and grow their online presence."
            />
            <CoreTechnologies />
            <ProgramsWeOffer />
        </div>
    );
};

export default DigitalMarketing;