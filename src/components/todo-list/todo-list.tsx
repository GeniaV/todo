import { useAppSelector } from "../..";
import { TTodo } from "../../store/todosSlice";
import TodoItem from "../todo-item/todo-item";
import styles from "./todo-list.module.css";

const TodoList = () => {
  const todos = useAppSelector(state => state.todos);

  return (
    <ul className={styles.list}>
      {todos.length !== 0 && todos.map((todo: TTodo) =>
        <TodoItem text={todo.text} id={todo.id} done={todo.done} key={todo.id} />
      )}
    </ul>
  );
};

export default TodoList;
