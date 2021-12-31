import { createSlice } from "@reduxjs/toolkit";
import Question from "models/question";
import { QuestionDefObj } from "models/question";
import { Guid } from "guid-typescript";
import QuestionComment, { QuestionCommentDefObj } from "models/questionComment";

interface QuestionState {
  loadedQuestions: Question[];
  loadedComments: QuestionComment[];
}

const DUMMY_QUESTIONS: Question[] = [
  { ...QuestionDefObj, id: Guid.create().toString(), text: "Eh?" },
  { ...QuestionDefObj, id: Guid.create().toString(), text: "He?" },
  { ...QuestionDefObj, id: Guid.create().toString(), text: "She?" },
  { ...QuestionDefObj, id: Guid.create().toString(), text: "Her?" },
  { ...QuestionDefObj, id: Guid.create().toString(), text: "Him?" },
  { ...QuestionDefObj, id: Guid.create().toString(), text: "Who?" },
  { ...QuestionDefObj, id: Guid.create().toString(), text: "Where?" },
];

const DUMMY_COMMENTS: QuestionComment[] = [
  {
    ...QuestionCommentDefObj,
    id: Guid.create().toString(),
    parent: DUMMY_QUESTIONS[0].id,
    text: "1",
  } as QuestionComment,
  {
    ...QuestionCommentDefObj,
    id: Guid.create().toString(),
    parent: DUMMY_QUESTIONS[0].id,
    text: "2",
  } as QuestionComment,
  {
    ...QuestionCommentDefObj,
    id: Guid.create().toString(),
    parent: DUMMY_QUESTIONS[0].id,
    text: "3",
  } as QuestionComment,
  {
    ...QuestionCommentDefObj,
    id: Guid.create().toString(),
    parent: DUMMY_QUESTIONS[0].id,
    text: "4",
  } as QuestionComment,
  {
    ...QuestionCommentDefObj,
    id: Guid.create().toString(),
    parent: DUMMY_QUESTIONS[0].id,
    text: "5",
  } as QuestionComment,
  {
    ...QuestionCommentDefObj,
    id: Guid.create().toString(),
    parent: DUMMY_QUESTIONS[0].id,
    text: "6",
  } as QuestionComment,
];

DUMMY_QUESTIONS.forEach((element) => {
  const possibleComments = DUMMY_COMMENTS.filter(
    (x) => x.parent === element.id
  );
  if (possibleComments && possibleComments.length > 0) {
    possibleComments.forEach((comment) => {
      element.comments.push(comment.id);
    });
  }
});

const initialState = {
  loadedQuestions: [],
  loadedComments: [],
} as QuestionState;

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addQuestion(state, action) {
      if (action.payload.type === QuestionDefObj.type) {
        const q = action.payload as Question;
        state.loadedQuestions?.push(q);
      }
    },
    removeQuestion(state, action) {
      if (
        state.loadedQuestions &&
        action.payload.type === QuestionDefObj.type
      ) {
        const q = action.payload as Question;
        state.loadedQuestions = state.loadedQuestions.filter(
          (x) => x.id !== q.id
        ) as Question[];
      }
    },
    fetchQuestions(state, action) {
      if (action.payload) {
        state.loadedQuestions = DUMMY_QUESTIONS;
        state.loadedComments = DUMMY_COMMENTS;
      }
    },
    addComment(state, action) {
      if (action.payload.type === QuestionCommentDefObj.type) {
        const qCom = action.payload as QuestionComment;
        state.loadedComments.push(qCom);
      }
    },
    modifyComment(state, action) {
      if (action.payload.type === QuestionCommentDefObj.type) {
        const qCom = action.payload as QuestionComment;

        state.loadedComments = state.loadedComments.map((x) => {
          if (x.id === qCom.id) {
            return { ...x, ...qCom };
          } else {
            return x;
          }
        });
      }
    },
  },
});

export const questionActions = questionSlice.actions;
export default questionSlice;
