import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import VisitorManagement from "./components/VisitorManagement/VisitorManagement";
import "@fontsource/roboto/300.css";

function App() {
  return (
    <div>
      <Header />
      <div style={{display: "flex"}}>
        <UserInput />
        <VisitorManagement />
      </div>
    </div>
  );
}

export default App;
