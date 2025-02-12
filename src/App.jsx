import { Route, Routes } from 'react-router'
import { useState } from 'react'
import Layout from './layout/Layout'
import Eventos from './pages/Eventos'
import Asociaciones from './pages/Asociaciones'
import Perfil from './pages/Perfil'

function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Eventos />} />
          <Route path="/services" element={<Asociaciones />} />
          <Route path="/contact" element={<Perfil />} />
        </Route>
      </Routes>
    </>
  )
}
// prueb
export default App
