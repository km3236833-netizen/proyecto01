
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Context from "../context/Contexto.jsx";

import {
  faPaw,
  faCat,
  faEnvelope,
  faLock,
  faHeart,
  faRightToBracket
} from "@fortawesome/free-solid-svg-icons";

import Swal from "sweetalert2";

const Login = () => {

  const { login } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // useNavigate es un hook que permite navegar entre las rutas de la aplicación.
  const navegacion = useNavigate();

  const API = import.meta.env.VITE_API_URL;

  // Validaciones del formulario
  const validacion = {
    email: {
      required: "El correo electrónico es requerido"
    },
    password: {
      required: "El campo contraseña es requerido"
    }
  };

  // Función que se ejecuta al enviar el formulario
  const onSubmit = (data) => {

    fetch(`${API}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        usuario: data.email,
        password: data.password
      })
    })
      .then(respuesta => respuesta.json())
      .then(respuestaJson => {

        if (respuestaJson.status) {

          login(respuestaJson);

          Swal.fire({
            icon: "success",
            title: "¡Acceso correcto!",
            text: "Estás siendo redirigido..."
          });

          navegacion("/", { replace: true });

        } else {

          Swal.fire({
            icon: "error",
            title: "Error al iniciar sesión",
            text: respuestaJson.message || "Usuario o contraseña incorrectos."
          });

        }

      })
      .catch(error => {
        console.error("Error al iniciar sesión:", error);

        Swal.fire({
          icon: "error",
          title: "Error de conexión",
          text: "No se pudo conectar con el servidor."
        });
      });

  };

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

        <div className="botones-home">

          <NavLink to="/" className="btn btn-primary">
            Home
          </NavLink>

          <NavLink to="/registro" className="btn btn-primary">
            Registrarse
          </NavLink>

        </div>

        <h1>Iniciar sesión</h1>

        <hr />

        <p className="mensaje-gatitos">
          ¡Qué alegría tenerte de vuelta!
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Correo electrónico */}
          <div className="mb-3">

            <label className="form-label">
              Correo electrónico
            </label>

            <div className="input-group">

              <span className="input-group-text">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>

              <input
                type="email"
                className="form-control"
                placeholder="Ingresa tu correo"
                {...register("email", validacion.email)}
              />

            </div>

            {errors.email && (
              <small className="text-danger">
                {errors.email.message}
              </small>
            )}

          </div>

          {/* Contraseña */}
          <div className="mb-3">

            <label className="form-label">
              Contraseña
            </label>

            <div className="input-group">

              <span className="input-group-text">
                <FontAwesomeIcon icon={faLock} />
              </span>

              <input
                type="password"
                className="form-control"
                placeholder="Ingresa tu contraseña"
                {...register("password", validacion.password)}
              />

            </div>

            {errors.password && (
              <small className="text-danger">
                {errors.password.message}
              </small>
            )}

          </div>

          {/* Botón para iniciar sesión */}
          <button
            type="submit"
            className="btn btn-primary"
          >
            <FontAwesomeIcon icon={faRightToBracket} />
            {" "}Iniciar sesión
          </button>

        </form>

        <div className="decoracion-inferior">
          <FontAwesomeIcon icon={faPaw} />
          <FontAwesomeIcon icon={faCat} />
          <FontAwesomeIcon icon={faPaw} />
        </div>

      </div>
    </div>
  );
};

export default Login;

// Este archivo se encarga de mostrar la página de inicio de sesión,
// donde el usuario puede ingresar su correo electrónico y contraseña
// para acceder a la aplicación. Además, se muestran botones para
// navegar a la página de registro o volver a la página de inicio.
