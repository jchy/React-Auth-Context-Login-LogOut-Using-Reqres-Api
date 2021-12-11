import "./styles.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { Login } from "./Components/Login";

export default function App() {
  return (
    <div className="App">
      <h2>React Auth Context</h2>
      <Header />
      <Body />
      <Login />
    </div>
  );
}
