import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// CSS
import './Assets/css/default.min.css';

//Components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePage';
import ConnectFour from './components/pages/connectFour';
import HangMan from './components/pages/hangMan';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path="/" component={HomePage} />
          <Route exact path="/productPage" component={ConnectFour} />
          <Route exact path="/hangMan" component={HangMan} />


<Footer />
        </div>
      </Router>
    );
  }
}

export default App;
