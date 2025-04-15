import React from "react";
import { Routes, Route } from "react-router-dom";

import Leccion1Professions from "pages/vocabulary/professions/lessons/lesson1";
import Leccion2Professions from "pages/vocabulary/professions/lessons/lesson2";
import Leccion3Professions from "pages/vocabulary/professions/lessons/lesson3";
import Leccion4Professions from "pages/vocabulary/professions/lessons/lesson4";
import Leccion5Professions from "pages/vocabulary/professions/lessons/lesson5";
import Leccion6Professions from "pages/vocabulary/professions/lessons/lesson6";
import Leccion7Professions from "pages/vocabulary/professions/lessons/lesson7";
import Leccion8Professions from "pages/vocabulary/professions/lessons/lesson8";
import Leccion9Professions from "pages/vocabulary/professions/lessons/lesson9";
import Leccion10Professions from "pages/vocabulary/professions/lessons/lesson10";
import Leccion11Professions from "pages/vocabulary/professions/lessons/lesson11";
import Leccion12Professions from "pages/vocabulary/professions/lessons/lesson12";
import Leccion13Professions from "pages/vocabulary/professions/lessons/lesson13";

import Leccion1ProfessionsP2 from "pages/vocabulary/professions/lessonsP2/lesson1P2";
import Leccion2ProfessionsP2 from "pages/vocabulary/professions/lessonsP2/lesson2P2";
import Leccion3ProfessionsP2 from "pages/vocabulary/professions/lessonsP2/lesson3P2";
import Leccion4ProfessionsP2 from "pages/vocabulary/professions/lessonsP2/lesson4P2";
import Leccion5ProfessionsP2 from "pages/vocabulary/professions/lessonsP2/lesson5P2";
import Leccion6ProfessionsP2 from "pages/vocabulary/professions/lessonsP2/lesson6P2";
import Leccion7ProfessionsP2 from "pages/vocabulary/professions/lessonsP2/lesson7P2";
import Leccion8ProfessionsP2 from "pages/vocabulary/professions/lessonsP2/lesson8P2";
import Leccion9ProfessionsP2 from "pages/vocabulary/professions/lessonsP2/lesson9P2";
import Leccion10ProfessionsP2 from "pages/vocabulary/professions/lessonsP2/lesson10P2";
import Leccion11ProfessionsP2 from "pages/vocabulary/professions/lessonsP2/lesson11P2";
import Leccion12ProfessionsP2 from "pages/vocabulary/professions/lessonsP2/lesson12P2";
import Leccion13ProfessionsP2 from "pages/vocabulary/professions/lessonsP2/lesson13P2";

import Leccion1ProfessionsP3 from "pages/vocabulary/professions/lessonsP3/lesson1P3";
import Leccion2ProfessionsP3 from "pages/vocabulary/professions/lessonsP3/lesson2P3";
import Leccion3ProfessionsP3 from "pages/vocabulary/professions/lessonsP3/lesson3P3";
import Leccion4ProfessionsP3 from "pages/vocabulary/professions/lessonsP3/lesson4P3";
import Leccion5ProfessionsP3 from "pages/vocabulary/professions/lessonsP3/lesson5P3";
import Leccion6ProfessionsP3 from "pages/vocabulary/professions/lessonsP3/lesson6P3";
import Leccion7ProfessionsP3 from "pages/vocabulary/professions/lessonsP3/lesson7P3";
import Leccion8ProfessionsP3 from "pages/vocabulary/professions/lessonsP3/lesson8P3";
import Leccion9ProfessionsP3 from "pages/vocabulary/professions/lessonsP3/lesson9P3";
import Leccion10ProfessionsP3 from "pages/vocabulary/professions/lessonsP3/lesson10P3";
import Leccion11ProfessionsP3 from "pages/vocabulary/professions/lessonsP3/lesson11P3";
import Leccion12ProfessionsP3 from "pages/vocabulary/professions/lessonsP3/lesson12P3";
import Leccion13ProfessionsP3 from "pages/vocabulary/professions/lessonsP3/lesson13P3";

import PracticeProfessions from "pages/vocabulary/professions/practice";

import NotFound from "pages/home/notFound";

const ProfessionsRoutes = () => {
  return (
    <Routes>
      <Route path="leccion-1" element={<Leccion1Professions />} />
      <Route path="leccion-2" element={<Leccion2Professions />} />
      <Route path="leccion-3" element={<Leccion3Professions />} />
      <Route path="leccion-4" element={<Leccion4Professions />} />
      <Route path="leccion-5" element={<Leccion5Professions />} />
      <Route path="leccion-6" element={<Leccion6Professions />} />
      <Route path="leccion-7" element={<Leccion7Professions />} />
      <Route path="leccion-8" element={<Leccion8Professions />} />
      <Route path="leccion-9" element={<Leccion9Professions />} />
      <Route path="leccion-10" element={<Leccion10Professions />} />
      <Route path="leccion-11" element={<Leccion11Professions />} />
      <Route path="leccion-12" element={<Leccion12Professions />} />
      <Route path="leccion-13" element={<Leccion13Professions />} />

      <Route path="leccion-1-p2" element={<Leccion1ProfessionsP2 />} />
      <Route path="leccion-2-p2" element={<Leccion2ProfessionsP2 />} />
      <Route path="leccion-3-p2" element={<Leccion3ProfessionsP2 />} />
      <Route path="leccion-4-p2" element={<Leccion4ProfessionsP2 />} />
      <Route path="leccion-5-p2" element={<Leccion5ProfessionsP2 />} />
      <Route path="leccion-6-p2" element={<Leccion6ProfessionsP2 />} />
      <Route path="leccion-7-p2" element={<Leccion7ProfessionsP2 />} />
      <Route path="leccion-8-p2" element={<Leccion8ProfessionsP2 />} />
      <Route path="leccion-9-p2" element={<Leccion9ProfessionsP2 />} />
      <Route path="leccion-10-p2" element={<Leccion10ProfessionsP2 />} />
      <Route path="leccion-11-p2" element={<Leccion11ProfessionsP2 />} />
      <Route path="leccion-12-p2" element={<Leccion12ProfessionsP2 />} />
      <Route path="leccion-13-p2" element={<Leccion13ProfessionsP2 />} />

      <Route path="leccion-1-p3" element={<Leccion1ProfessionsP3 />} />
      <Route path="leccion-2-p3" element={<Leccion2ProfessionsP3 />} />
      <Route path="leccion-3-p3" element={<Leccion3ProfessionsP3 />} />
      <Route path="leccion-4-p3" element={<Leccion4ProfessionsP3 />} />
      <Route path="leccion-5-p3" element={<Leccion5ProfessionsP3 />} />
      <Route path="leccion-6-p3" element={<Leccion6ProfessionsP3 />} />
      <Route path="leccion-7-p3" element={<Leccion7ProfessionsP3 />} />
      <Route path="leccion-8-p3" element={<Leccion8ProfessionsP3 />} />
      <Route path="leccion-9-p3" element={<Leccion9ProfessionsP3 />} />
      <Route path="leccion-10-p3" element={<Leccion10ProfessionsP3 />} />
      <Route path="leccion-11-p3" element={<Leccion11ProfessionsP3 />} />
      <Route path="leccion-12-p3" element={<Leccion12ProfessionsP3 />} />
      <Route path="leccion-13-p3" element={<Leccion13ProfessionsP3 />} />

      <Route path="leccion-practica" element={<PracticeProfessions />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ProfessionsRoutes;
