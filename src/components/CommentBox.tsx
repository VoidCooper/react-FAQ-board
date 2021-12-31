import { useAppDispatch } from "hooks";
import QuestionComment from "models/questionComment";
import React, { ReactElement } from "react";
import questionSlice, { questionActions } from "store/question-slice";
import Card from "./UI/Card";

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
      <div
        style={{
          display: "flex",
          alignContent: "space-around",
          alignItems: "center",
          padding: "1em",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ height: "auto" }}>{props.comment.score}</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Card onClick={rateUpHandler} title="Up" />
            <Card onClick={rateDownHandler} title="Down" />
          </div>
        </div>
        <div
          style={{
            overflowWrap: "break-word",
            overflow: "auto",
            maxWidth: "70%",
          }}
        >
          {props.comment.text}
        </div>
        <Card title="Delete" onClick={removeCommentHandler} />
      </div>
    </Card>
  );
};

export default CommentBox;
