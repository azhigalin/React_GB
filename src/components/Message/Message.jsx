import React from 'react';
import './Message.css'
import {AUTHOR} from '../Author/AUTHOR'
import {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {deleteMessage} from '../../store/messages/actions'


export const Message = ({message}) => {

const {chatId} = useParams()
const dispatch = useDispatch()

const handleDeleteMessage = useCallback((id) => {
dispatch(deleteMessage(chatId, id))
}, [dispatch, chatId])

  return (
    <div className="message_li">
      <div className="MessageData">
        {message.author === AUTHOR.HUMAN ? AUTHOR.HUMAN : AUTHOR.BOT}
      </div>
      <div className="MessageText">{message.text}</div>
      {message.author !== AUTHOR.HUMAN}
      <button 
      className={`DeleteBtn ${
      message.author === AUTHOR.HUMAN ? 'SendTxt' : 'RepliesTxt'}`} 
      onClick={() => handleDeleteMessage(message.id)}>
        удалить</button>
    </div>
)
}