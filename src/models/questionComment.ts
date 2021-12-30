interface QuestionComment {
  type: string;
  id: string;
  parent: string;
  text: string;
}

export const QuestionCommentDefObj = {
  type: "QUESTIONCOMMENT",
  id: "",
  parent: "",
  text: "",
} as QuestionComment;

export default QuestionComment;
