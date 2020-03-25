import { TodoUser } from '../model/todoUser';

export interface ListTodo {
  id?: string;
  title: string;
  admin: string;
  userCanRead: Array<string>;
  userCanWrite: Array<string>;
  todos : Array<TodoUser>
}
