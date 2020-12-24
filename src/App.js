import "./App.css";
import React from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";
import OverallTags from "./components/OverallTags";

function App() {
  return (
    <div className="App">
      <Header />
      <OverallTags />
      <UserList />
    </div>
  );
}

export default App;
