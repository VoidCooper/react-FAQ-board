import Card from "../components/UI/Card";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { questionActions } from "store/question-slice";
import { Link } from "react-router-dom";
import Question from "models/question";

let initFetch = false;

const Home = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();
  const questions = useAppSelector((state) => state.question.loadedQuestions);

  useEffect(() => {
    if (initFetch) {
      return;
    }
    if (isAuth)
    {
      initFetch = true;
    }
    dispatch(questionActions.fetchQuestions(isAuth));
  });

  const removeCardHandler = (q: Question) => {
    dispatch(questionActions.removeQuestion(q));
  };

  const notLoggedInContent = (
    <Card title="Home">
      <p>This is the 'Home' page</p>
    </Card>
  );

  const loggedInContents = (
    <>
      {questions &&
        questions.map((x) => {
          const cardOnClick = () => {
            removeCardHandler(x);
          };
          return (
            <Card key={x.id} title={x.id} onClick={cardOnClick}>
              <p>{x.text}</p>
            </Card>
          );
        })}
      {questions.length === 0 && (
        <Card title="No questions!">
          <p>
            <Link to="/AddQuestion">Add a new one!</Link>
          </p>
        </Card>
      )}
    </>
  );

  return (
    <>
      {!isAuth && notLoggedInContent}
      {isAuth && loggedInContents}
    </>
  );
};

export default Home;
