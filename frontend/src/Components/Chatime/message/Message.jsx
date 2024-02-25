import React, { useState, useEffect } from 'react';
import { format } from 'timeago.js';
import axios from 'axios';
import './message.css';
import ImageModal from './ImageModal';

const Message = ({ message, own, conversation, currentUser }) => {
  const [friend, setFriend] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
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

  const openModal = (index) => {
    setSelectedImageIndex(index); 
  };

  const closeModal = () => {
    setSelectedImageIndex(null); 
  };

  return (
<div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={own ? currentUser.avatar.url : (friend ? friend.user.avatar.url : '')}
          alt=""
        />
        <p className="messageText">
          {message.text}
          <div className='flex'>
          {message.images && message.images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              className="cursor-pointer object-cover transition duration-500 p-1 h-[60px] w-[60px]"
              onClick={() => openModal(index)}
              alt={`Image ${index + 1}`}
            />
          ))}
          </div>
        </p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>

      {selectedImageIndex !== null && (
        <ImageModal image={message.images[selectedImageIndex]} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Message;