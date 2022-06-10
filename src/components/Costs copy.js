import fakeApiData from "./data/subs.json";
import { Button, ButtonGroup } from "react-bootstrap";
//import { Link } from 'react-router-dom';
//import Profile from "./Profile";
import { useState } from "react";

function App() {
  const subscriptprices = fakeApiData.data.subprices.nodes;

  const handleClick = (e) => {
    const pvalue = e.target.value;

    setPriceSum(priceSum + parseFloat(pvalue));

    const id = e.target.id;

    setDisabledButton((prevState) => [...prevState, id]);
  };

  const [priceSum, setPriceSum] = useState(0);

  const [disabledButton, setDisabledButton] = useState([]);

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
          const id = `b${idx}`;
          return (
            <tr key={idx}>
              <td>{nodes.service.fullName}</td>
              <td>
                <button
                  id={id}
                  value={nodes.service.price}
                  disabled={disabledButton.includes(id)}
                  onClick={handleClick}
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
            <Button>{Math.round(priceSum * 100) / 100}</Button>
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default App;
