import React, { Component, useState } from "react";
import '../styles/App.css';
import '../components/Heading.js';
import '../components/InputQuery.js';
import '../components/SubHeading.js';
import '../components/SubmitButton.js';

function App() {
  return (
    <div id="main">
      <Heading/>
      < InputQuery/>
      < SubHeading/>
      < SubmitButton/>
    </div>
  )
}
export default App;

