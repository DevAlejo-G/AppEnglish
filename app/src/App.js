import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

import Home from 'pages/home/home';

import Verbs from 'pages/verbs/verbs';
import Regular from 'pages/verbs/regular/regular';
import RegularRoutes from 'routes/verbs/regular';
import Irregular from 'pages/verbs/irregular/irregular';
import IrregularRoutes from 'routes/verbs/irregular';


import Vocabulary from 'pages/vocabulary/vocabulary';
import Colors from 'pages/vocabulary/colors/colors';
import ColorsRoutes from 'routes/vocabulary/colors';
import Professions from 'pages/vocabulary/professions/professions';
import ProfessionsRoutes from 'routes/vocabulary/professions';
import HumanBody from 'pages/vocabulary/humanBody/humanBody';
import HumanBodyRoutes from 'routes/vocabulary/humanBody';
import Animals from 'pages/vocabulary/animals/animals';
import AnimalsRoutes from 'routes/vocabulary/animals';
import Sports from 'pages/vocabulary/sports/sports';
import SportsRoutes from 'routes/vocabulary/sports';
import Technology from 'pages/vocabulary/technology/technology';
import TechnologyRoutes from 'routes/vocabulary/technology';


import EnglishPlus300 from 'pages/language/english+300';
import EnglishPlus300Routes from 'routes/languages/english+300';


import DevGlossary from 'pages/devGlossary/devGlossary';
import NodeJs from 'pages/devGlossary/node.js/nodeJs';
import NodeJsRoutes from 'routes/devGlossary/nodeJs';

import Terminology from 'pages/devGlossary/devTerminology/terminology';
import TerminologyRoutes from 'routes/devGlossary/terminology';




import NotFound from 'pages/home/notFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/verbs" element={<Verbs />} />
              <Route path="/verbs/regular" element={<Regular />} />
              <Route path="verb-regular/*" element={<RegularRoutes />} />
              <Route path="/verbs/irregular" element={<Irregular />} />
              <Route path="/verb-irregular/*" element={<IrregularRoutes />} />


              <Route path="/vocabulary" element={<Vocabulary />} />
              <Route path="/vocabulary/colors" element={<Colors />} />
              <Route path="/vocabulary/colors/*" element={<ColorsRoutes />} />
              <Route path='/vocabulary/professions' element={<Professions />} />
              <Route path='/vocabulary/professions/*' element={<ProfessionsRoutes />} />
              <Route path='/vocabulary/humanBody' element={<HumanBody />} />
              <Route path='/vocabulary/humanBody/*' element={<HumanBodyRoutes />} />
              <Route path='/vocabulary/technology' element={<Technology />} />
              <Route path='/vocabulary/technology/*' element={<TechnologyRoutes />} />
              <Route path='/vocabulary/sports' element={<Sports />} />
              <Route path='/vocabulary/sports/*' element={<SportsRoutes />} />
              <Route path='/vocabulary/animals' element={<Animals />} />
              <Route path='/vocabulary/animals/*' element={<AnimalsRoutes />} />


              <Route path="/english+300" element={<EnglishPlus300 />} />
              <Route path="/english+300/*" element={<EnglishPlus300Routes />} />

              <Route path='/dev-glossary' element={<DevGlossary />} />
              <Route path="/dev-glossary/node.js" element={<NodeJs />} />
              <Route path="/dev-glossary/node.js/*" element={<NodeJsRoutes />} />

              <Route path="/dev-glossary/terminology" element={<Terminology />} />
              <Route path="/dev-glossary/terminology/*" element={<TerminologyRoutes />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
