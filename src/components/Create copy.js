import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class Create extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentText = this.onChangeStudentText.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: "",
      text: "",
    };
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeStudentText(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    axios
      .post(
        "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-rvgpo/service/get/incoming_webhook/students/create-student"
      )
      .then((res) => console.log(res.data));

    this.setState({ name: "", text: "" });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeStudentName}
            />
          </Form.Group>

          <Form.Group controlId="text">
            <Form.Label>Text</Form.Label>
            <Form.Control
              type="text"
              value={this.state.text}
              onChange={this.onChangeStudentText}
            />
          </Form.Group>

          <Button
            variant="danger"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Create Student
          </Button>
        </Form>
      </div>
    );
  }
}
