import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './sections/Home/Home';
import About from './sections/About/About';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
