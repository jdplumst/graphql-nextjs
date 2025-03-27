"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { type ReactNode } from "react";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export function ApolloWrapper({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
