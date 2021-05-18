import logo from './logo.svg';
import './App.css';
import SaludoF from './components/SaludoF';
import ListaContactos from './containers/ListaContactos.jsx'
import Contacto from './models/Contacto';
import HolaMundo from './components/HolaMundo';
import MousseColor from './components/MousseColor';
import WeatherComponent from './components/WeatherComponent';




function App() {
  const contacto1 = new Contacto(
    'Martín', 'martin@imagina.com')
  const contacto2 = new Contacto('Sara', 'sara@imagina.com')
  const contacto3 = new Contacto('Joaquin', 'joaquin@imagina.com')




  let misContactos = [contacto1, contacto2]
  let nombre = "sara";

  let addNewElement = () => {
  misContactos.push(contacto3)
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* aqui vamos a renderizar nuestro primer comoponente */}
        {/* <Saludo nombre="Sara"></Saludo> */}
        {/* <SaludoF nombre="Sarita"></SaludoF> */}
        {/* <ListaContactos addNewElement = {addNewElement()} contactos = {misContactos} /> */}
         {/* <HolaMundo></HolaMundo> */}
         {/* <MousseColor></MousseColor> */}
         <WeatherComponent></WeatherComponent>
      </header>
    </div>
  );
}

export default App;
