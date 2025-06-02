import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.css'

// Pages
import Home from './pages/Home'
import StoriesLibrary from './pages/StoriesLibrary'
import StoryLesson from './pages/StoryLesson'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

// Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<StoriesLibrary />} />
            <Route path="/story/:id" element={<StoryLesson />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
