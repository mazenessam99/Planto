import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mainlayout from './components/layout/MainLayout'
import NotFound from './pages/NotFound'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path='*' element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
