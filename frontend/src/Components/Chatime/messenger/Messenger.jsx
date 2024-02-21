import React, { Fragment, useState, useEffect, useRef } from "react";
import { format } from "timeago.js";
import "./messager.css";
import Header from '../../Layout/Header';
import ChatOnline from '../chatOnline/ChatOnline'
import axios from 'axios';
import { getUser, logout, getToken } from '../../../Utilitys/helpers';
import Conversation from "../conversations/Conversation";
import Message from "../message/Message";
import {io} from "socket.io-client"

const Messenger = () => {
  const [user, setUser] = useState({});
  const [conversations, setConversations] = useState([]);
  const [Friendy,setFriendy]=useState([])
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arriveMessage, setArriveMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const scrollRef = useRef();
  const socket = useRef();

  useEffect(() =>{
    socket.current = io("ws://localhost:8900")
  
    socket.current.on("getMessage", (data) => {
      setArriveMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    })
  },[]);

  useEffect(() => {
    arriveMessage &&
      currentChat?.members.includes(arriveMessage.sender) &&
      setMessages((prev) => [...prev, arriveMessage]);
  }, [arriveMessage, currentChat]);

  useEffect(() =>
  {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {

      const onlineUsers = users.filter(user => user.isOnline);
      
      setOnlineUsers(onlineUsers);
    });
    
    return () => {
      socket.current.off("getUsers");
    };
  },[user._id]);
console.log(onlineUsers)
  useEffect(() => {
    setUser(getUser());
  }, []);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const config = { headers: { Authorization: `Bearer ${getToken()}` } };
        const res = await axios.get(`http://localhost:4000/api/v1/conversation/${user._id}`, config);
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (user._id) {
      fetchConversations();
    }
  }, [user._id]);

  useEffect(() => {
    const GetConversations = async () => {
      try {
        const config = { headers: { Authorization: `Bearer ${getToken()}` } };
        const res = await axios.get(`http://localhost:4000/api/v1/conversation/${user._id}`, config);
        setFriendy(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (user._id) {
      GetConversations();
    }
  }, [user._id]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        if (currentChat) {
          const res = await axios.get(`http://localhost:4000/api/v1/message/${currentChat._id}`);
          setMessages(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post('http://localhost:4000/api/v1/message', message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section className="flex  bg-white h-screen">
      
    <Header />

 <div className="lg:grid flex overflow-y-scroll flex-grow ">
   
    <div className="messenger">
      <div className="chatMenu border-2 border-black  " >
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput " />
          {conversations.map((c) => (
            <div key={c._id} onClick={() => setCurrentChat(c)}>
              <Conversation conversation={c} currentUser={user}  onlineUsers={onlineUsers}/>
            </div>
          ))}
        </div>
      </div>

      <div className="chatBox  border-y-2 border-black">
        <div className="chatBoxWrapper">
          {currentChat ? (
            <>
              <div className="chatBoxTop ">
                {messages.map((m) => (
                  <div key={m._id} ref={scrollRef} >
                    <Message
                      message={m}
                      own={m.sender === user._id}
                      conversation={currentChat}
                      currentUser={user}
                    />
                  </div>
                ))}
              </div>
            
              <div className="chatBoxBottom border-t-2 ">
                <textarea
                  className="chatMessageInput mt-2  rounded-lg border border-black align-top shadow-sm sm:text-sm"
                  placeholder="write something..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                ></textarea>
                <button className="px-10 mt-3 inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500" onClick={handleSubmit}>
                  Send
                </button>
              </div>
            </>
          ) : (
            <span className="noConversationText ">
              Open a conversation to start a chat.
            </span>
          )}
        </div>
      </div>
     
    </div>
    </div>
      </section>
  );
};

export default Messenger;
