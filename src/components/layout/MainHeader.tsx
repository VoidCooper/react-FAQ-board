import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Logo</div>
      <nav>
        <ul>
          <li>Nav1</li>
          <li>Nav2</li>
          <li>Nav3</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
