import './App.css';
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Page/Home';
import axios from "axios"
import { Toaster } from 'react-hot-toast'



function App() {

  // axios.defaults.baseURL = "https://clusterlearn.cyclic.app/user";
  // axios.defaults.withCredentials = true;
  
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
        </div>
        <Footer />
      </div>

      <Toaster
        position="top-center"
        reverseOrder={true}
      />

    </Router>
  );
}

export default App;