import { motion } from 'framer-motion'
import { HiArrowRight, HiMail } from 'react-icons/hi'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

function About() {
  return (
    <section id="about" className="hero" style={{ borderBottom: '1px solid var(--line-soft)' }}>
      <div id="top" />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <motion.p
              className="eyebrow"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
            >
              Software Engineering Student
            </motion.p>

            <motion.h1
              className="hero-title"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
            >
              Hi, I'm Raja Mustafa Arfat — I build <em>clean, working</em> software.
            </motion.h1>

            <motion.p
              className="hero-lede"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
            >
              I'm a Software Engineering student at 
              (CUST), learning to design and build real applications — from
              small desktop tools to full web apps and machine learning
              models. I enjoy picking apart how things work and rebuilding
              them better.
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
            >
              <a
                className="btn-primary"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View my work <HiArrowRight />
              </a>
              <a className="btn-secondary" href="mailto:rajamustafabro@gmail.com">
                Get in touch <HiMail />
              </a>
            </motion.div>

            <motion.div
              className="about-body"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
            >
              <div className="skill-group-label" style={{ borderBottom: 'none' }}>
                Background
              </div>
              <div>
                <p>
                  I'm currently studying Software Engineering at 
                  University (CUST), where I've been building a foundation in
                  programming, data structures, and software design.
                  Alongside coursework, I build my own projects to actually
                  apply what I'm learning rather than just reading about it.
                </p>
                <p>
                  My interests sit across a few areas — desktop applications
                  in Java, web apps with React, and getting started with
                  machine learning and data-driven models. I'm always looking
                  for internships and collaborations where I can keep
                  learning by doing.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          >
            <div className="dossier-card">
              <dl style={{ margin: 0 }}>
                <div className="dossier-row">
                  <dt>Name</dt>
                  <dd>Raja Mustafa Arfat</dd>
                </div>
                <div className="dossier-row">
                  <dt>Role</dt>
                  <dd>Software Engineering Student</dd>
                </div>
                <div className="dossier-row">
                  <dt>University</dt>
                  <dd> (CUST)</dd>
                </div>
                <div className="dossier-row">
                  <dt>Focus</dt>
                  <dd>Web &amp; ML projects</dd>
                </div>
                <div className="dossier-row">
                  <dt>Status</dt>
                  <dd className="dossier-status">Open to internships</dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
