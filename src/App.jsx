import { Route, Routes } from 'react-router'
import { useState } from 'react'
import Layout from './layout/Layout'
import Eventos from './pages/Eventos'
import Asociaciones from './pages/Asociaciones'
import Perfil from './pages/Perfil'
import Gestion from './pages/Gestion'
import CreacionAsociacion from './pages/CreacionAsociacion'

function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Eventos />} />
          <Route path="/asociaciones" element={<Asociaciones />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/gestion" element={<Gestion />} />
          <Route path="/creacionAsociaciones" element={<CreacionAsociacion />} />
        </Route>
      </Routes>
    </>
  )
}
// prueb
export default App
