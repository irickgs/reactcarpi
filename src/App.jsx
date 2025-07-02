import './components/Usuario/Usuario.css';
import Usuario from './components/Usuario/Usuario.jsx';
import Suma from './components/Suma/Suma.jsx';
import Texto from './components/Texto/Texto.jsx';


function App() {
  
  

  return (
    <div className="App">
      <Texto/>
      <Usuario nombre="Ricardo" edad={46} nacionalidad="Argentino" />
      <Usuario nombre="Machela, que mira bobo" edad={36} nacionalidad="Argentina" />
      <Usuario nombre="Kira" edad={4} nacionalidad="China" />
      <Suma/>
      
    </div>
  );
}



export default App;
