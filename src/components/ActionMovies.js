import { useEffect, useState } from "react";
import axios from "axios";

const RestExample = () => {
  const [json, setJson] = useState({});

  const getJSON = async () => {
    const res = await fetch(
      "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-wqycg/service/students/incoming_webhook/students"
    );
    const data = await res.json();
    setJson(data);
  };

  useEffect(() => {
    getJSON();
  }, []);

  var result = Object.values(json);

  console.log(result);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>

          <th scope="col">Text</th>
        </tr>
      </thead>

      <tbody>
        {result.map((nodes, idx) => (
          <tr key={idx}>
            <td>{nodes.name}</td>
            <td>
              <pre>{nodes.text}</pre>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RestExample;
