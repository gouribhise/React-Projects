import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NoPage from "./pages/NoPage";
import Search from "./pages/Search";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { MusicProvider } from "./context/MusicContext";

function App() {
  return (
    <div className="container-fluid">
      <MusicProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </MusicProvider>
    </div>
  );
}

export default App;
