import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Skill from './components/Skill.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Helmet>
        <title>Raja Mustafa Arfat — Portfolio</title>
      </Helmet>
      <Navbar />
      <main>
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
