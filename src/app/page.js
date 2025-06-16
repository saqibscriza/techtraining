import Banner from "./components/Banner";
import Career from "./components/Career";
import Courses from "./components/Courses";
import Programs from "./components/Programs";
import T3 from "./components/T3";
import Testimonials from "./components/Testimonials";
import Transform from "./components/Transform";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
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
