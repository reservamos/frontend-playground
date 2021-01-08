import React from 'react';
import '../styles/index.scss';

function Home () {
  return (
    <div className="container">
      <div className="logo">
        <a href="http://www.reservamos.mx">
          <img src="https://assets-fl.reservamos.mx/assets/logo-b09feb00a641615eb083fedea266d68ed48e1e46687e198437b7a1aab251860d.svg" alt="reservamos" className="logo" />
        </a>
      </div>
      <div className="illustration">
        <img src="https://i.ibb.co/x8HnLbT/illust.png" alt="illustration" />
      </div>
      <div className="description">
        <h1 className="description-title">Disculpa, la página que estás buscando no existe.</h1>
        <p className="description-paragraph">Puede ser alguno de los siguientes motivos:</p>
        <ul className="description-list">
          <li>La página ha sido removida del sitio.</li>
          <li>La dirección URL se escribió de manera incorrecta.</li>
          <li>No cuentas con los permisos correctos para acceder a esta sección.</li>
        </ul>
        <a className="button-primary" href="https://www.reservamos.mx/" target="_blank" rel="noopener noreferrer">Regresar al inicio</a>
        <a className="description-link" href="https://paquetes.reservamos.mx/" target="_blank" rel="noopener noreferrer">Conoce nuestros paquetes</a>
      </div>

      <div className="links">
        <div className="rutasMX">
          <h3>Explora nuestras rutas en Mexico</h3>
          <div className="button-secondary">
            <a className="tags-link" title="Destinos y rutas de autobús en México" href="#mexico">México</a>
            <a className="tags-link" title="Destinos y rutas de autobús en Puebla" href="#puebla">Puebla</a>
            <a className="tags-link" title="Destinos y rutas de autobús en Distrito Federal" href="#distrito-federal">Distrito Federal</a>
            <a className="tags-link" title="Destinos y rutas de autobús en Chihuahua" href="#chihuahua">Chihuahua</a>
            <a className="tags-link" title="Destinos y rutas de autobús en Jalisco" href="#jalisco">Jalisco</a>
            <a className="tags-link" title="Destinos y rutas de autobús en Nayarit" href="#nayarit">Nayarit</a>
          </div>
        </div>
        <div className="links">
          <h3>Explora nuestras rutas en EUA</h3>
          <div className="button-secondary-two">
            <a className="tags-link" title="Destinos y rutas de autobús en Texas" href="#texas">Texas</a>
            <a className="tags-link" title="Destinos y rutas de autobús en California" href="#california">California</a>
            <a className="tags-link" title="Destinos y rutas de autobús en North Carolina" href="#north-carolina">North Carolina</a>
            <a className="tags-link" title="Destinos y rutas de autobús en Vermont" href="#vermont">Vermont</a>
            <a className="tags-link" title="Destinos y rutas de autobús en Colorado" href="#colorado">Colorado</a>
            <a className="tags-link" title="Destinos y rutas de autobús en New Hampshire" href="#new-hampshire">New Hampshire</a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
