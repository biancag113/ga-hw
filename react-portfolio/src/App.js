import React from "react";
import "./styles.css";
import Project from "./components/project";

const App = () => {
  return (
    <>
      <h1 className="portfolio"> Bianca's Portfolio </h1>

      <div className="container">
        <div className="project">
          <Project
            name={"Point of Care"}
            git={"https://github.com/biancag113/poct-frontend"}
            live={"https://dev.d1d9jbnzeugziq.amplifyapp.com/"}
            img={
              "https://portfolio-photos-bg.s3-us-west-2.amazonaws.com/poct.jpg"
            }
          />
        </div>
        <div className="project">
          <Project
            name={"QR Code Reader"}
            git={"https://github.com/biancag113/backend-QR-code-app"}
            live={"https://dev.d1zmy4ykz8dpuj.amplifyapp.com/"}
            img={
              "https://portfolio-photos-bg.s3-us-west-2.amazonaws.com/QRcode.jpg"
            }
          />
        </div>
        <div className="project">
          <Project
            name={"Frontline Coding"}
            git={"https://github.com/biancag113/frontlinecoding"}
            live={"https://www.frontlinecoding.com"}
            img={
              "https://portfolio-photos-bg.s3-us-west-2.amazonaws.com/frontline.jpg"
            }
          />
        </div>
      </div>
    </>
  );
};

export default App;
