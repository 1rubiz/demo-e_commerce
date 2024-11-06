import "./Items.css";
import { Link } from "react-router-dom";
const Items = ({ image, price, title, button, product, id }) => {
  return (
    <div className="item shadow rounded p-3 py-4 ">
      <img
        className="mb-3"
        src={image}
        onClick={window.scrollTo(0, 0)}
        alt=""
      />
      <p className="d-flex justify-content-center my-2">{title} ...</p>
      <div className="item-prices">
        <p className="item-price-new d-flex justify-content-center my-2">
          ${price}
        </p>
      </div>
      <div className="d-flex justify-content-center my-2">
        <Link
          to={`/products/${product}`}
          className="btn btn-outline-dark  btn-sm"
        >
          {button}
        </Link>
      </div>
    </div>
  );
};

export default Items;