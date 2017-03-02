import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'
class Main extends Component{
    constructor(){
        super()
        this.state = {
            openText: false,
            messages: [
                {
                    id: uuid.v4(),
                    text: 'Mensaje de prueba ',
                    picture: 'https://d13yacurqjgara.cloudfront.net/users/31260/screenshots/765813/attachments/75674/twitter-icon.png',
                    displayName: 'Dani',
                    userName: 'morpheo_neo',
                    date: Date.now()- 180000,
                    favorites: 0,
                    retweets: 0
                },
                {
                    id: uuid.v4(),
                    text: 'Este es otro mensaje de prueba ',
                    picture: 'https://d13yacurqjgara.cloudfront.net/users/31260/screenshots/765813/attachments/75674/twitter-icon.png',
                    displayName: 'Dani',
                      userName: 'morpheo_neo',
                    date: Date.now() - 180000,
                    favorites: 0,
                    retweets: 0
                }
            ]
        }
    }

    handleSendText(event){
        event.preventDefault()

        let newMessage = {
            id : uuid.v4(),
            username : this.props.user.email.split('@')[0],
            displayName: this.props.user.displayName,
            picture: this.props.user.photoUrl,
            date: Date.now(),
            text: event.target.text.value
        }

        this.setState({
            messages : this.state.messages.concat(newMessage),
            openText: false
        })
    }

    handleCloseText(event){
        event.preventDefault()
        this.setState({openText: false})
    }


    handleOpenText(event){
        event.preventDefault()
        this.setState({openText: true})
    }

    renderOpenText(){
        if(this.state.openText){
            return(
                <InputText
                    onSendText={this.handleSendText.bind(this)}
                    onCloseText={this.handleCloseText.bind(this)}
                />
            )
        }
    }

    render(){
        return(
            <div>
                <ProfileBar
                    picture={this.props.user.photoUrl}
                    userName={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText.bind(this)}
                />
                {this.renderOpenText()}
                <MessageList messages={this.state.messages} />
            </div>
        )
    }
}

export default Main