import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Landing } from "./views/Landing";
import { TourDetials } from "./views/TourDetials";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tour/:slug" element={<TourDetials />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
