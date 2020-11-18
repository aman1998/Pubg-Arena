import React from 'react'
import ReactNestedLoader from "react-nested-loader";
import { buttonStyle } from "./styles";

let Button = ({
  onClick,
  text,
  loading, // will be injected
  error, // will be injected
}) => (
  <button onClick={onClick} className='lobby-content__btn btn' style={buttonStyle(loading, error)}>
    {error ? "ERROR" : loading ? "..." : text}
  </button>
);

// Step2: wrap your button so that it receives the loading prop
Button = ReactNestedLoader({
  onError: (error, remove) => setTimeout(remove, 1000),
})(Button);

export default Button