import { useAppDispatch } from "hooks";
import QuestionComment from "models/questionComment";
import React, { ReactElement } from "react";
import questionSlice, { questionActions } from "store/question-slice";
import Card from "../UI/Card";
import classes from "./CommentBox.module.css";

const CommentBox: React.FC<{ comment: QuestionComment }> = (props) => {
  const dispatch = useAppDispatch();
  const newC = { ...props.comment };

  const rateUpHandler = () => {
    newC.score++;
    dispatch(questionActions.modifyComment(newC));
  };

  const rateDownHandler = () => {
    newC.score--;
    dispatch(questionActions.modifyComment(newC));
  };

  const removeCommentHandler = () => {
    dispatch(questionSlice.actions.removeComment(props.comment));
  };

  return (
    <Card key={props.comment.id}>
      <div className={classes.container}>
        <div className={classes.scoreControl}>
          <div>{props.comment.score}</div>
          <div className={classes.scoreButtonContainer}>
            <Card onClick={rateUpHandler} title="Up" />
            <Card onClick={rateDownHandler} title="Down" />
          </div>
        </div>
        <div className={classes.commentTextArea}>{props.comment.text}</div>
        <Card title="Delete" onClick={removeCommentHandler} />
      </div>
    </Card>
  );
};

export default CommentBox;
