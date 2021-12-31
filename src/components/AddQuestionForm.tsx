import { Guid } from "guid-typescript";
import { useAppDispatch } from "hooks";
import { QuestionDefObj } from "models/question";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questionActions } from "store/question-slice";
import Card from "./UI/Card";

interface IError {
  type: string;
  title: string;
  message: string;
}

let timeoutHandle: NodeJS.Timeout;

const AddQuestionForm = () => {
  const [inputState, setInputState] = useState("");
  const [inputTouched, setInputTouched] = useState(false);
  const [errorState, setErrorState] = useState({} as IError | null);
  const questionInputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputTouched) {
      inputValidator();
      return;
    }

    const newQuestion = { ...QuestionDefObj };
    newQuestion.id = Guid.create().toString();
    newQuestion.text = inputState;

    dispatch(questionActions.addQuestion(newQuestion));
    setInputState("");
    setInputTouched(false);
    setErrorState(null);
    navigate('/');
  };

  const inputValidator = () => {
    const curInput = questionInputRef.current?.value as string;
    if (!curInput || curInput.length === 0) {
      setErrorState({
        type: "EMPTYINPUT",
        title: "Question is empty!",
        message: "Empty questions cannot be submitted!",
      } as IError);
    } else if (curInput.length < 10) {
      setErrorState({
        type: "SHORTINPUT",
        title: "Question too short!",
        message: "Question should be atleast 10 characters long!",
      } as IError);
    } else {
      setErrorState(null);
    }
  };

  useEffect(() => {
    if (inputTouched) {
      timeoutHandle = setTimeout(inputValidator, 500);
    }
    return () => {
      clearTimeout(timeoutHandle);
    };
  }, [inputState, inputTouched]);

  const userInputHandler = () => {
    if (!inputTouched) {
      setInputTouched(true);
    }

    const input = questionInputRef.current?.value as string;
    setInputState(input);
  };

  const errorContent = (
    <p>
      {errorState?.title}
      <br />
      {errorState?.message}
    </p>
  );

  return (
    <Card title="Add a question!">
      <form onSubmit={submitHandler}>
        <label id="Question">Question: </label>
        <input
          id="Question"
          type="text"
          ref={questionInputRef}
          onChange={userInputHandler}
          value={inputState}
        />
        <br />
        {errorState?.type && errorContent}
        <input type="submit" value="Submit" disabled={errorState !== null} />
      </form>
    </Card>
  );
};

export default AddQuestionForm;
