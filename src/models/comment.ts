import Question from "./question";

class Comment {
  parent: Question | Comment;
  text: string;

  constructor(parent: Question | Comment, text: string) {
    this.parent = parent;
    this.text = text;
  }
}

export default Comment;
