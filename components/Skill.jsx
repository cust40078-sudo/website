import { motion } from 'framer-motion'

const SKILL_GROUPS = [
  {
    label: 'Frontend',
    items: [
      { name: 'React', level: 92 },
      { name: 'JavaScript / TypeScript', level: 88 },
      { name: 'CSS & Design Systems', level: 80 },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'REST & GraphQL APIs', level: 82 },
      { name: 'PostgreSQL / MongoDB', level: 78 },
    ],
  },
  {
    label: 'Tooling',
    items: [
      { name: 'Git & CI/CD', level: 87 },
      { name: 'Docker', level: 70 },
      { name: 'Testing (Jest/RTL)', level: 75 },
    ],
  },
]

function Skill() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Capabilities</p>
          <h2 className="section-title">Skills &amp; tools</h2>
        </div>

        <div className="skill-groups">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <h3 className="skill-group-label">{group.label}</h3>
              {group.items.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-item-head">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill
