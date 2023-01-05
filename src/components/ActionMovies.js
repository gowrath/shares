import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {
  //BrowserRouter as Router,

  Link,
} from "react-router-dom";
import EditPost2 from "./EditPost2";
import EditPost3 from "./EditPost3";

//import { useParams } from "react-router-dom";

const ActionMovies = (props) => {
  /*   const handleClick = (e) => {
    setSelectedItem(e.target.id);
  }; */

  /*   const onChangeStudentName = (e) => {
    this.setState({ name: e.target.value });
  };

  const onChangeStudentText = (e) => {
    this.setState({ text: e.target.value });
  };
 */
  /*   const editStudent = (e) => {
    setSelectedItem(e.target.id);
  }; */

  const deleteStudent = (e) => {
    axios
      .delete(
        "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-wqycg/service/students/incoming_webhook/delete" +
          "?id=" +
          e.target.id
      )
      .then((res) => {
        console.log("Post successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(e.target.id);
  };

  const [json, setJson] = useState({});

  //const [content, setContent] = useState({});

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

  var results = Object.values(json);

  console.log(results);

  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>

              <th scope="col">Text</th>
            </tr>
          </thead>

          <tbody>
            {results.map((result, idx) => (
              <tr key={idx}>
                <td>{result.name}</td>
                <td>
                  <pre>{result.text}</pre>
                </td>

                <td>
                  <Button
                    id={result._id.$oid}
                    onClick={(e) => deleteStudent(e)}
                    size="sm"
                    variant="danger"
                  >
                    Delete
                  </Button>
                  <Link
                    id={result._id.$oid}
                    className="edit-link"
                    to={"./EditPost2/?" + result._id.$oid}
                  >
                    <Button size="sm">Edit</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ActionMovies;
