import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FreeResources from './pages/FreeResources'
import BookDetails from './components/BookDetails'
import { BookProvider } from './components/BookContext';
function App() {
  return (
    <BookProvider>
    <Router>
      <Routes>
        <Route path="/" element={<FreeResources/>} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </Router>
    </BookProvider>
  )
}

export default App