import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './styles.css'
import Home from './components/home/home'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
