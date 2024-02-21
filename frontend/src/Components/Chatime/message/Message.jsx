import React, { useState, useEffect } from 'react';
import { format } from 'timeago.js';
import axios from 'axios';
import './message.css';

const Message = ({ message, own, conversation, currentUser }) => {
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const friendId = conversation.members.find((m) => m !== currentUser._id);
        const res = await axios(`http://localhost:4000/api/v1/user/${friendId}`);
        setFriend(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <img className="messageImg" src={own ?  currentUser.avatar.url : (friend ? friend.user.avatar.url : '') } alt="" />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
};

export default Message;