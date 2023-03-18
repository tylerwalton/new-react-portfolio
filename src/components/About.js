import React from "react";
import { Parallax } from "react-parallax";
const About = () => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2zoNC34rMiSt7qpNHn5ARBcpMdwPAzsKHWmCqOcfqw&usqp=CAU&ec=48600112"
        bgImageAlt="the dog"
        strength={500}
      >



        <h1>Hey it's me</h1>





        <div style={{ height: "800px" }} />
      </Parallax>
    </div>
  );
};

export default About;
