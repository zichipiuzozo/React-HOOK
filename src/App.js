import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";

const App = () => {
  let obj = { name: "TA", class: "10a1" };
  let [name, setName] = useState("Tuan Anh");

  const handleEventClick = event => {
    console.log("click me", name);
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello world by {name} in {obj.class}
        </h1>
        {/* <input
          type="text"
          defaultValue="Tuan Anh"
          onClick={event => handleEventClick(event)}
        /> */}
        <button
          type="button"
          onClick={() => {
            handleEventClick();
          }}
        >
          click me
        </button>
      </header>
    </div>
  );
};

export default App;
