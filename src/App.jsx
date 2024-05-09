import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import ButtonRow from "./components/ButtonRow";
import ParticipantList from "./components/ParticipantList";

function App() {
  const [stateType, setStateType] = useState("new");
  const buttonHandler = (type) => {
    if (type === "fetch") setStateType("fetch");
    if (type === "add") setStateType("add");
    if (type === "dummy") setStateType("dummy");
    console.log(stateType);
  };
  let mainContent;
  if (stateType === "fetch") mainContent = <ParticipantList />;
  if (stateType === "add") mainContent = <div>Add</div>;
  if (stateType === "dummy") mainContent = <div>Dummy</div>;

  return (
    <>
      <Header />
      <ButtonRow buttonHandlerTest={buttonHandler} />
      <div className="main-container">{mainContent}</div>
    </>
  );
}

export default App;
