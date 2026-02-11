import express from "express"
import AuthValidation from "../validations/Auth.validation"
import Validation from "../middlewares/validation"
import AuthController from "../controllers/Auth.controller"

const router = express.Router();


router.get('/register',AuthValidation.RegisterUser,Validation, AuthController)