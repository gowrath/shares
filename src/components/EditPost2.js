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
} from "react-router-dom";

const EditPost2 = () => {
  var url = window.location.search;
  url = url.replace("?", "");
  console.log(url);

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

  let arrayname = results.map((result, idx) => result.name);

  let arraytext = results.map((result, idx) => result.text);

  let nameplace = arrayname.toString();
  let textplace = arraytext.toString();

  let obj = { nameplace, textplace };

  console.log(obj);

  const [form, setForm] = useState({ obj });

  console.log(form);

  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);

    function updateForm2(value) {
      return setForm((prev) => {
        return { ...prev, ...obj };
      });
    }

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

    /*     setTimeout(
      () => window.location.assign("https://sharesub-5c6f8.web.app/create"),
      5000
    ); */

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
            value={obj.nameplace}
            onChange={(e) => updateForm({ name: e.target.value + "" })}
          >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue={obj.nameplace} />
          </Form.Group>

          <Form.Group
            controlId="Text"
            value={obj.textplace}
            onChange={(e) => updateForm({ text: e.target.value + "" })}
          >
            <Form.Label>Text</Form.Label>
            <Form.Control
              type="text"
              rows={15}
              as="textarea"
              defaultValue={obj.textplace}
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
