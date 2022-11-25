import React from "react";
import classes from "../../styles/div.module.css";

const EndDiv = (props) => {
  if(props.type === "section"){
    return <h2 className={`${classes.end__div}`}>
    {'</section>'}
  </h2>;
  } else{
    return <h2 className={`${classes.end__div}`}>
    {'</div>'}
  </h2>;
  }
};

export default EndDiv;
