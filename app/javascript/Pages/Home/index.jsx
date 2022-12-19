import React, { useState, useMemo } from "react";
import _ from "lodash";

import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Skeleton from "./Skeleton";

import Header from "../../Components/Home/Header";
import Product from "../../Components/Product";

export const QUERY = gql`
  query Home($searchTerm: String) {
    products(searchTerm: $searchTerm) {
      id
      name
      price
      description
    }
  }
`;

function Home() {
  const [fakeLoading, setFakeLoading] = useState(false);
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { loading } = useQuery(QUERY, {
    variables: { searchTerm: debouncedTerm },
    onCompleted: ({ products }) => setFilteredProducts(products),
  });

  const debouncedSearch = useMemo(
    () =>
      _.debounce((searchTerm) => {
        setDebouncedTerm(searchTerm);
        setFakeLoading(false);
      }, 500),
    []
  );

  const onChange = ({ target }) => {
    setFakeLoading(true);
    debouncedSearch(target.value);
  };

  return (
    <>
      <Header onChange={onChange} />

      <div className="container mx-auto text-center">
        {loading || fakeLoading ? (
          <Skeleton />
        ) : (
          <main>
            {filteredProducts.length ? (
              filteredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))
            ) : (
              <p className="font-medium text-gray-700">
                Nenhum produto encontrado para o termo pesquisado...
                <br />
                Tente limpar o termo pesquisado na barra de busca!
              </p>
            )}
          </main>
        )}
      </div>
    </>
  );
}

export default Home;
