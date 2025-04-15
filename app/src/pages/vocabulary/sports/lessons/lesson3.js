import React from "react";
import { EstructuraCuestionario } from "hooks/setUpQuizzes/questionnaireStructure.js";
import { preguntasIniciales } from "../wordsSports/l3.js";

const tituloLeccion = "Lección 3: Sports";
const linkSiguiente = "/vocabulary/sports/leccion-3-p2";



function Leccion3Sports() {
  return (
    <EstructuraCuestionario
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3Sports;
