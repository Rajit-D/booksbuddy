import { useRecoilValue } from "recoil";
import LoginForm from "../components/Login/Login";
import SignupForm from "../components/Signup/Signup";
import authScreenAtom from "../atoms/authAtom";

const Auth = () => {
  const authState = useRecoilValue(authScreenAtom);
  return <div>{authState === "login" ? <LoginForm /> : <SignupForm />}</div>;
};

export default Auth;
