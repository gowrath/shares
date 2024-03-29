import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import ActionMovies from "./ActionMovies";
import StudentTableRow from "./StudentTableRow";
import EditPost from "./EditPost";
import Edit from "./Edit";
import EditPost2 from "./EditPost2";
import Filtering from "./Filtering";

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

    const body = {
      name: this.state.name,
      text: this.state.text,
    };
    axios
      .post(
        "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-rvgpo/service/get/incoming_webhook/create",
        body
      )
      .then((res) => console.log(res.data));

    this.setState({ name: "", text: "" });
  }

  render() {
    return (


      <div className="write-center">
        <div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={this.state.name}
                onChange={this.onChangeStudentName}
              />
            </Form.Group>

            <Form.Group controlId="Text">
              <Form.Label>Text</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
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
              Create Post
            </Button>
          </Form>
        </div>
        <ActionMovies />
      </div>
    );
  }
}
