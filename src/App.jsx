import AboutUs from "./components/AboutUs/AboutUs";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Community from "./components/Communities/Community";
import CodeCate from "./components/Code-cate/CodeCate";
import Contact from "./components/Contact/Contact";
import Ebooks from "./components/Ebooks/Ebooks";
import Gate from "./components/Gate/Gate";
import Misle from "./components/Misle/Misle";
import Placement from "./components/Placement/Placement";
import Semester from "./components/Semester/Semester";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/codecate" element={<CodeCate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/gate" element={<Gate />} />
        <Route path="/misle" element={<Misle />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/sem" element={<Semester />} />
      </Routes>
    </>
  );
}

export default App;
