import { useState } from "react";
import MainContent from "./component.js/MainContent";
import Header from "./component.js/Header";

function App() {
  const [correctNum, setCorrectNum] = useState("");

  const [bgColor, setBgColor] = useState(false);

  return (
    <div
      className={`${!bgColor ? "App" : "winColor"}
      `}
    >
      <Header correctNum={correctNum} bgColor={bgColor} />
      <MainContent
        setCorrectNum={setCorrectNum}
        setBgColor={setBgColor}
        bgColor={bgColor}
      />
    </div>
  );
}

export default App;
