import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsSports/l2.js";

const tituloLeccion = "Lección 2: Sports";
const linkSiguiente = "/vocabulary/sports/leccion-2-p2";



function Leccion2Sports() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion2Sports;
