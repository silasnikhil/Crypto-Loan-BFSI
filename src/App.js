import { Route, Routes } from "react-router";
import "./App.css";
import Landing from "./screens/Landing";
import CryptoExchange from "./screens/CryptoExchange";
import Wallet from "./screens/Wallet";
import LoanPage from "./screens/LoanPage";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/dashboard" element={<CryptoExchange />}></Route>
        <Route path="/cryptoExchange" element={<CryptoExchange />}></Route>
        <Route path="/wallet" element={<Wallet />}></Route>
        <Route path="/loan" element={<LoanPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
