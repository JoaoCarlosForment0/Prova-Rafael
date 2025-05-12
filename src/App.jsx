import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Teste</h1>} />
        <Route path="/Login" element={<h1>Pagina Login</h1>} />
        <Route path="/Dashboard" element={<h1>Pagina Dashboard</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
