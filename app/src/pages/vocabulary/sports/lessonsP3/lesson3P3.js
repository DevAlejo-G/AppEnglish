import React from "react";
import { EstructuraCuestionarioP3 } from "hooks/setUpQuizzesP3/questionnaireStructureP3.js";
import { preguntasIniciales } from "../wordsSports/l3.js";

const tituloLeccion = "Lección 3 P3: Sports";
const linkSiguiente = "/vocabulary/sports/leccion-4";



function Leccion3SportsP3() {
  return (
    <EstructuraCuestionarioP3
      tituloLeccion={tituloLeccion}
      linkSiguiente={linkSiguiente}
      preguntasIniciales={preguntasIniciales}
    />
  );
}

export default Leccion3SportsP3;
