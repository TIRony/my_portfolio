import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";
import StartDiv from "./StartDiv";

const Work = () => {
  const intro = "// intro..";
  const Better1 = "// Better Coder";
  const Better2 = "// Better Learner";

  return (
    <section id="work">
      <Container>
        <Row>
          <StartDiv title="work" type="section" />
          {/* <p className="mb-4">// intro..</p> */}
          <h5 className="mb-4" style={{color: "#808dad"}}>{intro}</h5>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                {/* <ServicesItem title="App Development" icon="ri-apps-line" /> */}

                <ServicesItem title="Web Development" icon="ri-computer-line" />

                <ServicesItem title="Full-Stack Development" icon="ri-code-s-slash-line" />
              </div>

              {/* <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              /> */}
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I&apos;m" />
            {/* <h4 className="mb-0 mt-4">// Better Coder</h4>
            <h4 className="mb-4">// Better Learner</h4> */}
            <h5 className="mb-2 mt-4" style={{color: "#808dad"}}>{Better1}</h5>
            <h5 className="mb-4" style={{color: "#808dad"}}>{Better2}</h5>
            <p>
              I am a talented developer with a solid foundation who is extremely driven and progress-focused. I have created strategic projects with a track record of effort and dependability.
              I have developed my abilities in software testing and web development through the Computer Science program.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Work;
