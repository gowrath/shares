import React from "react";
import Userfront from "@userfront/react";

Userfront.init("jb747qn6");

const SignupForm = Userfront.build({
  toolId: "rlnkoa"
});


function Home() {
  return (
    <div>
    <h2 className="center">Home</h2>
    <SignupForm />
    </div>
  );
}

export default Home;
