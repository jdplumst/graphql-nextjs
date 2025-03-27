import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    hello: String!
    randomQuery: String!
  }
`;
const randomQuery = () => {
  return "Hello, World!";
};

const coolQueries = {
  randomQuery,
};

const resolvers = {
  Query: {
    hello: () => "Hello from GraphQL!",
    ...coolQueries,
  },
};

export { typeDefs, resolvers };
