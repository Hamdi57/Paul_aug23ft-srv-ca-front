// import { useState, useEffect } from "react";
import "./App.css";
// import SimpleForm from "./components/SimpleForm";
import Header from "./components/Header";
import ButtonRow from "./components/ButtonRow";
// import dummyParticipants from "./data/dummyParticipants";

function App() {
  // console.log("dummyParticipants: ", dummyParticipants);
  const buttonHandler = (event) => {
    console.log("Button clicked", event);
  };

  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      <Header />
      <ButtonRow buttonHandlerTest={buttonHandler} />
    </>
  );
}

export default App;
