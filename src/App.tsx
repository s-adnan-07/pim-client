import { Route, Routes } from 'react-router-dom'

import './App.css'

import Layout from './ui/Layout'
import SearchPage from './pages/SearchPage'
import Login from './pages/login/Login'
import PrivateRoutes from './ui/PrivateRoutes'
import Product from './pages/Product'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/products/:itemId" element={<Product />} />
          <Route path="/" element={<SearchPage />} />
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
