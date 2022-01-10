import React from "react";
import Userfront from "@userfront/react";
import ToggleButton from './ToggleButton'

Userfront.init("jb747qn6");

const SignupForm = Userfront.build({
  toolId: "rlnkoa"
});


function Home() {
  return (
    <div>
    <h2 className="center">Home</h2>
    <SignupForm />

    <ToggleButton>
      
    </ToggleButton>

    </div>
  );
}

export default Home;
