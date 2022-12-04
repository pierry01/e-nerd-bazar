import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import apolloClient from "./Config/GraphqlApiService";
import Routes from "./Routes";

function App() {
  return (
    <StrictMode>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ApolloProvider>
    </StrictMode>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

export default App;
