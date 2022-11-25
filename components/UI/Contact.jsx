import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";
import EndDiv from "./EndDiv";
import StartDiv from "./StartDiv";



const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <StartDiv title="contact" type="section" />
        <Row>
          <Col lg="6" md="6">
            {/* <SectionSubtitle subtitle="Contact me" /> */}
            <h5 className="mb-4" style={{ color: "#808dad" }}>// feel free to contact me</h5>
            <h2 className="mt-4 mb-4">Get in touch... 📡</h2>
            <h5 className={`${classes.about__self}`} >
              Want to reach me??
            </h5>
            <h5 className={`${classes.about__self}`} >
              Send me an email and Thank you for your time and consideration
            </h5>

            <h5 className="mb-4" style={{ color: "#808dad", paddingTop: "40px" }}>// social..</h5>

            <div className={`${classes.social__links}`}>
              {/* <Link href="#">
                <i className="ri-youtube-line"></i>
              </Link> */}
              <Link href="https://github.com/TIRony" target="_blank">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://www.facebook.com/taraqulislam.rony.5" target="_blank">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/tirony/" target="_blank">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="https://www.instagram.com/t_i_rony/" target="_blank">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>

            <h5 className="mb-4" style={{ color: "#808dad", paddingTop: "40px" }}>// address..</h5>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Kha-100/6/B, Namapara, Khilkhet, Dhaka-1229 - Bangladesh</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>Rony120114@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+08801951265659</p>
              </li>
            </ul>
          </Col>

          <Col lg="6" md="8">
            <h5 className="mb-4" style={{ color: "#808dad", paddingTop: "20px" }}>// or reach me here..</h5>

            
                <Form />
              
          </Col>
        </Row>
        <EndDiv type="section" />
      </Container>
    </section>
  );
};

export default Contact;
