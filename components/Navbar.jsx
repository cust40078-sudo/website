import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <nav className="navbar">
      <div className="wrap">
        <button className="nav-mark" onClick={() => scrollTo('top')} aria-label="Go to top">
          RAJA<span>.</span>MUSTAFA
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((link) => (
            <li key={link.id}>
              <button onClick={() => scrollTo(link.id)}>{link.label}</button>
            </li>
          ))}
        </ul>

        <button className="nav-cta" onClick={() => scrollTo('contact')}>
          Let's talk
        </button>

        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
