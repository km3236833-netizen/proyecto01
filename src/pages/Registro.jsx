
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import {
  faPaw,
  faCat,
  faHeart,
  faUser,
  faEnvelope,
  faLock,
  faCalendar,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";

function Registro() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="decoracion-superior">
          <FontAwesomeIcon icon={faPaw} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faPaw} />
        </div>

        <FontAwesomeIcon
          icon={faCat}
          className="gatito-principal"
        />

        <h1>Crear cuenta</h1>

        <hr />

        <p className="mensaje-gatitos">
          ¡Únete a nuestro mundo de gatitos!
        </p>

        <form>

          <div className="mb-3">
            <label className="form-label">Nombre</label>

            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Ingresa tu nombre"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Apellido paterno</label>

            <input
              type="text"
              className="form-control"
              placeholder="Apellido paterno"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Apellido materno</label>

            <input
              type="text"
              className="form-control"
              placeholder="Apellido materno"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Fecha de nacimiento</label>

            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faCalendar} />
              </span>

              <input
                type="date"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>

            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>

              <input
                type="email"
                className="form-control"
                placeholder="Ingresa tu correo"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>

            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faLock} />
              </span>

              <input
                type="password"
                className="form-control"
                placeholder="Crea una contraseña"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            <FontAwesomeIcon icon={faUserPlus} />
            {" "}Registrarse
          </button>

          <hr />

          <div className="botones-home">

            <NavLink to="/login" className="btn btn-primary">
              Iniciar Sesión
            </NavLink>

            <NavLink to="/" className="btn btn-primary">
              Home
            </NavLink>

          </div>

        </form>

        <div className="decoracion-inferior">
          <FontAwesomeIcon icon={faPaw} />
          <FontAwesomeIcon icon={faCat} />
          <FontAwesomeIcon icon={faPaw} />
        </div>

      </div>
    </div>
  );
}

export default Registro;
