import fakeApiData from "./data/subs.json";
import { Button, ButtonGroup } from "react-bootstrap";
//import { Link } from 'react-router-dom';
//import Profile from "./Profile";
import { useState } from "react";

function App() {
  const subprices = fakeApiData.data.subprices.nodes;

  /**
   * Hi! We've set you up with a fake dataset in the variable `officeholders`.
   *
   * In real-life this data would come from our API but we wanted to keep this
   * exercise self-contained so that you can focus on the UI/UX :)
   *
   * Want to see what this data looks like? Check out the JSON file in the `data` folder or use the
   * following line to check it out in the browser console:
   */

  console.log(subprices);



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
        {subprices.map((nodes, idx) => {
          return (
            <tr key={idx}>
              <td>{nodes.service.fullName}</td>
              <td>{nodes.service.price}</td>
              <td>{nodes.service.monthly}</td>
            </tr>
          );
        })}
      </tbody>

      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default App;
