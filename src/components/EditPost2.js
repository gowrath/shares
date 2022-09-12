import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import e from "cors";
import ActionMovies from "./ActionMovies";

import {
  //BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useNavigate,
} from "react-router-dom";

const EditPost = () => {
  var url = window.location.search;
  url = url.replace("?", "");
  console.log(url);

  const [form, setForm] = useState({
    name: "",
    text: "",
  });

  //let { id } = useParams();

  /*   const [post, setPost] = useState({
    name: "22222",
    text: "ggggggggggggggggg ---- hello",
  });
 */
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  /*   const onChangeStudentName = (e) => {
    this.setState({ name: e.target.value });
  };

  const onChangeStudentText = (e) => {
    this.setState({ text: e.target.value });
  }; */

  const onSubmit = (e) => {
    e.preventDefault();

    const editedForm = {
      name: form.name,
      text: form.text,
    };

    //const navigate = useNavigate();

    /*   const handleClick = (e) => {
      setSelectedItem(e.target.id);
    }; */

    axios
      .put(
        "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-wqycg/service/students/incoming_webhook/editpost" +
          "?id=" +
          url,
        editedForm
      )
      .then((res) => {
        console.log(res.data);
        console.log("Post successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    setTimeout(
      () => window.location.assign("https://sharesub-5c6f8.web.app/create"),
      2000
    );

    //setTimeout(() => navigate("./create"), 2000);

    // Redirect to Student List
    // this.props.history.push("/create");
  };

  return (
    <div className="write-center">
      <div>
        <Form onSubmit={onSubmit}>
          <Form.Group
            controlId="Name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group
            controlId="Text"
            value={form.text}
            onChange={(e) => updateForm({ text: e.target.value })}
          >
            <Form.Label>Text</Form.Label>
            <Form.Control type="text" rows={15} as="textarea" />
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

export default EditPost;
