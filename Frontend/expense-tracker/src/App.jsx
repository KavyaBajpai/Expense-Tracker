import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Header from './myComponents/Header'
import Hero from './myComponents/Hero'

function App() {
 

  return (
    <>
     <div>
      <Header />
      <Hero />
     </div>
    </>
  )
}

export default App
