import { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import VisitorManagement from "./components/VisitorManagement/VisitorManagement";
import rows from "./rows";
import "@fontsource/roboto/300.css";

function App() {
  const [userInput, setUserInput] = useState(null);
  const [userData, setUserData] = useState([...rows]);

  const dataHandler = (userInput) => {
    setUserInput(userInput);
  };

  const inputData = [];

  if (userInput) {
    const name = userInput.name;
    const email = userInput.email;
    const field = userInput.field;

    inputData.push({
      id: Math.random(),
      name: name,
      email: email,
      field: field,
    });

    setUserData((prevData) => {
      return [...prevData, inputData];
    });
  }

  console.log(userData);

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <UserInput onSubmit={dataHandler} />
        <VisitorManagement rows={userData} />
      </div>
    </div>
  );
}

export default App;
