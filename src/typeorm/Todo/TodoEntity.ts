import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column({ default: false })
  isDone: boolean;
}
