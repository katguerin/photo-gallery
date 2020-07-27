import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  // this is JSX
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
