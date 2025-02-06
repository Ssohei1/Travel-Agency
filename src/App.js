import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Landing } from "./views/Landing";
import { TourDetials } from "./views/TourDetials";
// import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tour/:slug" element={<TourDetials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
