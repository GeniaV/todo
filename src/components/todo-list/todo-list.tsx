import { useEffect, useState } from "react";
import { useAppSelector } from "../..";
import { TTodo } from "../../store/todosSlice";
import TodoItem from "../todo-item/todo-item";
import styles from "./todo-list.module.css";
import { Buttons } from "../filter/filter";

const TodoList = () => {
  const todos = useAppSelector(state => state.data.todos);
  const filter = useAppSelector(state => state.filter.filter);

  const [filteresTodos, setFilteredTodos] = useState<TTodo[]>([]);

  useEffect(() => {
    if (filter === Buttons.All) {
      setFilteredTodos(todos);
    }

    if (filter === Buttons.Active) {
      setFilteredTodos(todos.filter((todo) => todo.done === false));
    }

    if (filter === Buttons.Completed) {
      setFilteredTodos(todos.filter((todo) => todo.done === true));
    }
  }, [filter, todos]);

  return (
    <ul className={styles.list}>
      {filteresTodos.length !== 0 && filteresTodos.map((todo: TTodo) =>
        <TodoItem text={todo.text} id={todo.id} done={todo.done} key={todo.id} />
      )}
    </ul>
  );
};

export default TodoList;
