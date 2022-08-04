import { useState } from "react";
import Header from "./components/Header/Header";

import "./styles/main.css";

function App() {
  const [count, setCount] = useState(0);

  return <Header></Header>;
}

export default App;
