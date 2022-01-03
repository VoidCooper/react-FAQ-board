import Card from "../components/UI/Card";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { fetchQuestions } from "store/question-slice";
import { Link, useNavigate } from "react-router-dom";
import Question from "models/question";
import { GetHighestRankedComment } from "lib/questionCommentUtil";

let initFetch = false;

const Home = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();
  const questions = useAppSelector((state) => state.question.loadedQuestions);
  const comments = useAppSelector((state) => state.question.loadedComments);
  const navigate = useNavigate();

  useEffect(() => {
    if (initFetch) {
      return;
    }
    if (isAuth) {
      initFetch = true;
    }

    const fetchData = async () => {
      await fetchQuestions(dispatch, isAuth);
    };

    fetchData();
  });

  const openCardDetailsHandler = (q: Question) => {
    navigate(`Question/${q.id}`);
  };

  const notLoggedInContent = (
    <Card title="Welcome">
      <div style={{ margin: "1em" }}>
        To see the rest of the application "Login" from top right corner!
      </div>
    </Card>
  );

  const loggedInContents = (
    <div style={{ display: "flex" }}>
      {questions &&
        questions.map((x) => {
          const cardOnClick = () => {
            openCardDetailsHandler(x);
          };
          return (
            <Card key={x.id} onClick={cardOnClick}>
              <h3>{x.text}</h3>
              <div>{GetHighestRankedComment(x, comments)?.text}</div>
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
    </div>
  );

  return (
    <div>
      {!isAuth && notLoggedInContent}
      {isAuth && loggedInContents}
    </div>
  );
};

export default Home;
