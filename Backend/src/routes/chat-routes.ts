import { Router } from "express";
import { verifyToken } from "../utils/token_manager.js";
import { chatCompletionValidator , Validate  } from "../utils/validators.js"; 
import { generateChatCompletion , sendChatsToUser , deleteChats} from "../controllers/chat-controller.js";
//Protected API
const chatRoutes = Router();
chatRoutes.post(
  "/new",
  Validate(chatCompletionValidator),
  verifyToken,
  generateChatCompletion
);
chatRoutes.get(
  "/all-chats",
  verifyToken,
  sendChatsToUser
);
chatRoutes.delete(
  "/delete",
  verifyToken,
  deleteChats
);

export default chatRoutes;