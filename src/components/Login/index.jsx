import React, { Component } from 'react'
import styles from './login.css'

class Login extends Component{
    render(){
        return(
            <div className={styles.root}>
                <p className={styles.text}>Necesitamos que inicies sesión con tu cuenta de Github para poder leer y scribir mensajes</p>
                <button
                    onClick={this.props.onAuth}
                    className={styles.button}
                >
                    <span className="fa fa-github"></span> Login con Github
                </button>

            </div>
        )
    }
}

export default Login