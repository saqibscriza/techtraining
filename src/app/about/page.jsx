import React from 'react'
import PageHeader from '../components/PageHeader'
import AboutT3 from '../components/AboutT3'
import Special from '../components/Special'
 
const page = () => {
  console.log('main')
return (
<div>
<PageHeader title="About Us" />
<AboutT3 />
<Special />
</div>
)
}
 
export default page