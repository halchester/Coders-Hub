import React from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";
import OverallTags from "./components/OverallTags";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App" style={{ background: "rgb(245, 245, 245)" }}>
      <Header />
      <OverallTags />
      <UserList />
      <Footer />
    </div>
  );
}

export default App;
