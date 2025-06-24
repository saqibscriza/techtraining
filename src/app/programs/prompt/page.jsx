'use client';
import CoreTechnologies from '@/app/components/CoreTechnologies';
import PageHeader from '@/app/components/PageHeader';
import ProgramBanner from '@/app/components/ProgramBanner';
import ProgramOverview from '@/app/components/ProgramOverview';
import ProgramsWeOffer from '@/app/components/ProgramsWeOffer';
import WhatAppsLogo from '@/app/components/WhatAppsLogo';
import React from 'react';

const PromptEngineering = () => {
    return (
        <div>
            <WhatAppsLogo />
            <ProgramBanner title={"Prompt Engineering"} />
            <ProgramOverview
                title="Prompt Engineering Overview"
                description="Prompt Engineering is the practice of crafting effective prompts to interact with AI models like ChatGPT, Bard, or Claude. It involves understanding how language models interpret input and respond, and using structured, concise, or creative language to guide their output. Prompt Engineers are increasingly in demand for roles that blend technical understanding with communication skills, particularly in AI product development, content automation, data analysis, and creative generation. This field includes techniques such as chain-of-thought prompting, zero-shot/few-shot learning, and embedding contextual logic into inputs to improve response accuracy and relevance."
            />
            <CoreTechnologies />
            <ProgramsWeOffer />
        </div>
    );
};

export default PromptEngineering;
