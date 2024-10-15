import './App.css'
/* import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer' */
import {Route,Routes} from 'react-router-dom'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/start/' element={<StartGame />} />
        <Route path='/play' element={<PlayGame />} />
        <Route path='/' element={ <div> Home </div> } />
      </Routes>
    </div>
  )
}



export default App
