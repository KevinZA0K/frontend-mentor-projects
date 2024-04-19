import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import "./App.css"
import HomePageList from './components/HomePageList/HomePageList'
import CountryPage from './components/CountryPage/CountryPage'

function App() {

  return (
    <>

      <BrowserRouter>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<HomePageList />} />
            <Route path="/country/:countryId" element={<CountryPage />}/>
            <Route path="*" element={<h1>Error 404 NOT FOUND</h1>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
