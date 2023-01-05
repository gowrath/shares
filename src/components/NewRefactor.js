import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import ActionMovies from "./ActionMovies";
import StudentTableRow from "./StudentTableRow";
import EditPost from "./EditPost";
import Edit from "./Edit";
import EditPost2 from "./EditPost2";
import Filtering from "./Filtering";

const NewRefactor = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const onChangeStudentName = (e) => {
    setName(e.target.value);
  };

  const onChangeStudentText = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: name,
      text: text,
    };
    axios
      .post(
        "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-wqycg/service/students/incoming_webhook/create-students",
        body
      )
      .then((res) => console.log(res.data));

    setName("");
    setText("");
  };

  return (
    <div className="write-center">
      <div className="form-wrapper">
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={onChangeStudentName}
            />
          </Form.Group>

          <Form.Group controlId="Text">
            <Form.Label>Text</Form.Label>
            <Form.Control
              as="textarea"
              rows={15}
              type="text"
              value={text}
              onChange={onChangeStudentText}
            />
          </Form.Group>

          <Button
            variant="danger"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Create Post
          </Button>
        </Form>
      </div>
      <ActionMovies />
    </div>
  );
};

export default NewRefactor;
