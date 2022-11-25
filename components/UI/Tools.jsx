import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";
import EndDiv from "./EndDiv";
import StartDiv from "./StartDiv";

const Tools = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id="tools">
      <Container>
        <StartDiv title="tools" type="section" />
        <Row>
          <h5 className="mb-4" style={{ color: "#808dad", paddingBottom:"40px" }}>// i like to use these favorite tools right now...</h5>

          <Col lg="4" md="4" className={`${classes.testimonial__back}`}>
          <h4 className="mb-4" style={{ color: "#01d293" }}>Back-End</h4>
          <h5 className="mb-4" style={{ color: "White" }}>NodeJS</h5>
          <h5 className="mb-4" style={{ color: "White" }}>ExpressJS</h5>
          <h5 className="mb-4" style={{ color: "White" }}>PHP</h5>
          <h5 className="mb-4" style={{ color: "White" }}>MongoDB</h5>
          <h5 className="mb-4" style={{ color: "White" }}>MySQL</h5>
          </Col>

          <Col lg="4" md="4" className={`${classes.testimonial__font}`}>
          <h4 className="mb-4" style={{ color: "#01d293" }}>Front-End</h4>

          <h5 className="mb-4" style={{ color: "White" }}>ReactJS</h5>
          <h5 className="mb-4" style={{ color: "White" }}>NextJS</h5>
          <h5 className="mb-4" style={{ color: "White" }}>Redux</h5>
          <h5 className="mb-4" style={{ color: "White" }}>SAAS</h5>
          <h5 className="mb-4" style={{ color: "White" }}>CSS</h5>
          <h5 className="mb-4" style={{ color: "White" }}>HTML</h5>
          <h5 className="mb-4" style={{ color: "White" }}>Material UI </h5>
          <h5 className="mb-4" style={{ color: "White" }}>Ant Design</h5>
          </Col>

          <Col lg="4" md="4" className={`${classes.testimonial__other}`}>
          <h4 className="mb-4" style={{ color: "#01d293" }}>Others</h4>

          <h5 className="mb-4" style={{ color: "White" }}>TypeScripts</h5>
          <h5 className="mb-4" style={{ color: "White" }}>Linux</h5>
          <h5 className="mb-4" style={{ color: "White" }}>AJAX</h5>
          </Col>

          {/* <Col lg="4" md="4">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What my client says</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Jhon Doe</h6>
                    <h6>Software Engineer</h6>
                  </div>
                </div>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi saepe eveniet dolores molestias nisi ullam quis
                  delectus inventore, quidem beatae ipsa pariatur doloribus
                  corrupti! Quisquam expedita minima, neque et quis, fugiat hic
                  iste possimus vitae perspiciatis consequatur quod modi
                  dignissimos.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Henry Nichols</h6>
                    <h6>Web Developer</h6>
                  </div>
                </div>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi saepe eveniet dolores molestias nisi ullam quis
                  delectus inventore, quidem beatae ipsa pariatur doloribus
                  corrupti! Quisquam expedita minima, neque et quis, fugiat hic
                  iste possimus vitae perspiciatis consequatur quod modi
                  dignissimos.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Adam Smith</h6>
                    <h6>Financial Accountant</h6>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi saepe eveniet dolores molestias nisi ullam quis
                  delectus inventore, quidem beatae ipsa pariatur doloribus
                  corrupti! Quisquam expedita minima, neque et quis, fugiat hic
                  iste possimus vitae perspiciatis consequatur quod modi
                  dignissimos.
                </p>
              </div>
            </Slider>
          </Col> */}
        </Row>
        <EndDiv type="section" />
      </Container>
    </section>
  );
};

export default Tools;
