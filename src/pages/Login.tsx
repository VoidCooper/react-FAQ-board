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
      <p>This is the login page</p>
      <button onClick={toggleAuthState}>Toggle auth state</button>
    </Card>
  );
};

export default Login;
