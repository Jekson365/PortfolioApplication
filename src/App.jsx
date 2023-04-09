import { useState } from 'react'
import { Button, Container, Col, Row, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './components/Navbar'
import { Main } from './components/Main'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'


function App() {
  return (
    <>
      <Navbar />
      <Main/>
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
