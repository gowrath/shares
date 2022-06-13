import React from "react";
import Userfront from "@userfront/react";
import { ChatEngine } from 'react-chat-engine';


Userfront.init("jb747qn6");

const SignupForm = Userfront.build({
  toolId: "rlnkoa",
});

const About = () => {
  return (

    <React.Fragment>
    <ChatEngine 
      height="100vh"
      projectID="b7fb8459-6f80-4cc3-a71c-076cac16ae4e"
      userName="gowrath"
      userSecret="123123"



    />

</React.Fragment>

    
  );
}

export default About;
