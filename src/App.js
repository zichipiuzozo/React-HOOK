import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
import { Countdown, NewCountDown } from "./views/Countdown";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./views/Blog";
import DetailBlog from "./views/DetailBlog";
import AddNewBlog from "./views/AddNewBlog";

const App = () => {
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "doing homework", type: "string" },
    { id: "todo2", title: "playing game", type: "string" },
    { id: "todo3", title: "fixing bug", type: "integer" },
    { id: "todo4", title: "reading book", type: "integer" }
  ]);

  useEffect(() => {
    // console.log("run use effect");
  }, []);
  useEffect(() => {
    // console.log("run use effect todos");
  }, [todos]);

  const handleOnclick = event => {
    if (!address) {
      alert("empty input");
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 11000),
      title: address,
      type: "string"
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnchangeInput = event => {
    setAddress(event.target.value);
    console.log("check new value: ", event.target.value);
  };

  const deleteDataTodo = id => {
    let curTodo = todos;
    curTodo = curTodo.filter(item => item.id !== id);
    setTodos(curTodo);
  };

  const onTimesup = () => {
    alert(`Time's up`);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Routes>
          <Route path="/" element={<Covid />} exact="true"></Route>
          <Route
            path="/timer"
            element={
              <>
                {" "}
                <Countdown />
                <span>-----------------</span>
                <NewCountDown onTimesup={onTimesup} />{" "}
              </>
            }
          ></Route>
          <Route
            path="/todo"
            element={
              <>
                <Todo
                  todos={todos}
                  title={`All todos`}
                  deleteDataTodo={deleteDataTodo}
                />
                <input
                  type="text"
                  value={address}
                  onChange={event => handleOnchangeInput(event)}
                />
                <button
                  type="button"
                  onClick={event => {
                    handleOnclick(event);
                  }}
                >
                  click me
                </button>
              </>
            }
          ></Route>
          <Route path="/blog" element={<Blog />} exact></Route>
          <Route path="/blog/:id" element={<DetailBlog />}></Route>
          <Route path="/add-new-blog" element={<AddNewBlog />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
