import React, { Component } from 'react'

import Header from '../Header'
import Main from '../Main'

class App extends Component{

    constructor(){
        super()
        this.state = {
            user:{
                photoUrl: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-1/p60x60/14291697_10154155646589355_886654990813942677_n.jpg?oh=d7a3d9ffbc1dbbed0b71924d9ebc52b6&oe=5941576A',
                email: 'danimartin15@gmail.com',
                displayName: 'Dani'
            }
        }
    }

    render(){
        return(
            <div>
                <Header />
                <Main user={this.state.user}/>
            </div>
        )
    }
}

export default App