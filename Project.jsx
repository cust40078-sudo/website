import { motion } from 'framer-motion'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'

const PROJECTS = [
  {
    code: 'NO. 01',
    title: 'Number Guessing Game',
    desc: 'A desktop guessing game built with Java Swing. The player picks a number within a set range while the app tracks attempts, gives higher/lower hints, and shows a win screen with the final score.',
    tags: ['Java', 'Swing', 'GUI', 'OOP'],
    live: '#',
    repo: 'https://github.com/cust40078-sudo/mustafa-project.git',
  },

  {
    code: 'NO. 02',
    title: 'Weather Forecast App',
    desc: 'A responsive weather app that looks up any city and shows current conditions plus a short forecast, with clean loading and error states for slow or failed requests.',
    tags: ['React', 'Weather API', 'CSS'],
    live: '#',
    repo: 'https://github.com/cust40078-sudo/weather-forcast.git',
  },

  {
    code: 'NO. 03',
    title: 'House Price Prediction Model',
    desc: 'A machine learning model that predicts house prices from features like area, location, and number of rooms, trained and evaluated on a cleaned real-estate dataset.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Regression'],
    live: '#',
    repo: 'https://github.com/cust40078-sudo/house-priceing.git',
  },
  {
    code: 'NO. 03',
    title: 'Ecommerce App',
    desc: 'Java Bass app',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Regression'],
    live: '#',
    repo: 'https://github.com/cust40078-sudo/Ecommerce-App.git',
  },
   {
    code: 'NO. 03',
    title: 'Employeer Management System',
    desc: 'Java Bass app',
    tags: ['HTML, CSS', 'JavaScript', 'React', 'Node.js'],
    live: '#',
    repo: 'https://github.com/cust40078-sudo/Employeer-management-system.git',
  },
]

function Project() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Case files</p>
          <h2 className="section-title">Selected projects</h2>
        </div>

        <div className="project-list">
          {PROJECTS.map((project, i) => (
            <motion.div
              className="project-item"
              key={project.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: 'easeOut',
              }}
            >
              <span className="project-code">{project.code}</span>

              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a
                  href={project.live}
                  aria-label={`View ${project.title} live`}
                >
                  <HiOutlineExternalLink size={20} />
                </a>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source`}
                >
                  <FiGithub size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project