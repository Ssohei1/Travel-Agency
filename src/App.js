import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
// import ScrollToTop from "./components/ScrollToTop";
import { Landing } from "./views/Landing";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <ScrollToTop /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Landing /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
