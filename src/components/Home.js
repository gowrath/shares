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
            <br></br>
            Modern life. Subs. Aren't they ubiqitous?
            </p>
          </div>

          <div className="item2">

          <img src={require('./carousel-1.jpg').default} width="300" height="150"/>
          <br></br>
          </div>
          
          <div className="item3">
          <br></br>
          <br></br>
          <br></br>
          <img src={require('./carousel-2.jpg').default} width="300" height="200"/>
          </div>

          <div className="item3">
            <p>
              <br></br>
              What if life were a bit simpler? If you could share what you loved with friends?
              <br></br>
            </p>
          </div>

      </div>


  );
}

export default Home;
