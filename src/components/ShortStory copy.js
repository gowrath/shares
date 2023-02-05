import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {
  //BrowserRouter as Router,

  Link,
} from "react-router-dom";
import EditPost2 from "./EditPost2";

//import { useParams } from "react-router-dom";

const ShortStory = (props) => {
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
        "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-rvgpo/service/get/incoming_webhook/delete" +
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
      "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-rvgpo/service/get/incoming_webhook/students"
    );
    const data = await res.json();
    setJson(data);
  };

  useEffect(() => {
    getJSON();
  }, []);

  var results = Object.values(json);

  console.log(results);

  var story = results[2];

  console.log(story);

  return (
    <div className="write-center3">
      <div>
        <table className="table">
          <thead>
            {results.map((result, idx) => (
              <tr key={idx}>
                <th scope="col">Text</th>
              </tr>
            ))}
          </thead>

          <tbody>
            {results.map((result, idx) => (
              <tr key={idx}>
                <pre>{result.text}</pre>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <pre></pre>
      </div>
    </div>
  );
};
export default ShortStory;
