import React from 'react'
import PageHeader from '../components/PageHeader'
import Programs from '../components/Programs'
import Transform from '../components/Transform'
import WhatAppsLogo from '../components/WhatAppsLogo'

const training = () => {
    return (

        <div>
            <PageHeader title="Training Courses" />
            <WhatAppsLogo />
            <Programs />
            <Transform />
        </div>

    )
}

export default training;
