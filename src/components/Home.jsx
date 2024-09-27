import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Auth Master | Home</title>
      </Helmet>
      <h2 className="text-3xl">This is home</h2>
    </div>
  );
};

export default Home;