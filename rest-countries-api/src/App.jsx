import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import "./App.css"
import HomePageList from './components/HomePageList/HomePageList'

function App() {

  return (
    <>

      <BrowserRouter>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<HomePageList />} />
            <Route path="/:countryId" element={<h1>ola</h1>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
