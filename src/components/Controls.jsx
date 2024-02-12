import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { num: inputElement.current.value } });
    inputElement.current.value = "";
  };
  const handleSub = () => {
    dispatch({ type: "SUB", payload: { num: inputElement.current.value } });
    inputElement.current.value = "";
  };
  const toggle = () => {
    dispatch({ type: "TOGGLE" });
  };
  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button type="button" className="btn btn-warning" onClick={toggle}>
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          className="btn btn-outline-primary "
          style={{ maxWidth: "150px" }}
          placeholder="Enter a number"
          ref={inputElement}
        />
        <button type="button" className="btn btn-success" onClick={handleAdd}>
          Add
        </button>
        <button type="button" className="btn btn-danger" onClick={handleSub}>
          Subtract
        </button>
      </div>
    </div>
  );
};

export default Controls;

{
  /* <button type="button" className="btn btn-success">
          Success
        </button>
        <button type="button" className="btn btn-danger">
          Danger
        </button>
        <button type="button" className="btn btn-warning">
          Warning
        </button>
        <button type="button" className="btn btn-info">
          Info
        </button>
        <button type="button" className="btn btn-light">
          Light
        </button>
        <button type="button" className="btn btn-dark">
          Dark
        </button> */
}
