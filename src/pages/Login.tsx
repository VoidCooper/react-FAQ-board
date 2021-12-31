import { useNavigate } from "react-router-dom";
import Card from "../components/UI/Card";
import { useAppDispatch, useAppSelector } from "../hooks";
import { authActions } from "../store/auth-slice";

const Login = () => {
  const isAuth = useAppSelector(state => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const toggleAuthState = () => {
    if (!isAuth){
      dispatch(authActions.login());
      navigate('/');
    } else {
      dispatch(authActions.logout());
      navigate('/');
    }
  }

  return (
    <Card title="Login Page">
      <div>Since this is a demo application, you don't really "Login", so the button below will just tell the rest of the application that you are authenticated! 🔐</div>
      <Card onClick={toggleAuthState}>Click me to "Login"</Card>
    </Card>
  );
};

export default Login;
