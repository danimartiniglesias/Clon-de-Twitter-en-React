import React, { PropTypes, Component } from 'react'
import Message from '../Message'

const propTypes={
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRetweet: PropTypes.func.isRequired,
    onFavorite: PropTypes.func.isRequired,
    onReplyTweet: PropTypes.func.isRequired
}

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
                            onRetweet = {() => this.props.onRetweet(msg.id)}
                            onFavorite = {() => this.props.onFavorite(msg.id)}
                            onReplyTweet = {() => this.props.onReplyTweet(msg.id, msg.userName)}
                        />
                    )
                }).reverse()}
            </diV>
        )
    }
}

MessageList.propTypes = propTypes

export default MessageList