import React, { Component } from 'react'

import PropTypes from 'prop-types'

class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "sara@ingenia.es",
            edad:20,
            fecha: new Date()
        }

    }

    // componentDidMount = () => {
    //         this.timerId = setInterval(() => {
    //             this.tick(),1000
    //         })
    // }

    componentWillUnmount = () => {
        clearInterval(this.timerId)
    }

    tick = () => {
        this.setState((prevState) => {
            let edad = prevState.edad + 1;

            return {
                ...prevState,
                edad,
                fecha: new Date()
            }
        })
    }

    // aumentarValor = () => {
    //     this.setState({
    //         edad: 21
    //     })
    // }

    render() {
        return (
            <div>
                <h1>
                    hola {this.props.nombre}!
                </h1>
                <h2>
                    Hora actual: {this.state.fecha.toLocaleDateString}
                </h2>
                <h3> TIenes {this.state.edad} años</h3>
                <button onClick={this.aumentarValor}>Aumentar valor</button>

            </div>
        )
    }
}

componentName.propTypes = {
    nombre: PropTypes.string.isRequired
}

export default componentName
