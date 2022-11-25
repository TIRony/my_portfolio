import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineRocket, AiOutlineSearch, AiFillNotification, AiOutlineAlert } from "react-icons/ai";

const PortfolioItem = (props) => {
  const { title, img, liveUrl, keyword, gitUrl, description } = props.item;
  const thinkbeforelaunch = "// think before launch";
  const launchthesite = "// launch the site";
  const request = "// Source code can be shown upon request";
  const githubcode = "// check on github for more details and source code";
  const des = "// description";
  const stack = "// tech stack";
  const seeitinaction = "// See it in action";

  function liveSite() {
    if (liveUrl === "null") {
      return null
    } else if (liveUrl === "/") {

      return <div className={`${classes.portfolio__live} bg-transparent`}>
        <h5 style={{ color: "#808dad" }}>{thinkbeforelaunch}
          <AiOutlineRocket fontSize="1.5em" style={{ color: "#808dad", background: "transparent" }} />
          <AiOutlineAlert fontSize="1.5em" style={{ color: "#808dad", background: "transparent" }} />
        </h5>
        <button className="primary__btn">
          <Link href={liveUrl}>Launch</Link>
        </button>
      </div>
    } else {
      return <div className={`${classes.portfolio__live} bg-transparent`}>
        <h5 style={{ color: "#808dad" }}>{launchthesite} <AiOutlineRocket fontSize="1.5em" style={{ color: "#808dad", background: "transparent" }} /></h5>
        <button className="primary__btn">
          <Link href={liveUrl} target={"_blank"}>Launch</Link>
        </button>
      </div>
    }
  }

  function github() {
    if (gitUrl === "null") {
      return <div className={`${classes.portfolio__live} bg-transparent`}>
        <h5 style={{ color: "#808dad" }}>{request} <AiFillNotification fontSize="1.5em" style={{ color: "#808dad", background: "transparent" }} /></h5>
      </div>
    } else {
      return <div className={`${classes.portfolio__live} bg-transparent`}>
        <h5 style={{ color: "#808dad" }}> {githubcode} <AiOutlineSearch fontSize="1.5em" style={{ color: "#808dad", background: "transparent" }} /></h5>
        <button className="primary__btn" >
          <Link href={gitUrl} target={"_blank"}>Check </Link>
        </button>
      </div>
    }
  }


  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h5 className="mb-4">{title}</h5>
        <h5 style={{ color: "#808dad" }}>{des}</h5>
        <h5 style={{ color: "white" }}>{description}</h5>
        <h5 style={{ color: "#808dad" }}>{stack}</h5>
        {keyword.map((item, index) => (
          <span className={`${classes.portfolio__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <h5 style={{ color: "#808dad" }}>{seeitinaction}</h5>

      <div className={`${classes.portfolio__img}`}>
        <Image alt="portfolio" src={img} width="3000" height="2000" />
      </div>

      {liveSite()}

      {github()}

    </div>
  );
};

export default PortfolioItem;
