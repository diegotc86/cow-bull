import React from "react";
import Button from "./ui/button";

function App() {
  return (
    <>
      <Button>Primary/default</Button>
      <br></br>
      <br></br>
      <Button type={"secondary"}>secondary</Button>
      <br></br>
      <br></br>
      <Button type={"terciary"}>terciary</Button>
    </>
  );
}

export default App;
