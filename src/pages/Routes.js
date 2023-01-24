import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Navbar from "../components/Header";

const index = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <main>
    <Routes>
         <Route path="/" element={<Home/>}/>
    </Routes>
    </main>
    </BrowserRouter>
  )
}

export default index