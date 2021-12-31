import Card from "components/UI/Card";
import { Guid } from "guid-typescript";
import { useAppDispatch, useAppSelector } from "hooks";
import Question from "models/question";
import QuestionComment, { QuestionCommentDefObj } from "models/questionComment";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import questionSlice from "store/question-slice";

const QuestionDetails = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const commentInputRef = useRef<HTMLInputElement>(null);
  const [commentValue, setCommentValue] = useState("");

  const loadedQuestions = useAppSelector(
    (state) => state.question.loadedQuestions
  );

  const loadedComments = useAppSelector(
    (state) => state.question.loadedComments
  );

  const possibleMatch = loadedQuestions.filter((x) => x.id === params.id);
  let question: Question | null = null;
  let comments: QuestionComment[] = [];
  if (possibleMatch && possibleMatch.length > 0) {
    question = possibleMatch[0] as Question;
    comments = loadedComments.filter((x) => x.parent === question?.id);
  }

  const removeQuestionHandler = () => {
    dispatch(questionSlice.actions.removeQuestion(question));
    navigate("/");
  };

  const addCommentHandler = () => {
    if (commentValue.length > 0) {
      const newComment = {
        ...QuestionCommentDefObj,
        id: Guid.create().toString(),
        text: commentValue,
        parent: question?.id,
      } as QuestionComment;

      dispatch(questionSlice.actions.addComment(newComment));
      setCommentValue("");
    }
  };

  const commentFieldChangedHandler = () => {
    setCommentValue(commentInputRef.current?.value as string);
  };

  const commentsContent = comments.map((x) => {
    return (
      <Card key={x.id}>
        <p>{x.text}</p>
      </Card>
    );
  });

  return (
    <Card title={question?.text}>
      <>
        <input
          type="text"
          ref={commentInputRef}
          value={commentValue}
          onChange={commentFieldChangedHandler}
        />
        <Card title="Add Comment" onClick={addCommentHandler} />
        <br />
        <p>Comments</p>
        {commentsContent}
        <br />
        <Card onClick={removeQuestionHandler} title="Remove question" />
      </>
    </Card>
  );
};

export default QuestionDetails;