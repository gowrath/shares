import fakeApiData from "./data/subs.json";
import { Button, ButtonGroup } from "react-bootstrap";
//import { Link } from 'react-router-dom';
//import Profile from "./Profile";
import { useState } from "react";

function App() {
  const subscriptprices = fakeApiData.data.subprices.nodes;

  const handleClick = (e) => {
    
    setPriceSum(priceSum + e);
    //setDisabled(true);
   
  };

  const [priceSum, setPriceSum] = useState(0);

  const [disabled, setDisabled] = useState(false);

  return (
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
          return (
            <tr key={idx}>
              <td>{nodes.service.fullName}</td>
              <td>
                <button value={nodes.service.price}
                //disabled = {disabled}
                onClick={e => handleClick(parseFloat(e.target.value))}
                >
                  {nodes.service.price}
                </button>
              </td>
              <td>{nodes.service.monthly}</td>
            </tr>
          );
        })}
      </tbody>

      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            <Button>{Math.round(priceSum*100)/100}</Button>
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default App;
