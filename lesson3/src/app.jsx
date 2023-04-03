import Avatar from "./components/avatar"
import { useState } from "react"
import Square from "./components/squase"
import Board from "./components/board"
import Counter from "./components/counter.js"
import Products from "./componnent/pages/products"
import Products_add from "./componnent/pages/products_add"
import Products_edit from "./componnent/pages/products_edit"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from "./componnent/pages/login"
import { useEffect } from "react"
import Apptick from "./apptick"
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="products_add" element={<Products_add />} />
                <Route path="apptick" element={<Apptick />} />
                <Route path="projects/:id" element={<Products_edit />} />
                <Route path="user_login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;