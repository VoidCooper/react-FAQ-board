import Card from "components/UI/Card";
import { useAppSelector } from "hooks";
import Question from "models/question";
import { useParams } from "react-router-dom";

const QuestionDetails = () => {
  const params = useParams();

  const loadedQuestions = useAppSelector(
    (state) => state.question.loadedQuestions
  );

  const possibleMatch = loadedQuestions.filter(x => x.id === params.id);
  let question;
  let comments;
  if (possibleMatch && possibleMatch.length > 0)
  {
    question = possibleMatch[0] as Question;
  }

  return (
    <>
      <Card title={question?.text}>
        <Card><p>Comment</p></Card>
      </Card>
    </>
  );
};

export default QuestionDetails;
