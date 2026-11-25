import Contexto from "./Contexto";
import{useContext, useReducer} from "react";
import MiReducer from "./MiReducer";
import type from "./type";
// las variables de estado globales se definen en el provider, y se pasan a los componentes hijos a traves del context.
const inicio = ()=>{
    const user = localStorage.getItem("usuario");
    return{
        logged:!!user,
        usuario:JSON.parse(user)
    }
}

const Provider = ({children}) => {

    ///           =             = Propiedades valores iniciales,valor por defecto y funcion que modifica el estado global
    const [logeado,dispatch]= useReducer(MiReducer,{},inicio);
    const login = (sesion)=>{
        const action = {
            type: type.login,
            payload:sesion
        }
        localStorage.setItem('usuario',JSON.stringify(sesion));
        //el localStore solo soporta guardar una cadena de texto Por eso se convierte el objeto sesion a cadena de texto con JSON.stringify
        dispatch(action);
    }
    const cerrarSesion = ()=>{
        const action = {
            type: type.logout,
            payload:null
        }
        localStorage.removeItem('usuario');
        dispatch(action);
    }

  return (
    <Contexto.Provider value={{...logeado,login,cerrarSesion}}>
        {children}
    </Contexto.Provider>
  )
}

export default Provider
//este archivo se encarga de crear el provider que se va a utilizar en toda la aplicación.
//también se encarga de definir las variables de estado globales y las funciones que modifican el estado global.