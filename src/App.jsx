//react
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

//components
import Navbar from "./component/common/Navbar";
import Dock from "./component/common/Dock";
import Footer from "./component/common/Footer";
import MainContent from "./component/common/MainContent";
import ScrollToTop from "./component/common/ScrollToTop";
//pages
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFounPage";
import Portfolios from "./pages/Portfolios";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import ToTopBtn from "./component/common/ToTopBtn";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Dock />
      <ToTopBtn />
      <ScrollToTop>
        <MainContent>
          <Routes>
            <Route path="/" element={<Homepage />} exact />
            <Route path="/portfolios" element={<Portfolios />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainContent>
      </ScrollToTop>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
