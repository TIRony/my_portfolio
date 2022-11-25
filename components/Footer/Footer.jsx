import React from "react";

import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col lg="12" className={`${classes.footer__top}`}>
            <div className={`${classes.footer__creator}`}>
              <h6>Built with ❤️ by Taraqul Islam Rony</h6>
            </div>
          </Col>
          {/* ========= footer bottom ========= */}
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <h6>
                &copy; {year} - Taraqul Islam Rony.  All right
                reserved.{" "}
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
