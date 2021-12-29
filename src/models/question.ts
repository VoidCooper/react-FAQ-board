import { Guid } from "guid-typescript";
import Comment from "./comment";

class Question {
  id: string;
  text: string;
  comments: Comment[] | null;

  constructor(text: string | null, id: string | null) {
    this.id = "";
    this.comments = null;
    this.text = "";
    if (id) {
      // Fetching old question
      const possibleMatch = DUMMY_QUESTIONS.filter((q) => q.id === id);
      if (possibleMatch) {
        this.id = possibleMatch[0].id;
        this.text = possibleMatch[0].text;
        this.comments = possibleMatch[0].comments;
      }
    } else if (text) {
      // Creating a new question
      this.id = Guid.create().toString();
      this.text = text;
      console.log(this.id);
    }
  }
}

const DUMMY_QUESTIONS: Question[] = [new Question("Eh?", null)];

export default Question;
