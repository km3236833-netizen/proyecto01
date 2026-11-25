
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Context from "../context/Contexto.jsx";
import Swal from "sweetalert2";

const Login = () => {
  const { login } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navegacion = useNavigate();

  // Validaciones del formulario
  const validacion = {
    email: {
      required: "El correo electrónico es requerido"
    },
    password: {
      required: "El campo contraseña es requerido"
    }
  };

  // Iniciar sesión sin conectar con un servidor
  const onSubmit = (data) => {
    login({
      usuario: data.email,
      email: data.email
    });

    Swal.fire({
      icon: "success",
      title: "¡Acceso correcto!",
      text: "Estás siendo redirigido..."
    });

    navegacion("/", { replace: true });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <h2 className="text-center mb-4">Iniciar sesión</h2>

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Correo electrónico */}
            <div className="mb-3">
              <label className="form-label">
                Correo electrónico
              </label>

              <div className="input-group">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="envelope" />
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
                  <FontAwesomeIcon icon="lock" />
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

            {/* Botón de inicio de sesión */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Iniciar sesión
              </button>
            </div>

            {/* Enlace de registro */}
            <p className="text-center mt-3">
              ¿No tienes una cuenta?{" "}
              <NavLink to="/registro">
                Regístrate aquí
              </NavLink>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
