
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCat,
  faPaw,
  faHeart,
  faHouse,
  faCircleExclamation
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">

      <div className="error-card">

        <div className="error-decoracion">
          <FontAwesomeIcon icon={faPaw} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faPaw} />
        </div>

        <div className="error-gatito">
          <FontAwesomeIcon icon={faCat} />
        </div>

        <h1>404</h1>

        <h2>
          ¡Ups! Página no encontrada
        </h2>

        <p>
          Parece que este gatito se perdió.
          La página que estás buscando no existe
          o fue movida a otro lugar.
        </p>

        <div className="error-icono">
          <FontAwesomeIcon icon={faCircleExclamation} />
        </div>

        <Link to="/" className="btn btn-primary error-boton">
          <FontAwesomeIcon icon={faHouse} /> Volver al inicio
        </Link>

        <div className="error-huellitas">
          <FontAwesomeIcon icon={faPaw} />
          <FontAwesomeIcon icon={faPaw} />
          <FontAwesomeIcon icon={faPaw} />
        </div>

      </div>

    </div>
  );
};

export default Error;
