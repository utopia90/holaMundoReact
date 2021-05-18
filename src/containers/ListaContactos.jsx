/* eslint-disable no-undef */
import PropTypes from 'prop-types'



const ListaContactos = ({contactos, addNewElement}) => {


    return (
        <div>
            {contactos.map((contacto, index) => {
                return (
                    <div key={index}>
                      <h1>{contacto.nombre}</h1> 
                      <h1>{contacto.email}</h1>  
                    </div>
                )
            })}
           
        </div>
    )
}

ListaContactos.propTypes = {
    // eslint-disable-next-line no-undef
    contactos: PropTypes.arrayOf(PropTypes.shape(
        {
            nombre: PropTypes.string,
            email:PropTypes.string
        }
    )),

    addNewElement: PropTypes.arrayOf(PropTypes.shape(
        {
            nombre: PropTypes.string,
            email:PropTypes.string
        }
    ))}

export default ListaContactos