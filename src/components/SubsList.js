import React from 'react';
import _ from 'lodash';
import Sub from './Sub';

import SubForm from './SubForm';

import Userfront from "@userfront/react";
import logo from './carousel-1.jpg'

Userfront.init("jb747qn6");

const SignupForm = Userfront.build({
  toolId: "rlnkoa"
});



const SubsList = ({ history, subs, setSubs }) => {

const handleOnSubmit = (sub) => {
setSubs([sub, ...subs]);
history.push('/subslist');
};  

  const handleRemoveSub = (id) => {
    setSubs(subs.filter((sub) => sub.id !== id));
  };

  return (
    <React.Fragment>

        <div className="center">
          <div>
          </div>

          <div className="center">
            <p>
            <br></br>
            Modern life and subscriptions. Necessary?
            <br></br>
            What if sharing were a bit easier? What if sharing led to connection?
            </p>
          </div>

          <div className="center">

          <img src={require('./carousel-1.jpg').default} width="300" height="150" style={{ alignSelf: 'center' }}/>

          </div>
          


          <div className="write-center">
            <p>

              What if life were a bit simpler? If you could share what you loved with friends?

            </p>
          </div>

          <div className="center">
          <img src={require('./carousel-2.jpg').default} width="300" height="200" style={{ alignSelf: 'center' }}/>
          </div>

        </div>

        <div className="left">
          <p>
            Simple means paying less. Here's a sampling of what you might pay for every month or year: 
          </p>

          <ul>
          <li>Netflix ($13.99 / mo)</li>
          <li>Spotify ($9.99 / mo)</li>
          <li>HBOMax ($14.99 / mo)</li>
          <li>Disney Plus ($12.99 / mo)</li>
          <li>Amazon Prime ($12.99 / mo)</li>
          <li>Youtube Premium ($13.99 / mo)</li>
          </ul>


        <SubForm handleOnSubmit={handleOnSubmit} />  
        {!_.isEmpty(subs) ? (
          subs.map((sub) => (
            <Sub key={sub.id} {...sub} handleRemoveSub={handleRemoveSub} />
          ))
        ) : (
          <p className="message">No subs available. Please add some subscriptions.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default SubsList;