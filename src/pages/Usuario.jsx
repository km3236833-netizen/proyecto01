
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Usuario = () => {

  const { nombre } = useParams();

  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {

    setCargando(true);

    fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`)
    .then((respuesta) => respuesta.json())
      .then((datos) => {
        setPersonajes(datos.results || []);
        setCargando(false);
      })
      .catch((error) => {
        console.log(error);
        setCargando(false);
      });

  }, [nombre]);

  if (cargando) {
    return <h2 className="text-center mt-5">Cargando personajes...</h2>;
  }

  if (personajes.length === 0) {
    return <h2 className="text-center mt-5">No se encontraron personajes</h2>;
  }

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Personajes de Rick y Morty
      </h1>

      <div className="row">

        {personajes.map((personaje) => (

          <div className="col-md-4 col-sm-6 mb-4" key={personaje.id}>

            <div className="card h-100 shadow">

              <img
                src={personaje.image}
                className="card-img-top"
                alt={personaje.name}
              />

              <div className="card-body text-center">

                <h5 className="card-title">
                  {personaje.name}
                </h5>

                <p className="card-text">
                  Especie: {personaje.species}
                </p>

                <p className="card-text">
                  Estado: {personaje.status}
                </p>

                <p className="card-text">
                  Género: {personaje.gender}
                </p>

              </div>

            </div>

          </div>

        ))}

        <div className="botones-home">

          <NavLink to="/login" className="btn btn-primary">
            Iniciar Sesión
          </NavLink>

          <NavLink to="/registro" className="btn btn-primary">
            Registrarse
          </NavLink>

          <NavLink to="/" className="btn btn-primary">
            Home
          </NavLink>

          <NavLink to="/error" className="btn btn-primary">
            Error
          </NavLink>

        </div>

      </div>

    </div>
  );
};

export default Usuario;
