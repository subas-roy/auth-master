import { Helmet } from "react-helmet";

const Orders = () => {
  return (
    <div>
      <Helmet>
        <title>Auth Master | Orders</title>
      </Helmet>
      <h2>Your personal orders list: </h2>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
        <li>item 5</li>
      </ul>
    </div>
  );
};

export default Orders;