import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'
class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: Object.assign({},this.props.user,{retweets:[],favorites:[]}),
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

        this.handleSendText = this.handleSendText.bind(this)
        this.handleCloseText = this.handleCloseText.bind(this)
        this.handleOpenText = this.handleOpenText.bind(this)
        this.handleRetweet = this.handleRetweet.bind(this)
        this.handleFavorite = this.handleFavorite.bind(this)
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

    handleRetweet(msgId){
        let alreadyReteewted = this.state.user.retweets.filter(rt => rt == msgId)

        if (alreadyReteewted.length == 0){
            let messages = this.state.messages.map(msg =>{
                if (msg.id == msgId){
                    msg.retweets++
                }
                return msg
            })
            let user = Object.assign({}, this.state.user)
            user.retweets.push(msgId)

            this.setState({
                messages: messages,
                user: user
            })
        }


    }

    handleFavorite(msgId){
        let alreadyFavorited = this.state.user.favorites.filter(fav => fav === msgId)

        if (alreadyFavorited.length == 0){
            let messages = this.state.messages.map(msg =>{
                if(msg.id == msgId){
                    msg.favorites ++
                }
                return msg
            })
            let user = Object.assign({}, this.state.user)

            user.favorites.push(msgId)

            this.setState({
                messages,
                user
            })
        }

    }

    renderOpenText(){
        if(this.state.openText){
            return(
                <InputText
                    onSendText={this.handleSendText}
                    onCloseText={this.handleCloseText}
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
                    onOpenText={this.handleOpenText}
                />
                {this.renderOpenText()}
                <MessageList
                    messages={this.state.messages}
                    onRetweet = {this.handleRetweet}
                    onFavorite = {this.handleFavorite}
                />
            </div>
        )
    }
}

export default Main