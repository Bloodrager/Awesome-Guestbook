import { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import VisitorManagement from "./components/VisitorManagement/VisitorManagement";
import "@fontsource/roboto/300.css";

function App() {
  const [userInput, setUserInput] = useState(null);

  const dataHandler = (userInput) => {
    setUserInput(userInput);
  };

  const userData = [];

  if (userInput) {
    const name = userInput.name;
    const email = userInput.email;
    const field = userInput.field;

    userData.push({
      name: name,
      email: email,
      field: field,
    });
    console.log(userInput);
  }

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <UserInput onSubmit={dataHandler} />
        <VisitorManagement />
      </div>
    </div>
  );
}

export default App;
