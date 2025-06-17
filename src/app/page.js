import Banner from "./components/Banner";
import Career from "./components/Career";
import Courses from "./components/Courses";
import Programs from "./components/Programs";
import T3 from "./components/T3";
import Testimonials from "./components/Testimonials";
import Transform from "./components/Transform";
import WhatAppsLogo from "./components/WhatAppsLogo";





export default function Home() {

    return (
        <>
            <WhatAppsLogo />
            <Banner />
            <T3 />
            <Career />
            <Programs />
            <Courses />
            <Testimonials />
            <Transform />
        </>
    );
}
