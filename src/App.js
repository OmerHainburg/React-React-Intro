import './App.css';
import React from 'react';
import { myList } from './previous';


function App() {
  const h1 = <h1>Hello world!Omer</h1>;
  const myArticle = <article>Omer Article</article>;
  const p1 = <p id="large">foo</p>
  const p2 = <p id="small">bar</p>
  const myDiv = <div><h3>Hello world</h3></div>
  const blog = (
    <div>
      <img src="omer.jpg" alt=""/>
      <h3>
        Welcome to Dan's Blog!
      </h3>
      <article>
        Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
      </article>
    </div>
  );


  return (
    <div className="App">
      <header className="App-header">
        {h1}
        <h2>JSX Elements</h2>
        <p>Goodbye, Earth!</p>
        <h2>JSX Elements And Their Surroundings</h2>
        {myArticle}
        <h2>Attributes In JSX</h2>
        {p1}{p2}
        <h2>Nested JSX</h2>
        {myDiv}
        <h2>JSX Outer Elements</h2>
        {blog}
        <h2>Rendering JSX</h2>
        {myList}
      </header>
    </div>
    
  );
}

export default App;
