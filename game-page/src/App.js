import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// CSS
import './Assets/css/default.min.css';

//Components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePage';
import ProductPage from './components/pages/productPage';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       <Header />

<Route exact path="/" component={HomePage} />
<Route exact path="/productPage" component={ProductPage} />



      </div>
      </Router>
    );
  }
}

export default App;
