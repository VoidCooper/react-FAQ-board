import MainHeader from "./components/layout/MainHeader";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import classes from "./App.module.css";
import AddQuestion from "pages/AddQuestion";
import { useAppSelector } from "hooks";
import QuestionDetails from "pages/QuestionDetails";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();
  return (
    <>
      <MainHeader />
      <div className={classes.main}>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="Login" element={<Login />} />
              {isAuth && <Route path="AddQuestion" element={<AddQuestion />} />}
              {isAuth && (
                <Route path="Question/:id" element={<QuestionDetails />} />
              )}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
}

export default App;
