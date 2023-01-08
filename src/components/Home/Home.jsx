import React, { useState,useEffect } from "react";
import "./Home.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import { professions } from "../../apis/DATA";

const cubeHover = () => {
  const ele = document.getElementById("cubeDiv");
  const shadow = document.getElementById("shadow");
  ele.style.cursor = "grab";
  ele.style.animationPlayState = "paused";
  shadow.style.animationPlayState = "paused";
};
const cubeHoverLeave = () => {
  document.getElementById("cubeDiv").style.animationPlayState = "running";
  document.getElementById("shadow").style.animationPlayState = "running";
};

const Home = () => {
  // const transition = { duration: 2, type: 'spring' }
  const [text, setText] = useState(professions[6]);
  const [index, setIndex] = useState(0);

// function for changing the profession texts
useEffect(() => {
  setTimeout(() => {
    if (index < professions.length-1) {
      setText(professions[index]);
      setIndex(index + 1);
    } else {
      setText(professions[index]);
      setIndex(0);
    }
  }, 4000);
}, [index])

  

  return (
    <div className="home section" id="home">
      <div className="left">
        <div className="center" id="center">
          <div
            className="cubeDiv"
            id="cubeDiv"
            onMouseEnter={() => cubeHover()}
            onMouseLeave={() => cubeHoverLeave()}
          >
            <div className="face cFront" id="javascript">
              <img
                src="https://cdn3d.iconscout.com/3d/free/thumb/javascript-logo-6563586-5453022.png"
                alt=""
                className="cubeImg"
              />
            </div>
            <div className="face cRight" id="github">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/github-159-721954.png"
                alt=""
                className="cubeImg"
                style={{ height: "90%", width: "90%", right: "-15px" }}
              />
            </div>
            <div className="face cLeft" id="react.js">
              <img
                src="https://cdn3d.iconscout.com/3d/free/thumb/react-5645899-4695757.png"
                alt=""
                className="cubeImg"
                style={{ height: "130%", width: "130%", right: "-60px" }}
              />
            </div>
            <div className="face cTop" id="Database - mongoDb">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/database-setting-6762731-5581065.png"
                alt=""
                className="cubeImg"
              />
            </div>
            <div className="face cBottom" id="google cloud">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/google-cloud-2038785-1721675.png"
                alt=""
                className="cubeImg"
                style={{ height: "100%", width: "100%", right: "-15px" }}
              />
            </div>
            <div className="face cBack" id="api handling">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/api-setting-5374079-4496048.png"
                alt=""
                className="cubeImg"
              />
            </div>
          </div>
          <div id="shadow"></div>
        </div>
      </div>
      <div className="right">
        <div className="h-name">
          <span> Hey, I'm</span>
          <span className="heading-text">Rohit Rajendra Barate</span>
        </div>
        <div className="info">
          <span>About Me :</span>
          <span>
            I'm a <span className="heading-text profText">{text}.</span><br/>I Like To Make responsive Websites
            And Learn New Programming Languages.My favorite Programming Language
            is Javascript and this is the most powerfull language in the
            software industry.
          </span>
        </div>
        <div className="button">
          <button className="btn about-btn">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              {" "}
              About Me{" "}
            </Link>
            <BsArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
