import { Link } from "react-router-dom";
import classes from "./DummyContentHolder.module.css";

const DummyContentHolder: React.FC<{
  title: string;
  text: string;
  redirectToHome?: boolean;
  children?: JSX.Element | JSX.Element[];
}> = ({ title, text, redirectToHome, children }) => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <p>{title}</p>
        <p>{text}</p>
        {redirectToHome && <Link to="/">Back to Home</Link>}
        {children}
      </div>
    </div>
  );
};

export default DummyContentHolder;
