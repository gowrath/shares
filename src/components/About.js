import React from "react";
import Userfront from "@userfront/react";


Userfront.init("jb747qn6");

const SignupForm = Userfront.build({
  toolId: "rlnkoa",
});

function About() {
  return (
    <div>
      <h2 className="center">Subscriptions</h2>


      <div>
      
      <SignupForm />
      <br />
      <br />

      </div>
      <div className="center">
        <img
          src={require("./carousel-3.jpg").default}
          alt="possible subscriptions"
          width="300"
          height="150"
          style={{ alignSelf: "center" }}
        />
      </div>

      <div className="center">

      </div>

      

    </div>
  );
}

export default About;
