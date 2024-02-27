import React from "react";

const Current = (props) => {
  console.log("whats props", props);
  return <div>test {props.temp_c}</div>;
};

export default Current;
