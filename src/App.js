/* 1️⃣ ***COMPONENTE APP*** 1️⃣
Implementar el componente App. En este ejercicio tendrás que crear diferentes rutas para otros componentes. 
¡Ten en cuenta los nombres y las especificaciones de cada uno!

REQUISITOS
🟢 El componente Nav debe renderizarse en todas las rutas.
🟢 El componente Home debe renderizarse en la ruta "/".
🟢 El componente CelularDetail debe renderizarse en la ruta "/celulares/:id".
🟢 El componente CreateCelular debe renderizarse en la ruta "/celulares/create".
*/

import React from "react";
import { Route, Routes } from "react-router-dom";
import CelularDetail from "./components/CelularDetail/CelularDetail";
import CreateCelular from "./components/CreateCelular/CreateCelular";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/celulares/:id" element={<CelularDetail />} />
        <Route path="/celulares/create" element={<CreateCelular />} />
      </Routes>
    </div>
  )
};

export default App;
