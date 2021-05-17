import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import SaludoF from './components/SaludoF';
import ListaContactos from './containers/ListaContactos.jsx'
import Contacto from './models/Contacto';


function App() {
  const contacto1 = new Contacto(
    'Martín', 'martin@imagina.com')
    const contacto2 = new Contacto('Sara', 'sara@imagina.com')

  let misContactos = [contacto1, contacto2]
  var nombre = "sara";
  return (
    <div className="App">
      <header className="App-header">
        {/* aqui vamos a renderizar nuestro primer comoponente */}
        {/* <Saludo nombre="Sara"></Saludo> */}
        {/* <SaludoF nombre="Sarita"></SaludoF> */}
        <ListaContactos contactos = {misContactos} />

      </header>
    </div>
  );
}

export default App;
