import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { inbox } from "../utils/inbox";
import Input from "../component/input";
import Button from "../component/button";

function Index() {
  const [data, setData] = useState({ name: "", age: "", class: "", mark: "" });
  const getData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  function handleClick(e) {
    localStorage.setItem("studentData" ,JSON.stringify(data));
    navigate("/submitpg");
  }

  return (
    <div className="main">
      <h1>Student Form</h1>
      <div className="form">
        {inbox.map((head) => (
          <Input Label={head.label} name={head.value} fun={getData} />
        ))}
      </div>
      <Button submit={handleClick} />
    </div>
  );
}

export default Index;
