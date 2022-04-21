import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import LoadingPage from './components/LoadingPage'
import InstagramLogin from './components/InstagramLogin'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/login' element={<InstagramLogin/>} />
      <Route path='/main' element={<LoadingPage/>} />
    </Routes>
  )
}

export default App;
