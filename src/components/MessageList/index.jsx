import React, { Component } from 'react'
import Message from '../Message'
class MessageList extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <diV>
                {this.props.messages.map(msg =>{
                    return (
                        <Message
                            key = {msg.id}
                            text = {msg.text}
                            picture = {msg.picture}
                            displayName = {msg.displayName}
                            userName = {msg.userName}
                            date = {msg.date}
                            numRetweets = {msg.retweets}
                            numFamorites = {msg.favorites}
                        />
                    )
                }).reverse()}
            </diV>
        )
    }
}

export default MessageList