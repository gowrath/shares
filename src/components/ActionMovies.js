import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {
  //BrowserRouter as Router,

  Link,
} from "react-router-dom";
import EditPost2 from "./EditPost2";
import EditPost3 from "./EditPost3";
import CommentModal from "./Modal";

//import { useParams } from "react-router-dom";

const ActionMovies = () => {
  //UseState for Card Change

  const [flip, setFlip] = useState("", []);

  //Function to do dark mode

  const handleClick = (e) => {
    e.preventDefault();
    setFlip(!flip);
  };

  /*   const handleClick = (e) => {
    setSelectedItem(e.target.id);
  }; */

  /*   const onChangeStudentName = (e) => {
    this.setState({ name: e.target.value });
  };

  const onChangeStudentText = (e) => {
    this.setState({ text: e.target.value });
  };
 */
  /*   const editStudent = (e) => {
    setSelectedItem(e.target.id);
  }; */

  const deleteStudent = (e) => {
    axios
      .delete(
        "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-rvgpo/service/get/incoming_webhook/delete" +
          "?id=" +
          e.target.id
      )
      .then((res) => {
        console.log("Post successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(e.target.id);
  };

  const [json, setJson] = useState({});

  //const [content, setContent] = useState({});

  const getJSON = async () => {
    const res = await fetch(
      "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-rvgpo/service/get/incoming_webhook/read"
    );
    const data = await res.json();
    setJson(data);
  };

  useEffect(() => {
    getJSON();
  }, []);

  var results = Object.values(json);

  return (
    <div>
      <div>
        <div>
          <br></br>
          <br></br>
        </div>
        <Button className="gbar2" onClick={handleClick}>
       
          

         Dark mode
   
        </Button>


        
        <h4 className="gbar5">Movie Review</h4>
        <table className="table">
          <thead></thead>

          <tbody>
            {results.map((result, idx) => (
              <div>

              <tr key={idx} className="gbar4">
                
                <td>
                  <h5>{result.name}</h5>
                  <pre>
                    <span className={`card ${flip ? "flip" : ""}`}>
                    {result.text}
                    </span>
                    </pre>
                </td>

                <td>
                  <Button
                    id={result._id.$oid}
                    onClick={(e) => deleteStudent(e)}
                    size="sm"
                    variant="danger"
                  >
                    Delete
                  </Button>
                  <Link
                    id={result._id.$oid}
                    className="edit-link"
                    to={"./EditPost2/?" + result._id.$oid}
                  >
                    <Button size="sm">Edit</Button>
                  </Link>
                  
                </td>


              </tr>
            
            
              <tr className="gbar">
                <CommentModal />
              </tr>
              
              <tr>
                <div><br></br>
                <br></br></div>
              </tr>
              </div>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ActionMovies;
