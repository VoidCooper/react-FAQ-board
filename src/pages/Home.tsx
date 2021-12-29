import Card from "../components/UI/Card";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { questionActions } from "store/question-slice";

const Home = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();
  const questions = useAppSelector((state) => state.question.loadedQuestions);

  useEffect(() => {
    dispatch(questionActions.fetchQuestions(isAuth));
  },);

  const notLoggedInContent = (
    <Card title="Home">
      <p>This is the 'Home' page</p>
    </Card>
  );

  const loggedInContents = (
    <>
      {questions && questions.map((x) => {
        return (
          <Card key={x.id} title={x.id}>
            <p>{x.text}</p>
          </Card>
        );
      })}
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
