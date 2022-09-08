import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class StudentTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent() {
    axios
      .delete(
        "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-wqycg/service/students/incoming_webhook/students/delete-student/" +
          this.props.obj._id
      )
      .then((res) => {
        console.log("Student successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.text}</td>

        <td>
          <Button onClick={this.deleteStudent} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
