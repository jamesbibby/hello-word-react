import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Bibs.Codes React App - Served By the SPARouter Cloudflare Worker
          </p>
          <a
            className="App-link"
            href="https://bibs.codes/posts/typescript-cloudflare-worker"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the post here
          </a>
        </header>
      </div>
    );
  }
}

export default App;
