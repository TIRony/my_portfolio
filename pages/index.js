import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Work from "../components/UI/Work";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Tools from "../components/UI/Tools";
import Contact from "../components/UI/Contact";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Work />
      <Portfolio />
      <About />
      <Tools />
      <Contact />
    </Fragment>
  );
}
