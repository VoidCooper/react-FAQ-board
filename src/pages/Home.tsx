import { Link } from "react-router-dom";
import DummyContentHolder from "../components/dummy/DummyContentHolder";

const Home = () => {
  return (
    <DummyContentHolder title="Home" text="This is the 'Home' page">
      <Link to="Login">To Login</Link>
    </DummyContentHolder>
  );
};

export default Home;
