import React from "react";
import "./Form.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}


export function FormBtn(props) {
  return (
    <button {...props} style={{marginLeft: 80, marginBottom: 10, backgroundColor: "black"}} className="btn btn-success">
      {props.children}
    </button>
  );
}
