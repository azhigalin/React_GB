import React from 'react';
import { useParams } from "react-router-dom";
import {useMemo} from 'react';
import {useSelector} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'

import {ChatList} from '../ChatList/ChatListContainer';
import {selectIfChatExists} from '../../store/chats/selectors'
import {MessageList} from '../MessageList/MessasgeList'
import "./Chats.css";
// import { useEffect, useState, useCallback } from "react";
// import {Message} from '../Message/Message';
// import {AUTHOR} from '../Author/AUTHOR';
// import {Form} from '../Form/Form';

// const chatList = [
// 	    {
// 	      id: "chat1",
// 	      name: "Remy Sharp",
// 	      img: "https://mui.com/static/images/avatar/1.jpg",
// 	    },
// 	    {
// 	      id: "chat2",
// 	      name: "Travis Howard",
// 	      img: "https://mui.com/static/images/avatar/2.jpg",
// 	    },
// 	    {
// 	      id: "chat3",
// 	      name: "Cindy Baker",
// 	      img: "https://mui.com/static/images/avatar/3.jpg",
// 	    },
// 	  ];

		// const initMessages = {
		// 	chat1: [
		// 		// { id: "mess-1", text: "First chat", author: AUTHORS.HUMAN },
		// 		// { id: "mess-4", text: "Robot", author: AUTHORS.BOT },
		// 	],
		// 	chat2: [
		// 		// { id: "mess-2", text: "Second chat", author: AUTHORS.HUMAN },
		// 		// { id: 'm-Bot', text: 'Robot', author: AUTHORS.BOT }
		// 	],
		// 	chat3: [
		// 		// { id: "mess-3", text: "Second chat", author: AUTHORS.HUMAN },
		// 		// { id: 'm-Bot', text: 'Robot', author: AUTHORS.BOT }
		// 	],
		// };


export const Chats = () => {
	// const [chats, setChatList] = useState(chatList)
	// const [messageList, setMessageList] = useState(initMessages);
const {chatId} = useParams()
const selectChatExists = useMemo(()=> selectIfChatExists(chatId), [chatId])
const chatExist = useSelector(selectChatExists)
		

			
				// const handleAddChat = useCallback(
				// 	(name) => {
				// 		let id = 0;
				// 		if (chats.length !== 0) {
				// 			id = chats.length + 1;
				// 		}
				// 		setChatList((prevChat) => [
				// 			...prevChat,
				// 			{ id: `chat${prevChat.length + 1}`, name, img: "" },
				// 		]);
				// 		setMessageList((prevMess) => ({
				// 			...prevMess,
				// 			[`chat${id}`]: [],
				// 		}));
				// 	},
				// 	[chats]
				// );


				// const handleDeleteChat = useCallback(
				// 	(id) => {
				// 		const newChat = chats.filter((chat) => chat.id !== id);
				// 		setChatList(newChat);
				// 		const { [id]: tmp, ...rest } = messageList;
				// 		setMessageList(rest);
				// 	},
				// 	[messageList, chats]
				// );
			
				// const getCurrentChat = useCallback(() => {
				// 	return chats.find((chat) => chat.id === chatId);
				// }, [chatId, chats]);
			
				// const MessageList = () => (
				// 	<>
				// 		<div className="header">
				// 			<img className="ImgCurrentChat" src={getCurrentChat().img} alt="" />
				// 			<p className="NameCurrentChat">{getCurrentChat().name}</p>
				// 		</div>
				// 		<div className="Messages">
				// 			<div className="Scrollable">
				// 				{messageList[chatId].map((message) => (
				// 					<Message
				// 						key={message.id}
				// 						message={message}
				// 						imgSrc={getCurrentChat(chatId).img}
				// 					/>
				// 				))}
				// 			</div>
				// 		</div>
				// 		<div>
				// 			<Form onSubmit={handleAddMessage} />
				// 		</div>
				// 	</>
				// );




				return (
					<div className="App m-0 d-flex justify-content-center align-items-center">
						<Container fluid="md" className="Container p-0 m-0">
							<Row className="h-100 m-0 p-0">
								<Col md={4} className="SidePanel m-0 p-0">
									<ChatList />
								</Col>
								<Col md={8} className="Content m-0 p-0">
									<MessageList chatId={chatId} chatExists={chatExist} />
								</Col>
							</Row>
						</Container>
					</div>
				);
}