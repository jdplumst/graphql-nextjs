import { ApolloServer } from "@apollo/server";
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";
import { typeDefs, resolvers } from "./schema";
import { type Config } from "@netlify/functions";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const handler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventRequestHandler(),
);

export const config: Config = {
  path: "/graphql",
};
