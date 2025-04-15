import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsSports/l1.js";

const tituloLeccion = "Lección 1: Sports";
const linkSiguiente = "/vocabulary/sports/leccion-1-p2";



function Leccion1Sports() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion1Sports;
