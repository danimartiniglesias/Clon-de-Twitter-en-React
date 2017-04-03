import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import styles from './profile-bar.css'

const propTypes = {
    picture: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    onOpenText: PropTypes.func.isRequired
}

class ProfileBar extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className={styles.root}>
                <Link to='./profile'>
                    <figure>
                        <img className={styles.avatar} src={this.props.picture}/>
                        <span className={styles.username}>Hola @{this.props.userName}!</span>
                        <button onClick={this.props.onOpenText} className={styles.button}>
                            <span className="fa fa-lg fa-edit"></span> Tweet
                        </button>
                        <button onClick={this.props.onLogout} className={styles.button}>
                            <span className="fa fa-lg fa-sign-out"></span> Salir
                        </button>
                    </figure>
                </Link>
            </div>

        )
    }
}

ProfileBar.propTypes = propTypes

export default ProfileBar