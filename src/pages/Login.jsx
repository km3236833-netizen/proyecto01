
// Función que se ejecuta al enviar el formulario
const onSubmit = (data) => {

  // Crear una sesión local con el correo del usuario
  login({
    usuario: data.email,
    email: data.email
  });

  // Mostrar mensaje de acceso correcto
  Swal.fire({
    icon: "success",
    title: "¡Acceso correcto!",
    text: "Estás siendo redirigido..."
  });

  // Ir a la página principal
  navegacion("/", { replace: true });

};
export default Login;