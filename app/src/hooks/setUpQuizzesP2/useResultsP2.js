import { useState } from "react";

export function useResultados(
  preguntas,
  setPreguntas,
  barajarArray,
  setRespuestasUsuario
) {
  const [resultados, setResultados] = useState(null);
  const [puntajeTotal, setPuntajeTotal] = useState(0);

  const normalizarTexto = (texto) =>
    texto
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .trim();

  const manejarEnvio = (respuestasUsuario) => {
    const preguntaSinResponder = preguntas.find(
      (pregunta) => !respuestasUsuario[`pregunta${pregunta.id}`]
    );

    if (preguntaSinResponder) {
      setTimeout(() => {
        const preguntaElement = document.querySelector(
          `#pregunta-${preguntaSinResponder.id}`
        );
        if (preguntaElement) {
          preguntaElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 100);
      return;
    }

    const calificarRespuestas = (respuestaUsuario, respuestasCorrectas) => {
      const respuestasUsuario = respuestaUsuario
        .split(/[/,]/)
        .map((respuesta) => normalizarTexto(respuesta))
        .sort();

      const respuestasCorrectasNormalizadas = respuestasCorrectas[0]
        .split(/[/,]/)
        .map((respuesta) => normalizarTexto(respuesta))
        .sort();

      return (
        respuestasUsuario.length === respuestasCorrectasNormalizadas.length &&
        respuestasUsuario.every(
          (respuesta, index) =>
            respuesta === respuestasCorrectasNormalizadas[index]
        )
      );
    };

    const resultadosCalificados = preguntas.map((pregunta) => ({
      ...pregunta,
      correcto: calificarRespuestas(
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
        resultadosElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
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
        }))
      )
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return { resultados, puntajeTotal, manejarEnvio, manejarRepetirCuestionario };
}
