import React, { Component } from 'react'
import  { HashRouter, Match } from 'react-router'
import firebase from 'firebase'

import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'

class App extends Component{

    constructor(){
        super()
        // this.state = {
        //     user:null
        // }

        // this.state = {
        //     user:{
        //         photoUrl: 'https://instagram.fmad3-1.fna.fbcdn.net/t51.2885-19/11249598_872248576145395_820801853_a.jpg',
        //         email: 'danimartin15@gmail.com',
        //         displayName: 'Dani',
        //     location: 'Barcelona'
        //     }
        // }

        this.state = {
            user:null
        }

        this.handleOnAuth = this.handleOnAuth.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    componentWillMount(){
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.setState({user}) // como clave y valor es el mismo podemos obviarlo y no poner {user:user})
            }else{
                this.setState({user:null})
            }
        })
    }

    handleOnAuth(){
        const provider = new firebase.auth.GithubAuthProvider()

        firebase.auth().signInWithPopup(provider)
            .then(result => console.log(`${result.user.email} ha iniciado sesion`))
            .catch(error => console.log(`Error: ${error.code}: ${error.message}`))
    }

    handleLogout(){
        firebase.auth().signOut()
            .then(() => console.log('Te has desconectado correctamente'))
            .catch(() => console.error('Un error ocurrió'))
    }

    render(){
        return(
            <HashRouter>
                <div>

                    <Header />

                    <Match exactly pattern='/' render={() =>{
                        if (this.state.user){
                            return <Main
                                user={this.state.user}
                                onLogout={this.handleLogout}
                            />
                        }else{
                            return(
                                <Login
                                    onAuth={this.handleOnAuth}
                                />
                            )
                        }
                    }} />

                    <Match pattern='/profile' render={() =>{
                        return(
                             <Profile
                                picture={this.state.user.photoUrl}
                                username={this.state.user.email.split('@')[0]}
                                displayName={this.state.user.displayName}
                                location={this.state.user.location}
                                emailAddress = {this.state.user.email}
                             />
                        )
                    }}/>

                    <Match pattern='/user/:username' render={({params}) =>{
                        return(
                             <Profile
                                displayName={params.username}
                                username={params.username}
                             />
                        )
                    }}/>
                </div>
            </HashRouter>
        )
    }
}

export default App