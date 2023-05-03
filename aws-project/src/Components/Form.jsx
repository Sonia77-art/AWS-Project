import { useState } from "react";
import "./Form.css";

export default function Form(onClick) {
  const [submit, setSubmit] = useState("");
  const handleClick = (event) => {
    onClick(submit);
  };

  return (
    <div className="form-container">
      <form className="Print-values">
        <h4 classname="h1">Sign In</h4>
        <h5 className="h2">With Your Google Account</h5>
        <br />
        <input className="F1" type="text" placeholder="Enter you Email"></input>
        <br />
        <br />
        <input
          className="F2"
          type="password"
          placeholder="Enter your password"
          onChange={(event) => setSubmit(event.target.value)}
        ></input>
        <br />
        <br />
        <button className="Btn" type="submit" onClick={handleClick}>
          Sign In
        </button>
      </form>
    </div>
  );
}
