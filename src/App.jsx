import { Routes, Route } from "react-router-dom"; //SE IMPORTAN ROUTES Y ROUTER
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css"; //SE IMPORTA EL JSX DE DASHBOARD UBICADO EN LA CARPETA PAGES
import { Stadistic } from "./pages/Stadistic"; //SE IMPORTA EL JSX DE DASHBOARD UBICADO EN LA CARPETA PAGES
import { Home } from "./pages/Home";
import { HomeTrabajador } from "./pages/HomeTrabajador";
import { Login } from "./pages/Login";
import { Book } from "./pages/Book";
import { Employees } from "./pages/Employees";
import { Box } from "./pages/Box";
import { Landing } from "./pages/Landing";
import { FAQ } from "./pages/FAQ";
import { AuthProvider } from "./context/contextUser";
import { BookTrabajador } from "./pages/BookTrabajador";
import { Settings } from "./pages/Settings";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/calendar" element={<HomeTrabajador />} />
        <Route exact path="/statistics" element={<Stadistic />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/book" element={<Book />} />
        <Route exact path="/mybook" element={<BookTrabajador />} />
        <Route exact path="/employees" element={<Employees />} />
        <Route exact path="/box" element={<Box />} />
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </AuthProvider> //GENERA RUTAS PARA LAS PAGINAS
  );
}

export default App;
