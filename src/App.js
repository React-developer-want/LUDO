import React from 'react'
import { Routes,Route  } from 'react-router-dom'
import Starter from './pages/starter.js';
import Ludo from './pages/Ludo.js';

const App = () => {
  return (
    <>
      <Routes>
        <>Hello world</>
        <Route index element={<Starter/>} />
        <Route path='/ludo' element={<Ludo/>} />
      </Routes> 
    </>
  )
}

export default App
