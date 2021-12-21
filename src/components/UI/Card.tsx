import { Link } from "react-router-dom";
import classes from "./Card.module.css";

const Card: React.FC<{
  title: string;
  children?: JSX.Element | JSX.Element[];
}> = ({ title, children }) => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <p>{title}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;
