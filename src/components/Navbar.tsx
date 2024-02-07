const Navbar = () => {
  return (
    <div className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
      <div className="container d-flex justify-content-between">
        <a className="navbar-brand">
          <img src="https://cayetano.edu.pe/wp-content/uploads/2022/07/upch-logotipo-blanco.svg" className="py-1"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item">
                  <a className="nav-link" href="#home">Inicio</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#news">Noticias</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#contact">Contacto</a>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar