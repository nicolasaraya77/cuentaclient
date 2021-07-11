import { createContext } from "react";
/**
 * Contexto Global de la aplicación (manejo de credenciales de usuario)
 
 */
const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
  setReloadUser: () => null,
});

export default AuthContext;

//contexto global del usuario que se autentica en el sistema
