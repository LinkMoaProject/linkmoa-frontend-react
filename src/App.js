import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import ProxyForLogin from "./pages/ProxyForLogin";
import MainPage from "./pages/MainPage";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Routes>
        <Route path="/reissue" element={<ProxyForLogin />} />
        </Routes> */}
        <Routes>
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
