import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsSports/l2.js";

const tituloLeccion = "Lección 2 P3: Sports";
const linkSiguiente = "/vocabulary/sports/leccion-3";



function Leccion2SportsP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion2SportsP3;
