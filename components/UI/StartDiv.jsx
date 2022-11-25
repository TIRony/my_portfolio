import React from "react";
import classes from "../../styles/div.module.css";

const StartDiv = (props) => {
  if (props.type === "section") {
    return <h2 className={`${classes.start__section}`}>
      {'<section id="'}
      {props.title}
      {'">'}
    </h2>;
  } else {
    return <h2 className={`${classes.start__div}`}>
      {'<dev id="'}
      {props.title}
      {'">'}
    </h2>;
  }
};

export default StartDiv;

// const StartDiv = (props) => {
//   return <h2 className={`${classes.start__div}`}>
//     {'<'}
//     {props.type}
//     {' id="'}
//     {props.title}
//     {'">'}
//   </h2>;
// };

// { '<section id="' }
// { props.title }
// { '">' }

// return <h2 className={`${classes.start__div}`}>
//     {'<section id="'}
//     {props.title}
//     {'">'}
//   </h2>;