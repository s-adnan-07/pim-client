import { Route, Routes } from 'react-router-dom'

import './App.css'

import Layout from './ui/Layout'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/product/:itemId" element={<Home />} />
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </Layout>
  )
}

export default App
