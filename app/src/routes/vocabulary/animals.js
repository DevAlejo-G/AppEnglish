import React from "react";
import { Routes, Route } from "react-router-dom";

import Leccion1Animals from "pages/vocabulary/animals/lessons/lesson1";
import Leccion2Animals from "pages/vocabulary/animals/lessons/lesson2";
import Leccion3Animals from "pages/vocabulary/animals/lessons/lesson3";
import Leccion4Animals from "pages/vocabulary/animals/lessons/lesson4";
import Leccion5Animals from "pages/vocabulary/animals/lessons/lesson5";
import Leccion6Animals from "pages/vocabulary/animals/lessons/lesson6";
import Leccion7Animals from "pages/vocabulary/animals/lessons/lesson7";
import Leccion8Animals from "pages/vocabulary/animals/lessons/lesson8";

import Leccion1AnimalsP2 from "pages/vocabulary/animals/lessonsP2/lesson1P2";
import Leccion2AnimalsP2 from "pages/vocabulary/animals/lessonsP2/lesson2P2";
import Leccion3AnimalsP2 from "pages/vocabulary/animals/lessonsP2/lesson3P2";
import Leccion4AnimalsP2 from "pages/vocabulary/animals/lessonsP2/lesson4P2";
import Leccion5AnimalsP2 from "pages/vocabulary/animals/lessonsP2/lesson5P2";
import Leccion6AnimalsP2 from "pages/vocabulary/animals/lessonsP2/lesson6P2";
import Leccion7AnimalsP2 from "pages/vocabulary/animals/lessonsP2/lesson7P2";
import Leccion8AnimalsP2 from "pages/vocabulary/animals/lessonsP2/lesson8P2";

import Leccion1AnimalsP3 from "pages/vocabulary/animals/lessonsP3/lesson1P3";
import Leccion2AnimalsP3 from "pages/vocabulary/animals/lessonsP3/lesson2P3";
import Leccion3AnimalsP3 from "pages/vocabulary/animals/lessonsP3/lesson3P3";
import Leccion4AnimalsP3 from "pages/vocabulary/animals/lessonsP3/lesson4P3";
import Leccion5AnimalsP3 from "pages/vocabulary/animals/lessonsP3/lesson5P3";
import Leccion6AnimalsP3 from "pages/vocabulary/animals/lessonsP3/lesson6P3";
import Leccion7AnimalsP3 from "pages/vocabulary/animals/lessonsP3/lesson7P3";
import Leccion8AnimalsP3 from "pages/vocabulary/animals/lessonsP3/lesson8P3";

import PracticeAnimals from "pages/vocabulary/animals/practice";

import NotFound from 'pages/home/notFound';


const AnimalsRoutes = () => {
  return (
      <Routes>
        <Route path="leccion-1" element={<Leccion1Animals />} />
        <Route path="leccion-2" element={<Leccion2Animals />} />
        <Route path="leccion-3" element={<Leccion3Animals />} />
        <Route path="leccion-4" element={<Leccion4Animals />} />
        <Route path="leccion-5" element={<Leccion5Animals />} />
        <Route path="leccion-6" element={<Leccion6Animals />} />
        <Route path="leccion-7" element={<Leccion7Animals />} />
        <Route path="leccion-8" element={<Leccion8Animals />} />

        <Route path="leccion-1-p2" element={<Leccion1AnimalsP2 />} />
        <Route path="leccion-2-p2" element={<Leccion2AnimalsP2 />} />
        <Route path="leccion-3-p2" element={<Leccion3AnimalsP2 />} />
        <Route path="leccion-4-p2" element={<Leccion4AnimalsP2 />} />
        <Route path="leccion-5-p2" element={<Leccion5AnimalsP2 />} />
        <Route path="leccion-6-p2" element={<Leccion6AnimalsP2 />} />
        <Route path="leccion-7-p2" element={<Leccion7AnimalsP2 />} />
        <Route path="leccion-8-p2" element={<Leccion8AnimalsP2 />} />

        <Route path="leccion-1-p3" element={<Leccion1AnimalsP3 />} />
        <Route path="leccion-2-p3" element={<Leccion2AnimalsP3 />} />
        <Route path="leccion-3-p3" element={<Leccion3AnimalsP3 />} />
        <Route path="leccion-4-p3" element={<Leccion4AnimalsP3 />} />
        <Route path="leccion-5-p3" element={<Leccion5AnimalsP3 />} />
        <Route path="leccion-6-p3" element={<Leccion6AnimalsP3 />} />
        <Route path="leccion-7-p3" element={<Leccion7AnimalsP3 />} />
        <Route path="leccion-8-p3" element={<Leccion8AnimalsP3 />} />

        <Route path="leccion-practica" element={<PracticeAnimals />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default AnimalsRoutes;
