import React from "react";
import Userfront from "@userfront/react";
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed'

Userfront.init("jb747qn6");

const SignupForm = Userfront.build({
  toolId: "rlnkoa",
});

const About = () => {
  return (

    
    <ChatEngine 
      
      projectID="b7fb8459-6f80-4cc3-a71c-076cac16ae4e"
      userName="gowrath"
      userSecret="123123"
      height='calc(50vh - 20px)'
      />



   


    
  );
}

export default About;
