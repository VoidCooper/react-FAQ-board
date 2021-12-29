import Card from "components/UI/Card";
import { Guid } from "guid-typescript";
import { useAppDispatch } from "hooks";
import { QuestionDefObj } from "models/question";
import React from "react";
import { questionActions } from "store/question-slice";

const AddQuestion = () => {
  const questionInputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputtedValue = questionInputRef.current?.value as string;
    const newQuestion = {...QuestionDefObj};
    newQuestion.id = Guid.create().toString();
    newQuestion.text = inputtedValue;

    dispatch(questionActions.addQuestion(newQuestion));
  };

  return (
    <Card title="Add a question!">
      <form onSubmit={submitHandler}>
        <label id="Question">Question</label>
        <input id="Question" type="text" ref={questionInputRef} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </Card>
  );
};

export default AddQuestion;
