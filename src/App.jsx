import "./App.css";
import HomePage from "./pages/Homepage";
import LogInForm from "./pages/loginform";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PrivateRoute from "./utils/Privateroute";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [authtoken, Setauthtoken] = useState(null);
  const [username, Setusername] = useState("Eddie Makhanu");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <div className="App">
      <Header name={username} />
      <Routes>
        <Route path="/logIn" element={<LogInForm />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
