// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/pages/Footer/Footer";
import Services from "./components/pages/Services/Services";
import Product from "./components/pages/Products/Product";
import Signup from "./components/pages/Signup/Signup";



function App() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Services" exact component={Services} />
          <Route path="/Product" exact component={Product} />
          <Route path="/sign-up" exact component={Signup} />
        </Switch>
        <Footer />
      </Router>
    );
}

export default App;