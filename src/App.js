import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header'
import FeedPage from './pages/FeedPage';
import ExplorePage from './pages/ExplorePage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <Container fluid className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/user/:username" element={<UserPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App