import { Guid } from "guid-typescript";
import Comment from "./comment";

interface Question {
  type: "Question";
  id: string;
  text: string;
  comments: string[];
}

export default Question;
