//react
import { BrowserRouter as Route, HashRouter, Switch } from "react-router-dom";
import { useEffect } from "react";

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
    <HashRouter>
      <>
        <Navbar />
        <Dock />
        <ToTopBtn />
        <ScrollToTop>
          <MainContent>
            <Switch>
              <Route path="/" exact>
                <Homepage />
              </Route>
              <Route path="/portfolios">
                <Portfolios />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </MainContent>
        </ScrollToTop>
        <Footer />
      </>
    </HashRouter>
  );
}

export default App;
