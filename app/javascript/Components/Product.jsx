import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import parseMoney from "../Services/ParseMoney";
import TextLineClamp from "../Utils/TextLineClamp";

function Product({ product }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="w-40 sm:w-60 h-96 border hover:shadow-lg m-1"
      onClick={() => navigate(`products/${product.id}`)}
    >
      <img
        src={
          product.image ||
          "https://http2.mlstatic.com/D_NQ_NP_2X_850708-MLB43942989373_102020-F.webp"
        }
        alt={product.name}
        className="w-40 sm:w-60 h-60"
      />

      <div className="border-t p-1 text-start">
        <TextLineClamp
          lineClamp={1}
          paragraph={product.name}
          className="text-gray-700 mb-1"
        />

        <p className="text-2xl text-gray-700">{parseMoney(product.price)}</p>

        <p className="text-xs sm:text-sm text-green-700 mb-1">
          10x de {parseMoney(product.price / 10)} sem juros
        </p>

        <TextLineClamp
          lineClamp={2}
          paragraph={product.description}
          className="text-sm text-gray-600"
        />
      </div>
    </button>
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
