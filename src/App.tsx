
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import AddStudent from "./components/AddStudent";
import DeleteStudent from "./components/DeleteStudent";
import SearchStudent from "./components/SearchStudent";
import AddCar from "./components/AddCar";
import ShowAllStus from "./components/ShowAllStus";
import AllCars from "./components/AllCars";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowAllStus />} />
          <Route path="/all" element={<DisplayAll />} />
          <Route path="/s-add" element={<AddStudent />} />
          <Route path="/del" element={<DeleteStudent />} />
          <Route path="/search" element={<SearchStudent />} />
          <Route path="/addCar" element={<AddCar />} />
          <Route path="/allCars" element={<AllCars />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
