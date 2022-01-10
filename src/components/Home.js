import React from "react";
import Userfront from "@userfront/react";
import ToggleButton from './ToggleButton';
import logo from './carousel-1.jpg'

Userfront.init("jb747qn6");

const SignupForm = Userfront.build({
  toolId: "rlnkoa"
});


function Home() {
  return (

      <div className="wrapper">
      <div>

      </div>

      <div className="item1">
      <p>
      Here are some subs you might have:
      </p>
      </div>

        <div className="item2">

        <img src={require('./carousel-1.jpg').default} width="300" height="150"/>
        </div>
        <div className="item3">
        <img src={require('./carousel-2.jpg').default} width="300" height="200"/>
        


        </div>

      </div>


  );
}

export default Home;
