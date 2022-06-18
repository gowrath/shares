import fakeApiData from "./data/subs.json";
import { Button, ButtonGroup, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
//import { Link } from 'react-router-dom';
//import Profile from "./Profile";
import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";



function Costs() {
  const subscriptprices = fakeApiData.data.subprices.nodes;


  const [checked, setChecked] = useLocalStorage([],"")
   
  
  
    


  const handleClick = (e) => {
    const pvalue = e.target.value;

    const id = e.target.id;

    const cid = e.target.checked



    if (e.target.checked) {
      setPriceSum(priceSum + parseFloat(pvalue));

      

    }

    else {
      if (priceSum > 0) {

        setPriceSum(priceSum - parseFloat(pvalue));

        
      };

      

    }


  };

  /*   const handleDoubleClick = (e) => {
      const pvalue = e.target.value;
  
      setPriceSum(priceSum - parseFloat(pvalue));
  setDisabledButton((prevState) => [...prevState, id]);
      //const id = e.target.id;
  
      //
    };
   */


  const [priceSum, setPriceSum] = useState(0);

  //const [disabledButton, setDisabledButton] = useState([]);

  return (
    <div className="write-center">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th data-field="money">Price</th>
          <th scope="col">Monthly?</th>
        </tr>
      </thead>

      <tbody>
        {subscriptprices.map((nodes, idx) => {
          const id = `b${idx}`;
          return (
            <tr key={idx}>
              <td>{nodes.service.fullName}</td>
              <td>
                <label>
                  <input
                    defaultChecked={checked}
                    className="check-space"
                    type="checkbox"
                    id={id}
                    value={nodes.service.price}
                    //disabled={disabledButton.includes(id)}
                    onClick={handleClick}
                  //onDoubleClick={handleDoubleClick}

                  />

                  {nodes.service.price}


                </label>
              </td>
              <td className="left">{nodes.service.monthly}</td>
            </tr>
          );
        })}
      </tbody>

      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            <Button>{Math.round(priceSum * 100) / 100}</Button>
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
    </div>
  );
}

export default Costs;
