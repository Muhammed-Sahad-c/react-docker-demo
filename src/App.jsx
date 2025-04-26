import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.docker.com/" target="_blank">
          <img src="/image.png" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Docker</h1>
      <p className="read-the-docs">
        Wanna know how to setup ?{" "}
        <a href="https://muhammedsahad.medium.com/introduction-to-docker-and-dockerizing-a-react-app-07868aeba5bc">
          Check out blog
        </a>
      </p>
    </>
  );
}

export default App;
