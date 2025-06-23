'use client';

import CoreTechnologies from '@/app/components/CoreTechnologies';
import ProgramBanner from '@/app/components/ProgramBanner';
import ProgramOverview from '@/app/components/ProgramOverview';
import ProgramsWeOffer from '@/app/components/ProgramsWeOffer';
import React from 'react'



const FullStackDevelopment = () => {
    return (
        <div>
            <ProgramBanner title={"FullStack Development"} />
            <ProgramOverview
                title="FullStack Development Overview"
                description="Frontend Development involves creating the visual and interactive parts of a website that users see in their browsers. It focuses on building responsive, user-friendly interfaces using technologies like HTML for structure, CSS for design, and JavaScript for functionality. Frontend developers ensure websites work smoothly across devices and browsers, providing a seamless user experience (UX) and attractive user interface (UI). They often use frameworks like React, Vue, or Angular to speed up development. Good frontend development combines design and coding skills to bring digital experiences to life, making websites not only look good but also perform efficiently and intuitively."
            />
            <CoreTechnologies />
            <ProgramsWeOffer />
        </div>
    )
}

export default FullStackDevelopment;