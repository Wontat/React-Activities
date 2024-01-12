import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import ToDoList from './components/ToDoList'
import MovieList from './components/MovieList'
import BookList from './components/Booklist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDoList/>
      <MovieList/>
      <BookList/>
    </>
  );
}

export default App
