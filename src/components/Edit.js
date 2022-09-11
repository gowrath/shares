import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {
  //BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import EditPost from "./EditPost";
import Form from "react-bootstrap/Form";

const RestExample = (props) => {
  const obj = {
    _id: "63118a526756c0470768e068",
  };

  const [selectedItem, setSelectedItem] = useState(null);

  /*   const handleClick = (e) => {
    setSelectedItem(e.target.id);
  }; */

  const editStudent = (e) => {
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

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: this.state.name,
      text: this.state.text,
    };

    const handleClick = (e) => {
      setSelectedItem(e.target.id);
    };

    axios
      .put(
        "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-wqycg/service/students/incoming_webhook/editpost" +
          "?id=631b8dd454005fe4ffae1b1f",
        body
      )
      .then((res) => {
        console.log(res.data);
        console.log("Post successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });
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

  var results = Object.values(json);

  console.log(results);

  return (
    <div className="write-center">
      <div id={this.props.selectedItem}>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name || ""}
              onChange={this.onChangeStudentName}
            />
          </Form.Group>

          <Form.Group controlId="Text">
            <Form.Label>Text</Form.Label>
            <Form.Control
              type="text"
              value={this.state.text || ""}
              onChange={this.onChangeStudentText}
            />
          </Form.Group>

          <Button
            variant="danger"
            size="lg"
            block="block"
            type="submit"
            //onClick={handleClick}
          >
            Update Post
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RestExample;
