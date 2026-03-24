import './About.css'

export default function About() {
  const stats = [
    { value: '2+', label: 'Años de experiencia' },
    { value: '15+', label: 'Proyectos completados' },
    { value: '10+', label: 'Tecnologías dominadas' },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre mí</h2>
        <p className="section-subtitle">Conoce quién está detrás del código</p>

        <div className="about__content">
          <div className="about__avatar">
            <div className="about__avatar-ring">
              <div className="about__avatar-inner">
                <span>SN</span>
              </div>
            </div>
          </div>

          <div className="about__text">
            <h3 className="about__name">Sebastián David Niño G.</h3>
            <p className="about__role">Desarrollador Full Stack & Estudiante de Ingeniería</p>

            <p className="about__bio">
              Soy un desarrollador apasionado por la tecnología y la creación de soluciones digitales
              innovadoras. Actualmente estudio Ingeniería y combino mis estudios con el desarrollo de
              proyectos reales que me permiten crecer profesionalmente.
            </p>
            <p className="about__bio">
              Me especializo en el desarrollo web con tecnologías modernas como React, Node.js y bases de
              datos relacionales y no relacionales. Disfruto tanto del frontend como del backend, buscando
              siempre la mejor experiencia para el usuario final.
            </p>

            <div className="about__details">
              <div className="about__detail-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Colombia</span>
              </div>
              <div className="about__detail-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
                <span>Disponible para trabajar</span>
              </div>
              <div className="about__detail-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.91 14a16 16 0 006.29 6.29l.42-.41a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 22v-5.08z" />
                </svg>
                <span>Español / Inglés</span>
              </div>
            </div>

            <div className="about__actions">
              <a
                href="#contact"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Contáctame
              </a>
              <a
                href="/cv-sebastian-nino.pdf"
                download
                className="btn-secondary"
              >
                Descargar CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="about__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="about__stat-card">
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
