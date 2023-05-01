import { AUTHOR } from "../../components/Author/AUTHOR";
import { database } from "../../services/firebase";

export const SET_MESSAGES = "MESSAGES::SET_MESSAGES";

export const addMessage = (chatId, text, author) => async () => {
  setTimeout(() => {
    database.ref("messages").push({
      chatId,
      text: "Я-робот",
      author: AUTHOR.BOT,
    });
  }, 1000);

  database.ref("messages").push({
    chatId,
    text,
    author,
  });
};

export const deleteMessage = (chatId, id) => () => {
  database.ref("messages").child(id).remove();
};

export const getMessageFromFirebase = () => async (dispatch) => {
  let messages = {};

  database.ref("messages").on("value", (snapshot) => {
    snapshot.forEach((item) => {
      const message = item.val();
      if (!Array.isArray(messages?.[message.chatId])) {
        messages[message.chatId] = [];
      }
      messages[message.chatId].push({
        ...message,
        id: item.key,
      });
    });

    dispatch({
      type: SET_MESSAGES,
      payload: messages,
    });

    messages = {};
  });
};
