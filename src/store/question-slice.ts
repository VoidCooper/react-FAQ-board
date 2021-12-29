import { createSlice } from "@reduxjs/toolkit";
import Question from "models/question";

interface QuestionState {
  loadedQuestions: Question[] | null;
}

const initialState = { loadedQuestions: null } as QuestionState;

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addQuestion(state, action) {
      if (action.payload instanceof Question) {
        const q = action.payload as Question;
        state.loadedQuestions?.push(q);
      }
    },
    removeQuestion(state, action) {
      if (
        state.loadedQuestions &&
        action.payload instanceof Question
      ) {
        const q = action.payload as Question;
        state.loadedQuestions = state.loadedQuestions.filter(
          (x) => x.id === q.id
        ) as Question[];
      }
    },
  },
});

export const questionActions = questionSlice.actions;
export default questionSlice;
