import { useState } from "react";

export function useRespuestas() {
  const [respuestasUsuario, setRespuestasUsuario] = useState({});

  const manejarCambioRadio = (preguntaId, opcion) => {
    setRespuestasUsuario((prevState) => ({
      ...prevState,
      [`pregunta${preguntaId}`]: [opcion],
    }));
  };

  

  return {
    respuestasUsuario,
    manejarCambioRadio,
    setRespuestasUsuario,
  };
}
