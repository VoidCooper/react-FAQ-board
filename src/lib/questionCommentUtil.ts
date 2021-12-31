import Question from "models/question";
import QuestionComment from "models/questionComment";

export const GetHighestRankedComment = (
  Question: Question,
  QuestionCommentList: QuestionComment[]
): QuestionComment | null => {
  const filtered = QuestionCommentList.filter((x) => x.parent === Question.id);
  if (!filtered || filtered.length === 0) {
    return null;
  }
  return filtered.reduce((p, c) => (p.score > c.score ? p : c));
};
