import { BrowserRouter as Route, HashRouter, Switch } from "react-router-dom";
import Navbar from "./component/common/Navbar";
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFounPage";
import MainContent from "./component/common/MainContent";
import ScrollToTop from "./component/common/ScrollToTop";
import Footer from "./component/common/Footer";

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
