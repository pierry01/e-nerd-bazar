import { ApolloClient, HttpLink, from } from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { InMemoryCache } from "@apollo/client/cache";

const link = from([new RetryLink(), new HttpLink({ uri: "/graphql" })]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({}),
});

export default client;
