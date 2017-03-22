import React, { Component } from 'react'
import  { HashRouter, Match } from 'react-router'

import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'

class App extends Component{

    constructor(){
        super()
        this.state = {
            user:null
        }

        // this.state = {
        // {
        //     photoUrl: 'https://instagram.fmad3-1.fna.fbcdn.net/t51.2885-19/11249598_872248576145395_820801853_a.jpg',
        //         email: 'danimartin15@gmail.com',
        //     displayName: 'Dani',
        //     location: 'Barcelona'
        // }

        this.handleOnAuth = this.handleOnAuth.bind(this)
    }

    handleOnAuth(){
        console.log('onAuth')
    }

    render(){
        return(
            <HashRouter>
                <div>

                    <Header />

                    <Match exactly pattern='/' render={() =>{
                        if (this.state.user){
                            return <Main user={this.state.user} />
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