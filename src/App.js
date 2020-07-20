import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Backend from './backend'
import CategoryFilter from './categoryFilter'
import newsItem from './newsItem'


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div style={{float:'left'}}><a href="dashboard url">link to dash</a></div>
        <div>Title</div>
      </header>
      <div>
        <CategoryFilter categories={new Backend().getCategories()}></CategoryFilter>
      </div>
    </div>
  );
}

export default App;
