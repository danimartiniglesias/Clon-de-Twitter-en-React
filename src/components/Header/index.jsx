import React from 'react'
import styles from './header.css'

// class Header extends Component{
//     render(){
//         return(
//             <header className={styles.root}>
//                 <h1 className={styles.logo}>Reacttr</h1>
//             </header>
//         )
//     }
// }
// Como es un componente representacional o sin estado(Stateless) no es necesario importar { Component } y podemos hacer una funcion que devuelva un JSX sin utilizar React y usando solo JSX
function Header (){
    return(
        <header className={styles.root}>
            <h1 className={styles.logo}>Reacttr</h1>
        </header>
    )
}

export default Header