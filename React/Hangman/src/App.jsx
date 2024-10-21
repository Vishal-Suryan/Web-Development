import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import Home from './pages/Home'
import { WordContext } from './context/Wordcontext';
import { useState } from 'react'
function App() {
  const [wordList, setWordList]= useState([]);
  const [word,setWord] = useState('');
  return (
    <div>
      <WordContext.Provider value={{wordList,setWordList, word, setWord}}>
        <Routes>
          <Route path='/start/' element={<StartGame />} />
          <Route path='/play/' element={<PlayGame />} />
          <Route path='/' element={ <Home /> } />
        </Routes>
      </WordContext.Provider>
    </div>
  )
}



export default App
