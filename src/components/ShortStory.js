import { React, useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {
  //BrowserRouter as Router,

  Link,
} from "react-router-dom";
import EditPost2 from "./EditPost2";
import ReactMarkdown from "react-markdown";
import Story from "./Story.md";
import rehypeRaw from "rehype-raw";

//import { useParams } from "react-router-dom";

export default function ShortStory() {
  let [readable, setReadable] = useState({ md: "" });

  useEffect(() => {
    fetch(Story)
      .then((res) => res.text())
      .then((md) => {
        setReadable({ md });
      });
  }, []);

  return (
    <div>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        className="write-center3"
        children={readable.md}
      />
    </div>
  );
}
