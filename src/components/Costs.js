import fakeApiData from "./data/subs.json";
import {
  Button,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
//import { Link } from 'react-router-dom';
//import Profile from "./Profile";
import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import useLocalStorage2 from "../hooks/useLocalStorage2";
import React from "react";

function Costs() {
  const subscriptprices = fakeApiData.data.subprices.nodes;

  const [checked, setChecked] = useLocalStorage("checked", false);

  const [priceSum, setPriceSum] = useState(0);

  //const [chk, saveChk] = useLocalStorage(id, )

  //const [disabledButton, setDisabledButton] = useState("",[]);

  const handleClick = (id) => {
    const pvalue = id.target.value;

    //const id = e.target.id;

    const cid = id.target.checked;

    setChecked(id.target.checked);

    //setChecked(id.target.checked==true)

    if (id.target.checked === true) {
      setPriceSum(priceSum + parseFloat(id.target.value));
    } else if (id.target.checked === false) {
      if (priceSum > 0) {
        setPriceSum(priceSum - parseFloat(id.target.value));
      }
    }

    // setDisabledButton((prevState) => [...prevState, id]);
  };

  /*   const handleDoubleClick = (e) => {
      const pvalue = e.target.value;
  
      setPriceSum(priceSum - parseFloat(pvalue));
  setDisabledButton((prevState) => [...prevState, id]);
      //const id = e.target.id;
  
      //
    };
   */

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
                      //defaultChecked={checked}
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
