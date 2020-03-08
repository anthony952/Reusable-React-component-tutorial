import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card';
import Posts from './posts'


function App() {

  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Reausable Cards
        </p>
      </header>
      <main>
      {
        Posts.map((post) =>
        <Card 
          key={post.id}
          post={post}
        />
        )
      }
      </main>
    </div>
  );
}

export default App;
