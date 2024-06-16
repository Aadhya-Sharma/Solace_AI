import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box, Avatar, Typography, Button, IconButton } from "@mui/material";
import red from "@mui/material/colors/red";
import { useAuth } from "../context/AuthContext";
import ChatItem from "../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { deleteUserChats, getUserChats, sendChatRequest } from "../helpers/api-communicator";
import toast from "react-hot-toast";

type Message = {
  role: "user" | "assistant";
  content : "string";
};

const Chat = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const auth = useAuth();
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const handleSubmit = async () => {
    const content = inputRef.current?.value as string;
    if(inputRef && inputRef.current){
      inputRef.current.value = "";
    }
    const newMessage: Message = { role:"user" , content };
    setChatMessages((prev) => [...prev,newMessage]);
    const chatData = await sendChatRequest(content);
    setChatMessages([...chatData.chats]);
  };
  const handleDeleteChats = async () =>{
    try{
      toast.loading("Deleting Chats",{id:"deletechats"});
      await deleteUserChats();
      setChatMessages([]);
      toast.success(" Chats Deleted Successfully",{id:"deletechats"});
    }catch(error){
      console.log(error);
      toast.loading("Chat Deletion Failed",{id:"deletechats"});
    }
  };
  useLayoutEffect(() => { 
    if(auth?.isLoggedIn && auth.user){
      toast.loading("Loading Chats" , {id: "loadchats"});
      getUserChats().then((data) => {
        setChatMessages([...data.chats]);
        toast.success("Successfully Chats loaded" , {id: "loadchats"});
      })
      .catch(err =>{
        console.log(err);
        toast.error("Loading Failed" , {id: "loadchats"})
      });
    }
  } , [auth]);
  useEffect(() => {
    if(!auth?.user){
      return navigate("/login");
    }
  } , [auth])
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
            p:1.4
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "#FC2288",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name[0]}
            {auth?.user?.name.split(" ")[1][0]}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
          You're now talking to Solace AI 
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 1, p: 3 }}>
          Feel free to share your thoughts and feelings openly—this is a safe space where you can express yourself without fear of judgment,
          but please avoid sharing sensitive personal data.
          </Typography>
          <Button
            onclick={handleDeleteChats}
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              letterSpacing:"2",
              ":hover": {
                bgcolor: red.A400,
              },
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 2,
          ml:3
        }}
      >
        
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 5,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap:1,
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {chatMessages.map((chat, index) => (
            //@ts-ignore
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </Box>
        <div
          style={{
            width: "100%",
            borderRadius: 30,
            backgroundColor: "rgb(17,27,39)",
            display: "flex",
            margin: "auto",
          }}
        >
          {" "}
          <input
            ref={inputRef}
            type="text"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "20px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "20px",
            }}
            placeholder="Message SolaceAI"
          />
          <IconButton onClick={handleSubmit} sx={{ color: "white", mx: 4 }}>
            <IoMdSend />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};

export default Chat;