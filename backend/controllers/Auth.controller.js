import CatchAsync from "../utils/CatchAsync";
import httpStatus from "http-status"
import AuthService from "../services/Auth.services"



class AuthController{
    static RegisterUser = CatchAsync(async(req,res) => {
        const res_obj = await AuthService.RegisterUser(req.body);
        res.status(httpStatus.CREATED).send(res_obj)
    })
}

export default AuthController