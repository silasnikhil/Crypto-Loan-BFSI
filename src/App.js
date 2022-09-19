import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
    </div>
  );
}

export default App;
