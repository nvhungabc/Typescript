import { SigninForm, SignupForm } from "../interfaces/auth";
import instance from "./index";
const Login_user = (data: SigninForm) => {
    return instance.post('/login', data)
}
const Sig_nup = (data: SignupForm) => {
    const uri="/signup"
    return instance.post(uri, data)
}
export { Login_user, Sig_nup }