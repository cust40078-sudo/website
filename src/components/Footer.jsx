import { FiGithub } from 'react-icons/fi'
import { HiMail } from 'react-icons/hi'

function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer>
      <div className="wrap footer-row">
        <span className="footer-note">© {year} Raja Mustafa Arfat — Built with React &amp; Vite.</span>

        <div className="footer-socials">
          <a
            href="https://github.com/cust40078-sudo"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a href="mailto:rajamustafabro@gmail.com" aria-label="Email">
            <HiMail size={18} />
          </a>
        </div>

        <button className="footer-top" onClick={scrollTop}>
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}

export default Footer
