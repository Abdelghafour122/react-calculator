import "./App.css";
import Core from "./components/Core";

function App() {
  return (
    <div className="App">
      <h1 className="sr-only" style={{ margin: "0" }}>
        {" "}
      </h1>
      <Core />
      <footer className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Abdelghafour122</a>.
      </footer>
    </div>
  );
}

export default App;
