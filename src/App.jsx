import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import Ashishk from "./pages/ashishk/Ashishk";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ashishk" element={<Ashishk />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
