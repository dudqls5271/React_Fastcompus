import logo from './logo.svg';
import './App.css';
import Composition from './compoments/2-4.Props/Composition';
import Exataction from './compoments/2-4.Props/Exataction/Exataction';
import ClassComposition from './compoments/2-5.State/ClassComposition';
import FunctionalCommponent from './compoments/2-5.State/FunctionalCommponent';

function App() {
  return (
  <div className="App">
      <ClassComposition/>
      <FunctionalCommponent/>
      <Exataction/>
      <Composition />
  </div>
  );
}

export default App;
