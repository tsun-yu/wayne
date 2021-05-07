import { BrowserRouter as Route, HashRouter, Switch } from "react-router-dom";
import Navbar from "./component/common/Navbar";
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFounPage";

function App() {
  return (
    <HashRouter>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </>
    </HashRouter>
  );
}

export default App;
