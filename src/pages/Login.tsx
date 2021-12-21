import { Link } from "react-router-dom";
import DummyContentHolder from "../components/dummy/DummyContentHolder";
import { useAppDispatch, useAppSelector } from "../hooks";
import { authActions } from "../store/auth-slice";

const Login = () => {
  const isAuth = useAppSelector(state => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();

  const toggleAuthState = () => {
    if (!isAuth){
      dispatch(authActions.login());
    } else {
      dispatch(authActions.logout());
    }
  }

  return (
    <DummyContentHolder title="Login Page" text="This is the login page">
      <button onClick={toggleAuthState}>Toggle auth state</button>
      <br />
      <Link to="/">Back to Home</Link>
    </DummyContentHolder>
  );
};

export default Login;
