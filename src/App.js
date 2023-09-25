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
    handleAddUser(userInput);
  };

  const handleRemove = (updatedRows) => {
    setUserData(updatedRows);
  };

  const randomId = (min, max) => {
    const randomDecimal = Math.random();
    const scaleRandom = randomDecimal * (max - min + 1);
    const randomWholeNumber = Math.floor(scaleRandom) + min;
    return randomWholeNumber;
  };

  const handleAddUser = (newUser) => {
    if (newUser) {
      const name = newUser.name;
      const email = newUser.email;
      const field = newUser.field;

      setUserData((prevData) => {
        return [
          ...prevData,
          { id: randomId(6, 999), name: name, email: email, field: field },
        ];
      });
      setUserInput(null);
    }
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <UserInput onSubmit={dataHandler} />
        <VisitorManagement rows={userData} onRemove={handleRemove} />
      </div>
    </div>
  );
}

export default App;
