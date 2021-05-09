import { BrowserRouter as Route, HashRouter, Switch } from "react-router-dom";
import Navbar from "./component/common/Navbar";
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFounPage";
import MainContent from "./component/common/MainContent";

function App() {
  return (
    <HashRouter>
      <>
        <Navbar />
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
      </>
    </HashRouter>
  );
}

export default App;
