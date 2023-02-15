import "./App.css";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path = "/nav" element = {<Navbar/>}/>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
