import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsSports/l4.js";

const tituloLeccion = "Lección 4: Sports";
const linkSiguiente = "/vocabulary/sports/leccion-4-p2";



function Leccion4Sports() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion4Sports;
