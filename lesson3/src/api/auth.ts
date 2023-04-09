import { IUserSignup, IuserSignin } from "../interfaces/auth";
import insntance from "./config";
export const signin = (user:IuserSignin) =>{
    return insntance.post("/signin",user);
}
export const signup = (user:IUserSignup) =>{
    return insntance.post("/signup",user);
}
export const cheacEmail = () =>{
   
}