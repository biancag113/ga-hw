import React from "react";

const Project = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <h5>
        <a href={props.git}>Github</a>
      </h5>
      <h5>
        <a href={props.live}>Link to App</a>
      </h5>
      <img src={props.img} alt={props.alt} />
    </div>
  );
};

export default Project;
