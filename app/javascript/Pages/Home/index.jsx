import React from "react";

import Product from "../../Components/Product";

function Home() {
  return (
    <div className="p-1">
      <h1>HOME PAGE</h1>

      <Product
        product={{
          id: "PRODUCT-ID",
          name: "Árvore de natal",
          price: 9900,
          image:
            "https://http2.mlstatic.com/D_NQ_NP_2X_850708-MLB43942989373_102020-F.webp",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        }}
      />
    </div>
  );
}

export default Home;
