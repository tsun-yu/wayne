import { BrowserRouter as Route, HashRouter, Switch } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFounPage";
import MainContent from "./component/common/MainContent";
import ScrollToTop from "./component/common/ScrollToTop";
import Footer from "./component/common/Footer";
import Portfolios from "./pages/Portfolios";
import Resume from "./pages/Resume";

function App() {
  return (
    <HashRouter>
      <>
        <Navbar />
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
