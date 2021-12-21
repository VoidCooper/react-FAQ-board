import { Link } from "react-router-dom";
import Card from "../components/UI/Card";

const NotFound = () => {
  return (
    <Card title="404">
      <p>Page Not Found</p>
      <Link to='/'>Back to Home</Link>
    </Card>
  );
};

export default NotFound;
