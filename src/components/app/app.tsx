import ClearButton from "../clear-button/clear-button";
import Count from "../count/count";
import Filter from "../filter/filter";
import NewTodo from "../new-todo/new-todo";
import TodoList from "../todo-list/todo-list";
import styles from "./app.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.app__header}>todos</h1>
      <div className={styles.app__canvas}>
        <div className={styles.app__canvas_lower}></div>
        <div className={styles.app__canvas_middle}></div>
        <div className={styles.app__canvas_upper}>
          <NewTodo />
          <TodoList />
          <section className={styles.functionality}>
            <Count />
            <Filter />
            <ClearButton />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
