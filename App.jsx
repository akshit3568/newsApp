import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default function App() {
  let [language, setLanguage] = useState("hi")
  let [search, setSearch] = useState("")
  let changeLanguage = (data) => {
    setLanguage(data)
  }
  let changeSearch = (data) => {
    setSearch(data)
  }
  return (
    <BrowserRouter>
      <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch} />
      <Routes>
        <Route path='' element={<Home language={language} q={search ? search : "All"} />} />
        <Route path='/All' element={<Home language={language} q={search ? search : "All"} />} />
        <Route path='/Crime' element={<Home language={language} q={search ? search : "Crime"} />} />
        <Route path='/Stock' element={<Home language={language} q={search ? search : "Stock"} />} />
        <Route path='Entertainment' element={<Home language={language} q={search ? search : "Entertainment"} />} />
        <Route path='Education' element={<Home language={language} q={search ? search : "Education"} />} />
        <Route path='/World' element={<Home language={language} q={search ? search : "World"} />} />
        <Route path='/India' element={<Home language={language} q={search ? search : "India"} />} />
        <Route path='/Sports' element={<Home language={language} q={search ? search : "Sports"} />} />
        <Route path='/Science' element={<Home language={language} q={search ? search : "Science"} />} />
        <Route path='/Technology' element={<Home language={language} q={search ? search : "Technology"} />} />
        <Route path='/Jobs' element={<Home language={language} q={search ? search : "Jobs"} />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

