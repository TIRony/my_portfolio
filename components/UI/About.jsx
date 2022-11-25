import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

// import img01 from "../../public/images/img-01.jpg";
// import img02 from "../../public/images/img-02.jpg";
// import img03 from "../../public/images/img-03.jpg";
// import img04 from "../../public/images/hero.jpg";

import classes from "../../styles/about.module.css";
import StartDiv from "./StartDiv";
import EndDiv from "./EndDiv";
import Qualification from "./Qualification";

const About = () => {
  const myself ="// about myself";
  return (
    <section id="about">
      <Container>
        <StartDiv title="about" type="section" />
        <Row>
          {/* <Col lg="6" className={`${classes.about__content}`}> */}
          {/* <SectionSubtitle subtitle="About me" /> */}
          <h5 className="mb-4" style={{ color: "#808dad" }}>
            {myself}
          </h5>
          {/* <h3 className="mt-4">I&apos;m here</h3>
          <h3 className="mb-4">to help your next project</h3> */}
          <h5 className={`${classes.about__self}`} >
            Recent computer science and engineering graduate from American International University Bangladesh (AIUB) with good academic standing
            and strong professional experience.
            I've developed my abilities in software testing and web development throughout the Computer Science program.
            I have the ability to prioritize tasks and manage projects expertly.
            I am a capable and reliable problem-solver.
          </h5>

          {/* <div className=" d-flex align-items-center gap-5">
            <div>
              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.about__icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Problem Solving
              </h6>

              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.about__icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Search A Lot
              </h6>
            </div>

            <div>
              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.about__icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Creative Idea
              </h6>

              <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                <span className={`${classes.about__icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                High Quality
              </h6>
            </div>
          </div> */}

          <h5 className="mb-4" style={{ color: "#808dad" }}>// Keep reading for more details... ⬇️</h5>
          <Qualification
            institute="0. Comilla Modern High School"
            degree="Secondary School Certificate (SSC)"
            year="2009"
            des="GPA: 5.00 out of 5.00"
          />
          <Qualification
            institute="1. Comilla Government college"
            degree="Higher Secondary Certificate (HSC)"
            year="2014 - 2016"
            des="GPA: 3.75 out of 5.00"
          />
          <Qualification
            institute="2. American International University - Bangladesh (AIUB)"
            degree="Bachelor of Science in Computer Science & Engineering (B.Sc. CSE)"
            year="2017 - 2021"
            des="Obtained the BSc degree with CGPA 3.60 out of 4.00 and 
            Completed my thesis with the topic “Smart Virtual Assistant for Student Portal (Machine Learning)” 
            under the supervision of Dr. Abdullah – Al-Zubair, Assistant Professor."
          />
          <h5 className="mb-4" style={{ color: "#808dad" }}>// See it in action</h5>
          <Link className={`${classes.about__link}`} href="https://drive.google.com/file/d/1c6GrAfrnMsSTgXtESszRmzy5lIff1JWr/view?usp=share_link" target="_blank">
            <h5 className="mb-4 ri-link"> See the paper..</h5>
          </Link>

          <Qualification
            institute="3. American International University - Bangladesh (AIUB)"
            degree="Teaching Assistant"
            year="2021"
            des="My work is to Assist the students with their lab tasks and Assist the course teacher in preparing course materials."
          />

          <div className="mt-5">
            <button className="primary__btn">
              <Link href="/#portfolio" scroll={false}>My Portfolio</Link>
            </button>
          </div>
          {/* </Col> */}

          {/* <Col lg="6">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4`}
            >
              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img01} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img02} alt="about-img" />
                </div>
              </div>

              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img03} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img04} alt="about-img" />
                </div>
              </div>
            </div>
          </Col> */}
        </Row>
        <EndDiv type="section" />
      </Container>
    </section>
  );
};

export default About;
