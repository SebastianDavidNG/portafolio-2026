import './Skills.css'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML & CSS', level: 92 },
      { name: 'TypeScript', level: 70 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 78 },
      { name: 'Express', level: 75 },
      { name: 'Python', level: 65 },
      { name: 'Java', level: 60 },
    ],
  },
  {
    title: 'Bases de Datos',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 72 },
      { name: 'PostgreSQL', level: 68 },
      { name: 'Firebase', level: 65 },
    ],
  },
  {
    title: 'Herramientas',
    icon: '🔧',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Docker', level: 55 },
      { name: 'Linux', level: 72 },
      { name: 'Figma', level: 60 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle">Tecnologías y herramientas con las que trabajo</p>

        <div className="skills__grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skills__card">
              <div className="skills__card-header">
                <span className="skills__card-icon">{category.icon}</span>
                <h3 className="skills__card-title">{category.title}</h3>
              </div>
              <ul className="skills__list">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="skills__item">
                    <div className="skills__item-top">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-percent">{skill.level}%</span>
                    </div>
                    <div className="skills__bar-bg">
                      <div
                        className="skills__bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
