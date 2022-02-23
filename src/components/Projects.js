import React from "react";
import _ from "lodash";
import Sub from "./Sub";
import SubForm from "./SubForm";



const Projects = ({ history, subs, setSubs }) => {
  const handleOnSubmit = (sub) => {
    setSubs([sub, ...subs]);
    history.push("/projects");
  };

  const handleRemoveSub = (id) => {
    setSubs(subs.filter((sub) => sub.id !== id));
  };

  return (
    <React.Fragment>
      <div>
        <div></div>

        <div>
          <p>
            <br></br>
            
            <br></br>

          </p>
        </div>

        <div className="center">
          <img
            src={require("./carousel-1.jpg").default}
            width="150"
            height="150"
            style={{ alignSelf: "center" }}
            alt="profile photo"
          />
                      <br></br>
            <br></br>
        </div>

        <div className="write-center">
          <p>
            Here are some samples of my work.
          </p>
        </div>

        <div className="center">
          <img
            src={require("./carousel-2.jpg").default}
            width="300"
            height="200"
            style={{ alignSelf: "center" }}
            alt="subscription example"
          />
        </div>
      </div>

      <div className="left">
        <p>

        </p>


        <SubForm handleOnSubmit={handleOnSubmit} />
        {!_.isEmpty(subs) ? (
          subs.map((sub) => (
            <Sub key={sub.id} {...sub} handleRemoveSub={handleRemoveSub} />
          ))
        ) : (
          <p className="left">
            No subs available. Please add some subscriptions.
          </p>
        )}
      </div>

    </React.Fragment>
  );
};

export default Projects;
