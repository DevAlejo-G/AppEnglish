import React from "react";
import { Routes, Route } from "react-router-dom";

import Leccion1Technology from "pages/vocabulary/technology/lessons/lesson1";
import Leccion2Technology from "pages/vocabulary/technology/lessons/lesson2";
import Leccion3Technology from "pages/vocabulary/technology/lessons/lesson3";
import Leccion4Technology from "pages/vocabulary/technology/lessons/lesson4";
import Leccion5Technology from "pages/vocabulary/technology/lessons/lesson5";
import Leccion6Technology from "pages/vocabulary/technology/lessons/lesson6";
import Leccion7Technology from "pages/vocabulary/technology/lessons/lesson7";
import Leccion8Technology from "pages/vocabulary/technology/lessons/lesson8";

import Leccion1TechnologyP2 from "pages/vocabulary/technology/lessonsP2/lesson1P2";
import Leccion2TechnologyP2 from "pages/vocabulary/technology/lessonsP2/lesson2P2";
import Leccion3TechnologyP2 from "pages/vocabulary/technology/lessonsP2/lesson3P2";
import Leccion4TechnologyP2 from "pages/vocabulary/technology/lessonsP2/lesson4P2";
import Leccion5TechnologyP2 from "pages/vocabulary/technology/lessonsP2/lesson5P2";
import Leccion6TechnologyP2 from "pages/vocabulary/technology/lessonsP2/lesson6P2";
import Leccion7TechnologyP2 from "pages/vocabulary/technology/lessonsP2/lesson7P2";
import Leccion8TechnologyP2 from "pages/vocabulary/technology/lessonsP2/lesson8P2";

import Leccion1TechnologyP3 from "pages/vocabulary/technology/lessonsP3/lesson1P3";
import Leccion2TechnologyP3 from "pages/vocabulary/technology/lessonsP3/lesson2P3";
import Leccion3TechnologyP3 from "pages/vocabulary/technology/lessonsP3/lesson3P3";
import Leccion4TechnologyP3 from "pages/vocabulary/technology/lessonsP3/lesson4P3";
import Leccion5TechnologyP3 from "pages/vocabulary/technology/lessonsP3/lesson5P3";
import Leccion6TechnologyP3 from "pages/vocabulary/technology/lessonsP3/lesson6P3";
import Leccion7TechnologyP3 from "pages/vocabulary/technology/lessonsP3/lesson7P3";
import Leccion8TechnologyP3 from "pages/vocabulary/technology/lessonsP3/lesson8P3";

import PracticeTechnology from "pages/vocabulary/technology/practice";

import NotFound from 'pages/home/notFound';


const TechnologyRoutes = () => {
  return (
      <Routes>
        <Route path="leccion-1" element={<Leccion1Technology />} />
        <Route path="leccion-2" element={<Leccion2Technology />} />
        <Route path="leccion-3" element={<Leccion3Technology />} />
        <Route path="leccion-4" element={<Leccion4Technology />} />
        <Route path="leccion-5" element={<Leccion5Technology />} />
        <Route path="leccion-6" element={<Leccion6Technology />} />
        <Route path="leccion-7" element={<Leccion7Technology />} />
        <Route path="leccion-8" element={<Leccion8Technology />} />

        <Route path="leccion-1-p2" element={<Leccion1TechnologyP2 />} />
        <Route path="leccion-2-p2" element={<Leccion2TechnologyP2 />} />
        <Route path="leccion-3-p2" element={<Leccion3TechnologyP2 />} />
        <Route path="leccion-4-p2" element={<Leccion4TechnologyP2 />} />
        <Route path="leccion-5-p2" element={<Leccion5TechnologyP2 />} />
        <Route path="leccion-6-p2" element={<Leccion6TechnologyP2 />} />
        <Route path="leccion-7-p2" element={<Leccion7TechnologyP2 />} />
        <Route path="leccion-8-p2" element={<Leccion8TechnologyP2 />} />

        <Route path="leccion-1-p3" element={<Leccion1TechnologyP3 />} />
        <Route path="leccion-2-p3" element={<Leccion2TechnologyP3 />} />
        <Route path="leccion-3-p3" element={<Leccion3TechnologyP3 />} />
        <Route path="leccion-4-p3" element={<Leccion4TechnologyP3 />} />
        <Route path="leccion-5-p3" element={<Leccion5TechnologyP3 />} />
        <Route path="leccion-6-p3" element={<Leccion6TechnologyP3 />} />
        <Route path="leccion-7-p3" element={<Leccion7TechnologyP3 />} />
        <Route path="leccion-8-p3" element={<Leccion8TechnologyP3 />} />

        <Route path="leccion-practica" element={<PracticeTechnology />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default TechnologyRoutes;
