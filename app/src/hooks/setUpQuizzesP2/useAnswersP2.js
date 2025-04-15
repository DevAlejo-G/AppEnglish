import { useState } from "react";

export function useRespuestas() {
  const [respuestasUsuario, setRespuestasUsuario] = useState({});

  const manejarCambioTexto = (preguntaId, texto) => {
    setRespuestasUsuario((prevState) => ({
      ...prevState,
      [`pregunta${preguntaId}`]: texto,
    }));
  };

  return {
    respuestasUsuario,
    manejarCambioTexto,
    setRespuestasUsuario,
  };
}
