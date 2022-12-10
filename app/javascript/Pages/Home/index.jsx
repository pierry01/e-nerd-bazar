import React from "react";

import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

import Product from "../../Components/Product";

export const QUERY = gql`
  query Home {
    products {
      id
      name
      price
      description
    }
  }
`;

function Home() {
  const { loading, data } = useQuery(QUERY);

  if (loading) return "LOADING...";

  const { products } = data;

  return (
    <div className="p-1 text-center">
      <h1>HOME PAGE</h1>

      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
