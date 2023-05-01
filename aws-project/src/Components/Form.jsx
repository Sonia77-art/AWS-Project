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
        <input type="text" placeholder="Enter you Email"></input>
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(event) => setSubmit(event.target.value)}
        ></input>
        <br />
        <br />
        <button type="submit" onClick={handleClick}>
          Sign In
        </button>
      </form>
    </div>
  );
}
