import React from 'react';
import './App.css';
import Title from './title';
import Content from './list';

function App(): JSX.Element {
  return (
    <div className="App">
      <Title />
      <Content />
    </div>
  );
}

export default App;
