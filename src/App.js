import React, { Component } from 'react';
import Calendar from "./components/Calendar";
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="overlay" id="overlay"></div>
        <div className="App" id="App">
          <header>
            <div id="logo">
              <b>calendar</b>
            </div>
          </header>
          <main>
              <Calendar />
          </main>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
