import { ConnectionOptions, createConnections } from "typeorm";

const connections: ConnectionOptions[] = [];
const postgresqlConfig: ConnectionOptions = {
  url: process.env.DATABASE_URL,
  type: "postgres",
  synchronize: true,
  ssl: false,
  entities: ["build/src/typeorm/Todo/TodoEntity.js"],
  logging: false,
};

connections.push(postgresqlConfig);

if (process.env.BACKUP_DATABASE_URL) {
  const mongodbBackupConfig: ConnectionOptions = {
    url: process.env.BACKUP_DATABASE_URL,
    type: "postgres",
    synchronize: true,
    ssl: false,
    entities: ["build/src/typeorm/Todo/TodoEntity.js"],
    logging: false,
  };
  connections.push(mongodbBackupConfig);
}

export const createDBConnection = () => createConnections(connections);
