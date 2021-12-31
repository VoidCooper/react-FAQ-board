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
  {
    ...QuestionDefObj,
    id: Guid.create().toString(),
    text: "What is the purpose of this react application?",
  },
  {
    ...QuestionDefObj,
    id: Guid.create().toString(),
    text: "How do I use this react application?",
  },
  {
    ...QuestionDefObj,
    id: Guid.create().toString(),
    text: "All my previous comments are gone!",
  },
];

const DUMMY_COMMENTS: QuestionComment[] = [
  {
    ...QuestionCommentDefObj,
    id: Guid.create().toString(),
    parent: DUMMY_QUESTIONS[0].id,
    text: "The purpose of this react application was for me to try out how react works and showcase the code!",
  } as QuestionComment,
  {
    ...QuestionCommentDefObj,
    id: Guid.create().toString(),
    parent: DUMMY_QUESTIONS[1].id,
    text: "Also, the highest ranking comment is shown on the front page! If there is a tie in score, the newest one is shown",
    score: 3,
  } as QuestionComment,
  {
    ...QuestionCommentDefObj,
    id: Guid.create().toString(),
    parent: DUMMY_QUESTIONS[1].id,
    text: "It is simple! Click on the cards to see more comments for them!",
    score: 3,
  } as QuestionComment,
  {
    ...QuestionCommentDefObj,
    id: Guid.create().toString(),
    parent: DUMMY_QUESTIONS[1].id,
    text: "Don't like a comment? You can remove it by clicking the 'delete' button on this comment!",
    score: 1,
  } as QuestionComment,
  {
    ...QuestionCommentDefObj,
    id: Guid.create().toString(),
    parent: DUMMY_QUESTIONS[1].id,
    text: "Is question spam/unnecessary? Remove it by clicking the delete question below!",
  } as QuestionComment,
  {
    ...QuestionCommentDefObj,
    id: Guid.create().toString(),
    parent: DUMMY_QUESTIONS[2].id,
    text: "All the questions are lost on page refresh currently, but, it would be easy to add them into local storage. But I haven't done it, because it means less junk in your browser cache. 😎",
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
    removeComment(state, action) {
      if (action.payload.type === QuestionCommentDefObj.type) {
        const qCom = action.payload as QuestionComment;
        state.loadedComments = state.loadedComments.filter(
          (x) => x.id !== qCom.id
        );
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
