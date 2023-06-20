import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { User } from "./entities/user";
import { Hello } from "./resolvers/resolver";

const main = async () => {
  const schema = await buildSchema({
    resolvers: [Hello],
  });

  const server = new ApolloServer({
    schema,
  });
  server.listen(4000, () => {
    console.log("Server Started");
  });
};
createConnection({
  type: "postgres",
  url: "postgresql://postgres:siddarth@localhost:5432/db",
  username: "postgres",
  password: "siddarth",
  entities: [User],
  logging: true,
  synchronize: true,
}).then(() => {
  console.log("Data connected");
  main();
});
