import { GraphQLServer } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";
import Mutation from "./resolvers/Mutation";
import Query from "./resolvers/Query";
import User from "./resolvers/User";
import Book from "./resolvers/Book";
import Review from "./resolvers/Review";

const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: "./src/resolvers/schema.graphql",
  resolvers: {
    Mutation,
    Query,
    Book,
    Review,
    User,
  },
  context: {
    prisma,
  },
});

server.start(() => {
  console.log("GraphlQL Server is up and running");
});
