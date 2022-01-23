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
        <p>
          <br />
          <br />
          Subscription costs add up.
          <br />
          
          <br />
          
          <br />
          
          <br />
          So does your patience.
          <br />
          <br />
          A friend mentions they have Netflix.
          <br />
          <br />
          An awkward moment ensues.
          <br />
          <br />
          'You did? How come you didn't tell me?'
          <br />
          <br />
          *Friend tries their best to explain*
          <br />
          <br />
          You'd like to share 'subs' with
          your friend without bothering them.
          <br />
          <br />
          This is the technological solution to communicatory problems around
          subscriptions and sharing.
          <br />
          <br />
          <b>Share costs.</b>
          <br />
          <b>Manage credentials.</b>
          <br />
          <b>Keep up-to-date with shows.</b>
          <br />
          <br />
          We operate within the ToS of every major service provider :)
        </p>
      </div>

      

    </div>
  );
}

export default About;
