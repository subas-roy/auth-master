import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo)
  return (
    <div>
      <Helmet>
        <title>Auth Master | Home</title>
      </Helmet>
      <h2 className="text-3xl">This is home for: {authInfo.name}</h2>
    </div>
  );
};

export default Home;