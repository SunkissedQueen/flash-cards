import React, { useState } from "react"
import "./App.css"

import mockCards from "./mockCards"
import { Routes, Route } from "react-router-dom"

import Footer from "./components/Footer"
import Home from "./pages/Home"
import FlashIndex from "./pages/FlashIndex"

const App = () => {

  const [flashCards, setFlashCards] = useState(mockCards)
  
  const reveal = (id) => {
    flashCards[id].flip = !flashCards[id].flip
    setFlashCards([...flashCards])
  }

  return(
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/all-cards" 
          element={<FlashIndex 
            flashCards={flashCards}
            reveal={reveal}
          />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App 