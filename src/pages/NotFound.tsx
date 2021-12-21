import DummyContentHolder from "../components/dummy/DummyContentHolder";

const NotFound = () => {
  return (
    <DummyContentHolder
      title="404"
      text="Page Not Found"
      redirectToHome={true}
    />
  );
};

export default NotFound;
