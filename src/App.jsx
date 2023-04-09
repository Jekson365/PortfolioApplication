import { useEffect, useState } from 'react'
import { Button, Container, Col, Row, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './components/Navbar'
import { Main } from './components/Main'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import Aos from 'aos'


function App() {
  useEffect(() => {
    Aos.init()
  })
  return (
    <>
      <Navbar />
      <Main />
      <Skills id='skills' />
      <Projects id='projects' />
      <Footer id='contact' />
    </>
  )
}

export default App
