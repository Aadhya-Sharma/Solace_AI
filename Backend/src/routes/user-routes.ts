import { Router } from "express";
import { getAllUsers , userSignup , userLogin, verifyUser ,UserLogout  } from "../controllers/user-controllers.js";
import { loginValidator, signupValidator , Validate } from "../utils/validators.js";
import { verifyToken } from "../utils/token_manager.js";

const userRoutes = Router();

userRoutes.get("/" , getAllUsers );
userRoutes.post("/signup" ,Validate(signupValidator), userSignup);
userRoutes.post("/login" ,Validate(loginValidator), userLogin );
userRoutes.get("/auth-status" , verifyToken , verifyUser );
userRoutes.get("/logout" , verifyToken , UserLogout );

export default userRoutes;