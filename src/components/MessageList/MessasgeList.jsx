import React, { useEffect } from "react";
import {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Message} from '../Message/Message'
import {Card} from 'react-bootstrap'
import {selectMessages} from '../../store/messages/selectors'
import {addMessage, getMessageFromFirebase} from '../../store/messages/actions'
import {Form} from '../Form/Form'
import {AUTHOR} from '../Author/AUTHOR'

export const MessageList = ({chatId, chatExists}) => {
const dispatch = useDispatch()
const message = useSelector((state) => selectMessages(state, chatId))

// const sendMessage = useCallback((text, author) => {
// dispatch(addMessage(chatId, text, author))
// }, [chatId, dispatch])

// useEffect(() => {
// 	const currentMessage = message[chatId];
// 	if (
// 		!!chatId &&
// 		currentMessage?.[currentMessage.length - 1]?.author === AUTHOR.HUMAN
// 		) {
// 			const timeout = setTimeout(() => {
// 				sendMessage(
// 					"Я Робот",
// 					AUTHOR.BOT,
// 				)
// 				}, 1500);

// 			return () => {
// 				clearTimeout(timeout);
// 			};
// 	}
// 		}, [message, chatId, sendMessage]);

		const handleAddMessage = useCallback((text) => {
		dispatch(addMessage(chatId, text, AUTHOR.HUMAN))
		}, [dispatch, chatId]);

useEffect(() => {
if (!chatId) return;
dispatch(getMessageFromFirebase(chatId))
}, [chatId])

return(
	<Card className="m-0 p-0">
	{!!chatId && chatExists && (
			<>
					<Card.Header 
					className="ContentProfile d-flex flex-row justify-content-start align-items-center">
							<p className="ContactProfileTxt m-0 p-0">{chatExists.name}</p>
					</Card.Header>
					<Card.Body className="Messages">
							<div className="Scrollable">
							{message.map((message) => (
                <Message key={message.id} message={message} />
              ))}
							</div>
					</Card.Body>
					<Card.Footer>
							<Form onSubmit={handleAddMessage} />
					</Card.Footer>
			</>
	)}
</Card>
	)
}