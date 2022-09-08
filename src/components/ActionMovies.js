import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

const RestExample = () => {
  const obj = {
    _id: "63118a526756c0470768e068",
  };

  const deleteStudent = (e) => {
    axios
      .delete(
        "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-wqycg/service/students/incoming_webhook/delete" +
          "?id=" +
          e.target.id
      )
      .then((res) => {
        console.log("Student successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(e.target.id);
  };

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
            <td>
              <Button
                id={nodes._id.$oid}
                onClick={(e) => deleteStudent(e)}
                size="sm"
                variant="danger"
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RestExample;
