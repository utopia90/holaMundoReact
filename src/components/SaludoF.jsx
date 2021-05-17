import React, { useState } from "react";
import PropTypes from "prop-types";
import './Saludo.scss'

const loggedStyle = {
  color: "green",
  fontWeight: "bold",
};

const unloggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};

function SaludoF(props) {
  const [edad, setEdad] = useState(20);
  const [logged, setLogged] = useState("logged");

  const listaCompra = ["carne", "pescado", "verduras"];
  const contacto = [{
    1: {
      nombre: "Josefa Fernández",
      teléfono: "838492349",
    },
    2: {
      nombre: "Carlos Pinto",
      teléfono: "4853459343",
    },
    3: {
      nombre: "Sofía Benavente",
      teléfono: "8384283434",
    },
  }];

  const aumentarEdad = () => {
    let nuevaEdad = edad + 1;
    setEdad(nuevaEdad);
  };

  const changeLogged = () => {
    let nuevoLogged = logged == "logged" ? "log out" : "logged";
    setLogged(nuevoLogged);
  };

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      <h1>Hola, {props.nombre}</h1>
      <h3>TIenes {edad} años</h3>
      <ul>
        {listaCompra.map((valor, index) => {
          return <li key={index}>{valor}</li>;
        })}
      </ul>
      <ul>
        {contacto.map((valor, index) => {
          return (
            <li key={index}>
              {valor.nombre}
              {valor.teléfono}
            </li>
          );
        })}
      </ul>
      <h2> {logged} </h2>
      <a>Probando estilos!!!!!</a>
      <button onClick={aumentarEdad}>Aumentar edad</button>
      <button onClick={changeLogged}>Cambiar estado loggin</button>
    </div>
  );
}

SaludoF.propTypes = {
  nombre: PropTypes.string.isRequired,
};

export default SaludoF;
