import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./routes/Home/Home";
import People from "./routes/People/People";
import PeopleId from "./routes/PeopleId/PeopleId";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/people" element={<People />} />
        <Route exact path="/people/:id" element={<PeopleId />} />
      </Routes>
    </BrowserRouter>
  );
}
