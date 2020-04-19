import React from 'react';
import './App.css';
import Title from './component/Title';
import Content from './component/List';
import Footer from './component/Footer';

function App(): JSX.Element {
  return (
    <div className="App">
      <Title />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
