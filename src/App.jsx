import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Calender from "./pages/Calender";
import Campus from "./pages/Campus";
import Contact from "./pages/Contact";
import PrimaryNursery from "./pages/PrimaryNursery"; // Import new page
import Secondary from "./pages/Secondary"; // Import new page
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/campus" element={<Campus />} />
            <Route path="/contact" element={<Contact />} />

            {/* New Routes */}
            <Route path="/primary-nursery" element={<PrimaryNursery />} />
            <Route path="/secondary" element={<Secondary />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
