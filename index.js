import "./styles.css";
import React, { useState } from "react";
var headingText = "Chintan ";
var color = "red";
var color1 = "blue";
var username = "Chintz";

var likeCount = 0;
//run with react library
export default function App() {
  const [likeCount, setlikeCount] = useState(0);
  function likeClickHandler() {
    var newlikecounter = likeCount + 1;
    setlikeCount(newlikecounter);
    console.log("likes:" + likeCount);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>
      <h1 style={{ backgroundColor: color1 }}> Welcome User {username} </h1>
      <button onClick={likeClickHandler}>like me </button> {likeCount}
    </div>
  );
}

