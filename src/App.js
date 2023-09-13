import './App.css';
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Page/Home';
import JoinLearnerCard from './Component/JoinLearner/JoinLearnerCard';



function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Header />
    //     <div className="content">
    //       <Switch>
    //         <Route exact path="/">
    //           <Home />
    //         </Route>
    //       </Switch>
    //     </div>
    //     <Footer />
    //   </div>
    // </Router>
    <JoinLearnerCard />
  );
}

export default App;