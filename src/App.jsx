import { useState } from 'react'
import Island from './components/test'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, About, Project, Contact, Footer } from './pages'
import Navbar from './components/Navbar'
import Page_404 from './components/Page_404'
function App() {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Project />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='*' element={<Page_404 />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  )
}

export default App
