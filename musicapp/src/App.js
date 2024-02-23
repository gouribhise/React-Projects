import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NoPage from "./pages/NoPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
