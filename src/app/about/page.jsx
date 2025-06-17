import React from 'react'
import PageHeader from '../components/PageHeader'
import AboutT3 from '../components/AboutT3'
import Special from '../components/Special'
import WhatAppsLogo from "/Users/saqib/Documents/My data/TechTraining/techtraining/src/app/components/WhatAppsLogo.jsx"; 

const page = () => {
  console.log('main')
return (
<div>
<PageHeader title="About Us" />
<WhatAppsLogo />
<AboutT3 />
<Special />
</div>
)
}
 
export default page