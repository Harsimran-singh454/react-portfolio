import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './views/Home'
import Education from './views/Education'
import Work from './views/Work'
import Projects from './views/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/education" element={<Education/>}/>
        <Route path = "/work" element={<Work/>}/>
        <Route path = "/projects" element={<Projects/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
