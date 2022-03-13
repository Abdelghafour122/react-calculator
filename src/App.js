import { useState } from "react";
import "./App.css";
import Core from "./components/Core";

function App() {
  const [result, setResult] = useState(0);
  // const changeRes = (val) => {
  //   setResult(`${result}` + val);
  // };
  return (
    <div className="App">
      <Core onPut={result} />
    </div>
  );
}

export default App;
