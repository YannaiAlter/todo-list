import { createConnection } from "typeorm";

export const createDBConnection = () =>
  createConnection({
    url: process.env.DATABASE_URL,
    type: "postgres",
    synchronize: true,
    ssl: true,
    entities: ["build/src/typeorm/Todo/TodoEntity.js"],
    logging: false,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });
