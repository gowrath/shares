import React from "react";
import Userfront from "@userfront/react";

Userfront.init("jb747qn6");

const SignupForm = Userfront.build({
  toolId: "rlnkoa",
});

function Home() {
  return (
    <div className="center">
      <div></div>

      <div className="center">
        <p>
          <br></br>
          Modern life and subscriptions. Necessary?
          <br></br>
          What if sharing were a bit easier? What if sharing led to connection?
        </p>
      </div>

      <div className="center">
        <img
          src={require("./carousel-1.jpg").default}
          width="300"
          height="150"
          style={{ alignSelf: "center" }}
        />
      </div>

      <div className="write-center">
        <p>
          What if life were a bit simpler? If you could share what you loved
          with friends?
        </p>
      </div>

      <div className="center">
        <img
          src={require("./carousel-2.jpg").default}
          width="300"
          height="200"
          style={{ alignSelf: "center" }}
        />
      </div>
    </div>
  );
}

export default Home;
