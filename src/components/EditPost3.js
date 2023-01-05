import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const EditPost3 = () => {
  var url = window.location.search;
  url = url.replace("?", "");
  const [post, setPost] = useState({});
  const [form, setForm] = useState({ name: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-wqycg/service/students/incoming_webhook/readstudent?id=` +
          url
      );
      const data = await res.json();
      setPost(data);
    })();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const editedForm = {
      name: form.name,
      text: form.text,
    };

    await axios
      .put(
        `https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-wqycg/service/students/incoming_webhook/editpost?id=${url}`,
        editedForm
      )
      .then((res) => {
        console.log(res.data);
        console.log("Post successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    setTimeout(() => history.push("./create"), 5000);
  };

  return (
    <div className="write-center">
      <div>
        <Form onSubmit={onSubmit} value={form}>
          <Form.Group
            controlId="Name"
            value={post.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group
            controlId="Text"
            value={post.text}
            onChange={(event) => setForm({ ...form, text: event.target.value })}
          >
            <Form.Label>Text</Form.Label>
            <Form.Control as="textarea" rows={10} />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            {isLoading ? <LoadingSpinner /> : "Update Post"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditPost3;
