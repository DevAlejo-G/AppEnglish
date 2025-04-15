import { useState } from "react";

export function useResultados(preguntas, setPreguntas, barajarArray, setRespuestasUsuario) {
  const [resultados, setResultados] = useState(null);
  const [puntajeTotal, setPuntajeTotal] = useState(0);

  const manejarEnvio = (respuestasUsuario) => {
    const preguntaSinResponder = preguntas.find(
      (pregunta) => !respuestasUsuario[`pregunta${pregunta.id}`]
    );

    if (preguntaSinResponder) {
      setTimeout(() => {
        const preguntaElement = document.querySelector(`#pregunta-${preguntaSinResponder.id}`);
        if (preguntaElement) {
          preguntaElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
      return;
    }

    const calificar = (respuestas, correctas) => {
      if (Array.isArray(correctas)) {
        return (
          JSON.stringify(respuestas.sort()) === JSON.stringify(correctas.sort())
        );
      }
      return respuestas[0] === correctas[0];
    };

    const resultadosCalificados = preguntas.map((pregunta) => ({
      ...pregunta,
      correcto: calificar(
        respuestasUsuario[`pregunta${pregunta.id}`],
        pregunta.respuestasCorrectas
      ),
    }));

    const puntaje = resultadosCalificados.reduce(
      (total, pregunta) => total + (pregunta.correcto ? 1 : 0),
      0
    );

    setResultados(resultadosCalificados);
    setPuntajeTotal(puntaje);

    setTimeout(() => {
      const resultadosElement = document.querySelector(".resultados");
      if (resultadosElement) {
        resultadosElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const manejarRepetirCuestionario = () => {
    setResultados(null);
    setPuntajeTotal(0);
    setRespuestasUsuario({});

    setPreguntas((prevPreguntas) =>
      barajarArray(
        prevPreguntas.map((pregunta) => ({
          ...pregunta,
          opciones: barajarArray(pregunta.opciones),
        }))
      )
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return { resultados, puntajeTotal, manejarEnvio, manejarRepetirCuestionario };
}
