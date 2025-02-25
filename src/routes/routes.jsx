import Login from "../components/login/login/login";
import { BrowserRouter as Router, Route } from "react-router-dom";

function AppRouter() {
    return (
      <Router>
        <div>
        <Route path="/" exact component={Login} />
        </div>
      </Router>
    );
  }
  
  export default AppRouter;