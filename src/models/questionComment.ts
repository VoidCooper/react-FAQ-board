interface QuestionComment {
  type: string;
  id: string;
  parent: string;
  text: string;
  score: number;
}

export const QuestionCommentDefObj = {
  type: "QUESTIONCOMMENT",
  id: "",
  parent: "",
  text: "",
  score: 0,
} as QuestionComment;

export default QuestionComment;
