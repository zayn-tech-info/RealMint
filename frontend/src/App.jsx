import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { HowItWorks } from "./pages/Howitworks";
import { Property } from "./pages/property";
import { Dashboard } from "./pages/Dashboard";
import { About } from "./pages/About";
import { PropertyDetails } from "./pages/Propertdetails";

export function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/properties" element={<Property />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/propertydetails/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}
