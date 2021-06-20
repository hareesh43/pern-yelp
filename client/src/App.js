import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Details from "./routes/Details";
import Home from "./routes/Home";
import UpdateDetails from "./routes/UpdateDetails";
import {ContextRestaurantProvider} from "./context/ContextRestaurant";
import "./App.css";

function App() {
  return (
    <ContextRestaurantProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/restaurant/:id/details" component={Details} />
            <Route
              exact
              path="/restaurant/:id/update"
              component={UpdateDetails}
            />
          </Switch>
        </Router>
      </div>
    </ContextRestaurantProvider>
  );
}

export default App;
