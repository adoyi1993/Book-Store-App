import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Book from './components/Book/Book'
import AddBook from './components/AddBook';
import Books from './components/Book/Books';
import About from './components/About';
import {Route, Routes} from "react-router-dom";
import BookDetails from './components/Book/BookDetails';


function App() {
  return (
    <React.Fragment>
      <header>
      <Header/>
      </header>

      <main>
        <Routes>
          <Route path="/"  element = {<Home/> } exact/>
          <Route path="/add"  element= {<AddBook/> } exact />
          <Route path="/books"  element= {<Books/> } exact />
          <Route path="/About"  element= {<About/> } exact />
          <Route path="/books/:id" element= {<BookDetails/>} exact/> 

        </Routes>
      </main>
      
    
    </React.Fragment>
  );
}

export default App;
