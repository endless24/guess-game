import React from "react";

function Header({ correctNum, bgColor }) {
  return (
    <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>

      <div className={` ${!bgColor ? "number" : "numb"}`}>
        {!correctNum ? "?" : `${correctNum}`}
      </div>
    </header>
  );
}

export default Header;
