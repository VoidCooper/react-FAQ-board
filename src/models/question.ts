interface Question {
  type: string;
  id: string;
  text: string;
  comments: string[];
}

export const QuestionDefObj:Question = {type:'Question', id:'', text:'', comments:[] };

export default Question;
