import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import Navbar from "./component/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    // <Router>
    <>
      <Navbar />
      {/* <Switch>
          <Route path="/" exact> */}
      <Homepage />
      {/* </Route>
        </Switch> */}
    </>
    // </Router>
  );
}

export default App;
