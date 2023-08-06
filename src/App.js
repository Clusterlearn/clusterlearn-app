import './App.css';
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Page/Home';
import VerifyEmail from "./Page/EmailVerification/VerifyEmail";
import ConfirmEmail from "./Page/EmailVerification/ConfirmEmail";



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route path="/verify-email">
              <VerifyEmail />
            </Route>
          </Switch>
          <Switch>
            <Route path="/confirm-email">
              <ConfirmEmail />
            </Route>
          </Switch>

        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;