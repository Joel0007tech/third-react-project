import React from 'react';
import {createRoot} from "react-dom/client"
import Todo from './todo';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Todo
    firstText="cooking"
    secondText="sweeping"
    thirdText="washing"
    fourthText="reading"
    fifthText="strolling"
  />
)

