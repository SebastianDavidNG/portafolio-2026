import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo" onClick={(e) => handleNav(e, '#hero')}>
              SN<span>.</span>
            </a>
            <p className="footer__tagline">
              Desarrollador Full Stack apasionado por crear soluciones digitales de calidad.
            </p>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Navegación</h4>
            <ul>
              {[
                { label: 'Inicio', href: '#hero' },
                { label: 'Sobre mí', href: '#about' },
                { label: 'Habilidades', href: '#skills' },
                { label: 'Proyectos', href: '#projects' },
                { label: 'Contacto', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleNav(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Redes</h4>
            <ul>
              <li>
                <a href="https://github.com/SebastianDavidNG" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/sebastianng" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Sebastián David Niño G. Todos los derechos reservados.
          </p>
          <p className="footer__made">
            Hecho con ❤️ usando React & Vite
          </p>
        </div>
      </div>
    </footer>
  )
}
