// impots
import './css/nav.css'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
// pages
import Home from './page/home'
import About from './page/about'
import Fech from './page/fech'
function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about/" element={<About/>} />
              <Route path='/fech/' element={<Fech />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
