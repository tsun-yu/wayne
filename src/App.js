import { Route, Switch } from "react-router";
import Navbar from "./component/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
