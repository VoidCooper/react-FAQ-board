import React from "react";
import classes from "./Card.module.css";

const Card: React.FC<{
  title?: string;
  children?: JSX.Element | JSX.Element[];
  onClick?: (values:any) => void;
}> = ({ title, children, onClick }) => {
  return (
    <div onClick={onClick} className={classes.content}>
      {title && <p>{title}</p>}
      {children}
    </div>
  );
};

export default Card;
