import React, { CSSProperties } from "react";
import classes from "./Card.module.css";

const Card: React.FC<{
  title?: string;
  children?: JSX.Element | JSX.Element[];
  onClick?: (values:any) => void;
  style?: CSSProperties;
}> = ({ title, children, onClick, style }) => {
  if (!!onClick)
  {
    return (
      <button onClick={onClick} className={classes.content} style={style}>
        {title && <div className={classes.title}>{title}</div>}
        {children}
      </button>
    );
  }

  return (
    <div className={classes.content} style={style}>
      {title && <div className={classes.title}>{title}</div>}
      {children}
    </div>
  );
};

export default Card;
