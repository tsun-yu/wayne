import { Route, Switch } from "react-router";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact></Route>
      </Switch>
    </>
  );
}

export default App;
