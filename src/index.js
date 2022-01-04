import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
import Toggle from './components/ThemeToggle';


//import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
        <ThemeProvider>
      <Background>
         <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
            <Toggle />
          </div>
       
        <App />
          </Background>
    </ThemeProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);





/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
