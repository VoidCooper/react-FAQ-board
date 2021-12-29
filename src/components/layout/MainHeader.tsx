import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { authActions } from "store/auth-slice";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Logo</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? classes.active : "";
              }}
            >
              Home
            </NavLink>
          </li>
          {isAuth && (
            <>
            <li>
                <NavLink
                  to="/AddQuestion"
                  className={({ isActive }) => {
                    return isActive ? classes.active : "";
                  }}
                >
                  Add Question
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Profile"
                  className={({ isActive }) => {
                    return isActive ? classes.active : "";
                  }}
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <button onClick={logoutHandler}>LogOut</button>
              </li>
            </>
          )}
          {!isAuth && (
            <li>
              <NavLink
                to="/Login"
                className={({ isActive }) => {
                  return isActive ? classes.active : "";
                }}
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
