import { useState, useEffect } from "react";

export function usePreguntas(preguntasIniciales) {
  const [preguntas, setPreguntas] = useState([]);

  const barajarArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const preguntasBarajadas = barajarArray(
      preguntasIniciales.map((pregunta, index) => ({
        ...pregunta,
        indiceOriginal: index + 1,
      }))
    );
    setPreguntas(preguntasBarajadas);

    const manejarAntesDeDesactivar = (event) => {
      const message =
        "Si actualizas la página se borrarán las respuestas seleccionadas. ¿Estás seguro?";
      event.preventDefault();
      event.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", manejarAntesDeDesactivar);
    return () => {
      window.removeEventListener("beforeunload", manejarAntesDeDesactivar);
    };
  }, [preguntasIniciales]);

  return { preguntas, setPreguntas, barajarArray };
}
