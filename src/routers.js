import { Router } from "express";
import jwt from "../token.js";
import ControllerUser from "./Controllers/user.controller.js"

const router = Router();

// User
router.post("/users/register", ControllerUser.Register);
router.post("/users/login", ControllerUser.Login);
router.get("/users/profile", jwt.ValidateToken, ControllerUser.Profile);


// Admin

// Posts


export default router;

