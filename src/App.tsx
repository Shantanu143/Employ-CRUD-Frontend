import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Pages/Home";
import AddEmp from "./Pages/AddEmp";
import Footer from "./Components/footer/Footer";
import EditEmp from "./Pages/EditEmp";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addemp" element={<AddEmp />} />
        <Route path="/editemp/:id" element={<EditEmp />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
