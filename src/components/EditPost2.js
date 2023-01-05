import React, { Component, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from "axios";
import e from "cors";
import ActionMovies from "./ActionMovies";
import LoadingSpinner from "./LoadingSpinner";

import {
  //BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useNavigate,
  useHistory,
} from "react-router-dom";

//Rewrote Edit.js into a functional component

const EditPost2 = () => {
  var url = window.location.search;
  url = url.replace("?", "");
  console.log(url);
  const history = useHistory();

  const [json, setJson] = useState({});

  const getJSON = async () => {
    const res = await fetch(
      "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-wqycg/service/students/incoming_webhook/readstudent" +
        "?id=" +
        url
    );
    const data = await res.json();
    setJson(data);
  };

  useEffect(() => {
    getJSON();
  }, []);

  var results = Object.values(json);

  console.log(json);
  console.log(results);

  /*   var object = results.reduce((oj, item) => {
    Object.assign(oj, item);
    return oj;
  }, {});

  console.log(object); */

  let arrayname = results.map((result, idx) => result.name);

  let arraytext = results.map((result, idx) => result.text);

  let name = arrayname.toString();
  let text = arraytext.toString();

  let obj = { name, text };

  console.log(obj);

  const [form, setForm] = useState(obj);

  const [isLoading, setIsLoading] = useState(false);

  function updateFormName(value) {
    return setForm((prev) => {
      return { text, ...value };
    });
  }

  function updateFormText(value) {
    return setForm((prev) => {
      return { name, ...value };
    });
  }

  console.log(form);

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.value);

    setIsLoading(true);

    if (form.name === name) {
      console.log("name is same");
    }

    if (form.text !== text) {
      console.log("name is different");
    }

    const editedForm = {
      name: form.name,
      text: form.text,
    };

    function updateForm(value) {
      return setForm(form);
    }

    console.log(editedForm);
    console.log(form);

    console.log(name);
    console.log(text);

    //const navigate = useNavigate();

    /*   const handleClick = (e) => {
      setSelectedItem(e.target.id);
    }; */

    axios
      .put(
        "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-wqycg/service/students/incoming_webhook/editpost" +
          "?id=" +
          url,
        editedForm,
        obj
      )
      .then((res) => {
        console.log(res.data);
        console.log("Post successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    setTimeout(() => history.push("/create"), 5000);

    //setTimeout(() => navigate("./create"), 2000);

    // Redirect to Student List
    // this.props.history.push("/create");
  };

  return (
    <div className="write-center">
      <div>
        <Form onSubmit={onSubmit} value={form}>
          <Form.Group
            controlId="Name"
            value={obj.name}
            onChange={(e) => updateFormName({ name: e.target.value })}
          >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue={obj.name} />
          </Form.Group>

          <Form.Group
            controlId="Text"
            value={obj.text}
            onChange={(e) => updateFormText({ text: e.target.value })}
          >
            <Form.Label>Text</Form.Label>
            <Form.Control
              type="text"
              rows={15}
              as="textarea"
              defaultValue={obj.text}
            />
          </Form.Group>

          <div></div>

          <Button variant="danger" size="lg" block="block" type="submit">
            {isLoading ? <LoadingSpinner /> : "Update Post"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditPost2;
