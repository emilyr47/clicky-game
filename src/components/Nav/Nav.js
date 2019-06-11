import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li>
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li id="cur-sco">Your Score: {props.score}</li>

      <li id="top-sco">High Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;