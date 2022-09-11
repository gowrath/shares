import React from "react";
import SubForm from "./SubForm";
import { useParams } from "react-router-dom";

const EditSub = ({ history, subs, setSubs }) => {
  const { id } = useParams();
  const subToEdit = subs.find((sub) => sub.id === id);

  const handleOnSubmit = (sub) => {
    const filteredSubs = subs.filter((sub) => sub.id !== id);
    setSubs([sub, ...filteredSubs]);
    history.push("/projects");
  };

  return (
    <div className="left">
      <SubForm sub={subToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditSub;
