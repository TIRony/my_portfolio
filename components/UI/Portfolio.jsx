import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

import portfolioData from "../data/portfolio";
import StartDiv from "./StartDiv";
import EndDiv from "./EndDiv";
import Link from "next/link";

const Portfolio = () => {
  const [filter, setFilter] = useState("Projects");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Projects") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Academic Projects") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;
  const works = "// some of my distinguished works";
  const works2 = "// some of my academic works";

  return (
    <section id="portfolio">
      <Container>
        <StartDiv title="portfolio" type="div" />
        <Row>
          <Col lg="6" md="6" className="mb-5">
            {/* <SectionSubtitle subtitle=" My portfolio" /> */}
            <h5 className="mb-4" style={{ color: "#808dad" }}>{works}</h5>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={` ${filter === "Projects" ? active : ""
                  } secondary__btn text-white`}
                onClick={() => setFilter("Projects")}
              >
                Projects
              </button>
              <button
                className={`${filter === "Academic Projects" ? active : ""
                  } secondary__btn text-white`}
                onClick={() => setFilter("Academic Projects")}
              >
                Academic Projects
              </button>
            </div>
          </Col>
        </Row>

        {data?.map((item) => (
          <div key={item.id}>
            <PortfolioItem item={item} />
          </div>
        ))}

        <Row>
          <Col lg="6" md="6" className="mb-5">
            {/* <SectionSubtitle subtitle=" My portfolio" /> */}
            <h5 className="mb-4" style={{ color: "#808dad" }}>{works2}</h5>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <Link href="/#portfolio" scroll={false}>
                <button
                  className={` ${filter === "Projects" ? active : ""
                    } secondary__btn text-white`}
                  onClick={() => setFilter("Projects")}
                >
                  Projects
                </button>
              </Link>
              <Link href="/#portfolio" scroll={false}>
                <button
                  className={`${filter === "Academic Projects" ? active : ""
                    } secondary__btn text-white`}
                  onClick={() => setFilter("Academic Projects")}
                >
                  Academic Projects
                </button>
              </Link>
            </div>
          </Col>
        </Row>

        <EndDiv type="div" />
        <EndDiv type="section" />
      </Container>
    </section>
  );
};

export default Portfolio;

//lg="8" md="4" sm="6"