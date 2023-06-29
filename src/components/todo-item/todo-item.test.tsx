import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import { render, screen, fireEvent } from "@testing-library/react";
import { editTodo } from "../../store/todosSlice";
import TodoItem from "./todo-item";

const mockStore = configureMockStore();

describe("TodoItem", () => {
  it("renders TodoItem with checkbox", () => {
    const store = mockStore({
      data: { todos: [] },
    });

    const item = {
      id: "V1StGXR8_Z5jdHi6B-myT",
      text: "Task",
      done: false,
    };

    render(
      <Provider store={store}>
        <TodoItem {...item} />
      </Provider>
    );

    const checkboxElement = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement.checked).toBe(false);
  });

  it("sets checked state based on item.done", () => {
    const store = mockStore({
      data: { todos: [] },
    });

    const item = {
      id: "V1StGXR8_Z5jdHi6B-myT",
      text: "Task",
      done: true,
    };

    render(
      <Provider store={store}>
        <TodoItem {...item} />
      </Provider>
    );

    const checkboxElement = screen.getByRole("checkbox") as HTMLInputElement;

    expect(checkboxElement.checked).toBe(true);
  });

  it("renders editable text input", () => {
    const store = mockStore({
      data: {
        todos: [{
          id: "V1StGXR8_Z5jdHi6B-myT",
          text: "Task",
          done: true,
        }]
      },
    });

    const item = {
      id: "V1StGXR8_Z5jdHi6B-myT",
      text: "Task 2",
      done: true,
    };

    render(
      <Provider store={store}>
        <TodoItem {...item} />
      </Provider>
    );

    const textInputElement = screen.getByRole("textbox") as HTMLInputElement;

    expect(textInputElement).toBeInTheDocument();
    expect(textInputElement.value).toBe(item.text);
  });

  it("dispatches editTodo on text change", () => {
    const store = mockStore({
      data: {
        todos: [{
          id: "V1StGXR8_Z5jdHi6B-myT",
          text: "Task",
          done: false,
        }]
      },
    });

    const item = {
      id: "V1StGXR8_Z5jdHi6B-myT",
      text: "Task",
      done: false,
    };

    render(
      <Provider store={store}>
        <TodoItem {...item} />
      </Provider>
    );

    store.dispatch = jest.fn();

    const textInputElement = screen.getByRole("textbox");

    fireEvent.change(textInputElement, { target: { value: "Updated Task" } });

    const actions = store.getActions();
    expect(actions[0].type).toEqual(editTodo.type);
    expect(actions[0].payload).toEqual({ text: "Updated Task", id: "V1StGXR8_Z5jdHi6B-myT", done: false });
  });
});