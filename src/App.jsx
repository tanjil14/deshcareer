import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/us" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
