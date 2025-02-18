import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchStudent from "./components/SearchStudent";
import DeleteStudent from "./components/DeleteStudent";
import AddStudent from "./components/AddStudent";
import DisplayStudent from "./components/DisplayStudent";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayStudent />} />
          <Route path="/s-add" element={<AddStudent />} />
          <Route path="/del" element={<DeleteStudent />} />
          <Route path="/search" element={<SearchStudent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}