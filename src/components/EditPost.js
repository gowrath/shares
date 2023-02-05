import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import ActionMovies from "./ActionMovies";

const EditPost = () => {
  const [post, setPost] = useState({
    name: "22222",
    text: "ggggggggggggggggg",
  });

  /*   onChangeStudentName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeStudentText(e) {
    this.setState({ text: e.target.value });
  } */

  const handleClick = (e) => {
    e.preventDefault();
    //setPost(e.target.id);

    axios
      .put(
        "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-rvgpo/service/get/incoming_webhook/editpost" +
          "?id=" +
          "631bc5b36d42fab29a2ede61",
        setPost
      )
      .then((res) => {
        console.log(res.data);
        console.log("Post successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to Student List
    // this.props.history.push("/create");
  };

  return (
    <div className="write-center">
      <div>
        <Form onSubmit={(e) => handleClick()}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue="hmm" />
          </Form.Group>

          <Form.Group controlId="Text">
            <Form.Label>Text</Form.Label>
            <Form.Control type="text" defaultValue="great" />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit" id="">
            Update Post
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditPost;
