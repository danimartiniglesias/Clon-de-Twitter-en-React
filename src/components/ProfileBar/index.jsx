import React, { Component } from 'react'
import styles from './profile-bar.css'
class ProfileBar extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className={styles.root}>
                <figure>
                    <img className={styles.avatar} src={this.props.picture}/>
                    <span className={styles.username}>Hola @{this.props.userName}!</span>
                    <button onClick={this.props.onOpenText} className={styles.button}>
                        <span className="fa fa-lg fa-edit"></span> Tweet
                    </button>
                </figure>
            </div>

        )
    }
}

export default ProfileBar