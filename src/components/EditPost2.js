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



const EditPost2 = () => {
  var url = window.location.search;
  url = url.replace("?", "");
  console.log(url);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [json, setJson] = useState({});

  const getJSON = async () => {
    const res = await fetch(
      "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-rvgpo/service/get/incoming_webhook/readone" +
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

    const editedForm = {
      name: form.name,
      text: form.text,
    };

    if (form.name ==="" || form.text==="") {
      console.log("blank field");
      setTimeout(() => history.push("/create"), 5000);
    } else {

      function updateForm(value) {
        return setForm(form);
      }


      axios
      .put(
        "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-rvgpo/service/get/incoming_webhook/update" +
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

    setTimeout(() => history.push("/create"), 5000);};



    }

    

   

   

    
    console.log(form);

    console.log(name);
    console.log(text);

    //const navigate = useNavigate();

    /*   const handleClick = (e) => {
      setSelectedItem(e.target.id);
    }; */



    //setTimeout(() => navigate("./create"), 2000);

    // Redirect to Student List
    // this.props.history.push("/create");


  return (
    <div>
      <div className="write-center">
        <Form onSubmit={onSubmit} value={form}>
          <Form.Group
            controlId="Name"
            value={form.name}
            onChange={(e) => updateFormName({ name: e.target.value })}
          >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue={obj.name} />
          </Form.Group>

          <Form.Group
            controlId="Text"
            value={form.text}
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

          <Button variant="danger" block="block" type="submit">
            {isLoading ? <LoadingSpinner /> : "Update Post"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditPost2;
