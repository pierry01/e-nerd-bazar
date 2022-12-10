import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import parseMoney from "../Services/ParseMoney";
import TextLineClamp from "../Components/Utils/TextLineClamp";

function Product({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`products/${product.id}`)}
      className="w-60 h-96 border hover:cursor-pointer hover:shadow-lg"
    >
      <img src={product.image} alt={product.name} className="w-60 h-60" />

      <div className="border-t p-1">
        <p className="text-gray-700 mb-1">{product.name}</p>

        <p className="text-2xl text-gray-700">{parseMoney(product.price)}</p>

        <p className="text-sm text-green-700 mb-1">
          10x de {parseMoney(product.price / 10)} sem juros
        </p>

        <TextLineClamp
          lineClamp={2}
          paragraph={product.description}
          className="text-sm text-gray-600"
        />
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Product;
