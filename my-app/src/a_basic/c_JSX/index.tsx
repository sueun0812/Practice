import React from "react";
import JSX01 from "./JSX01";
import JSX02 from "./JSX02";

const divStyle = {  // 객체 생성
  border: "2px solid orange",
  color: "blue",
  fontsize: "10px",
};

export default function Index() {
  return (
    <div style={divStyle}>  {/* 객체를 전달하여 생성 */}
      <JSX01 /> 
      <JSX02 />
    </div>
  );
}
