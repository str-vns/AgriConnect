import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

const Conversation = ({ conversation, currentUser, onlineUsers }) => {
  const [friend, setFriend] = useState(null);
  const [isOnline, setIsOnline] = useState(false);

  console.log(onlineUsers)
  const imagine = "/images/Loogo.png";

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios(`http://localhost:4000/api/v1/user/${friendId}`);
        setFriend(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  useEffect(() => {
    console.log("Friend User ID:", friend?.user?._id);
    console.log("Online Users:", onlineUsers);
    
   
    if (friend && onlineUsers.some(user => user.userId === friend.user._id && user.isOnline)) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  }, [friend, onlineUsers]);

  console.log(isOnline)
  return (
    <div className="conversation border border-gray rounded-2xl relative">
      {friend && (
        <>
          <img
            className="conversationImg"
            src={friend.user?.avatar.url || imagine}
            alt=""
          />
          <div
            className="statusIndicator"
            style={{ backgroundColor: isOnline ? "green" : "red" }}
          ></div>
          <span className="conversationName">{friend.user?.name}</span>
        </>
      )}
    </div>
  );
};

export default Conversation;