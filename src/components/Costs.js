import fakeApiData from "./data/subs.json";
import { Button, ButtonGroup } from "react-bootstrap";
//import { Link } from 'react-router-dom';
//import Profile from "./Profile";
import { useState } from "react";

function App() {
  const subscriptprices = fakeApiData.data.subprices.nodes;

  const [priceSum, setPriceSum] = useState();

  // let sum1 = Object.values(subscriptprices);

  let totalPrice = 0;

  let sum2 = subscriptprices.map((nodes, idx) => {
    totalPrice += parseFloat(nodes.service.price);
    return totalPrice;
  });

  /**
   * Hi! We've set you up with a fake dataset in the variable `officeholders`.
   *
   * In real-life this data would come from our API but we wanted to keep this
   * exercise self-contained so that you can focus on the UI/UX :)
   *
   * Want to see what this data looks like? Check out the JSON file in the `data` folder or use the
   * following line to check it out in the browser console:
   */

  /*   const sortedOfficerholders = subprices.sort(
          (a, b) => a.position.rowOrder - b.position.rowOrder
        );
        const [officer, setOfficer] = useState(); */

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
                <Button
                onClick={() => {
                  setPriceSum (subscriptprices[idx])

                }
              }
                
                
                
                >
                
                {nodes.service.price}
                
                </Button>
                
                </td>
              <td>{nodes.service.monthly}</td>
            </tr>
          );
        })}
      </tbody>

      <tfoot>
        <tr>
          <td></td>
          <td>
            <Button>
              <a onClick={() => console.log(sum2)}>{totalPrice}</a>
            </Button>
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}



export default App;
