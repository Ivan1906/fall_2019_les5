import React from "react";
import { useHistory } from "react-router-dom";
import Input from "./shared/Input";
import { routers } from "../routers/routers";

const Modal = () => {
  let history = useHistory();

  let home = e => {
    e.stopPropagation();
    history.push(routers.home);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <h1>There is no products now</h1>
        <Input type="button" value="OK" onClick={home} />
      </div>
    </div>
  );
};

export default Modal;
