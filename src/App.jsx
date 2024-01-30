import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./Components/Countries";
import SingleCountry from "./Components/SingleCountry";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />}></Route>
          <Route path="/:name" element={<SingleCountry />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
