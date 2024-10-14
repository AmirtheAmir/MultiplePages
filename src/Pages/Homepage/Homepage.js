import React from "react";
import Firstel from "./Components/Firstel";
import Secondel from "./Components/Secondel";
import Thirdel from "./Components/Thirdel";
import HomeStyle from './Homepage.module.css'

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
