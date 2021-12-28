import classes from "./Card.module.css";

const Card: React.FC<{
  title: string;
  children?: JSX.Element | JSX.Element[];
}> = ({ title, children }) => {
  return (
    <div className={classes.content}>
      {title && <p>{title}</p>}
      {children}
    </div>
  );
};

export default Card;
