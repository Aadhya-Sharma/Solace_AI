import { Box , Avatar , Typography} from "@mui/material";
import { useAuth } from '../../context/AuthContext';

const ChatItem = ({content , role} : { content : string; role: "user" | "assistant" ;}) => {
    const auth = useAuth();
  return (
    role === "assistant" ? (
        <Box 
            sx={{
                display:"flex",
                p:2,
                my:2,
                gap:2
            }}
            
        >
            <Avatar sx={{ ml:"0" , bgcolor:"#020122"}}>
                <img src="Favicon.png" alt="solaceai" width={"30px"} />
            </Avatar>
            <Box><Typography fontSize={"20px"} color={'#ECECEA'}>{content}</Typography></Box>
        </Box> 
    ) : (
        <Box 
            sx={{
                display:"flex",
                bgcolor:"#004d5612",
                p:2, 
                gap:2,
                
            }}
        >
            <Avatar sx={{ ml:"0" , bgcolor:"#FC2288" , color:"white"}}>
                {auth?.user?.name[0]}
                {auth?.user?.name.split(" ")[1][0]}
            </Avatar>
            <Box><Typography fontSize={"20px"}>{content}</Typography></Box>
        </Box> 
    )
  );
};

export default ChatItem;