import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<h1>Pagina Dashboard</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
