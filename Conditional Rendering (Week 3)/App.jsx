import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import ToDoList from './components/ToDoList'
import MovieList from './components/MovieList'
import BookList from './components/Booklist'
import ShinyButton from './components/React-Demo-1'
import Greeting from './components/React-Demo-1-2'
import Apps from './components/React-Demo-2'
import Appx from './components/React-Demo-3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting/>
      <ShinyButton/>
      <Apps/>
      <Appx/>
    </>
  );
}

export default App
