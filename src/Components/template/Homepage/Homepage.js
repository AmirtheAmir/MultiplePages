import React from "react";
import Firstel from "../Firstel/Firstel";
import Secondel from "../Secondel/Secondel";
import Thirdel from "../Thirdel/Thirdel";
import HomeStyle from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={HomeStyle.fillPage}>
      <Secondel />
      <Firstel />
      <Thirdel />
    </div>
  );
}

export default Homepage;
