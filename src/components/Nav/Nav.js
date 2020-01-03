import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav id="score">
    <ul>
      <li>
        <a href="/clicky-game/">{props.title}</a><p id="instructions">How To Play: Click on any Friends character to begin.  The goal is to continously click on the characters until without clicking on any one character twice.  Your score will be shown at the top. </p>
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li id="cur-sco">Your Score: {props.score}</li>

      <li id="top-sco">High Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;