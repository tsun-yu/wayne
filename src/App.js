//react
import { BrowserRouter as Route, HashRouter, Switch } from "react-router-dom";
import { useEffect } from "react";

//components
import Navbar from "./pages/Navbar";
import Footer from "./component/common/Footer";
import MainContent from "./component/common/MainContent";
import ScrollToTop from "./component/common/ScrollToTop";
//pages
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFounPage";
import Portfolios from "./pages/Portfolios";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

//icon
import { BiArrowToTop } from "react-icons/bi";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const documentHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      let scrollHeight = window.scrollY;
      let progressPercent =
        (100 * scrollHeight) / (documentHeight - windowHeight);

      progressPercent >= 10
        ? (document.querySelector(".toTop").style.display = "block")
        : (document.querySelector(".toTop").style.display = "none");
    });
  }, []);
  return (
    <HashRouter>
      <>
        <Navbar />
        <ScrollToTop>
          <MainContent>
            <BiArrowToTop
              size={50}
              className="toTop"
              style={{ display: "none" }}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />
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
