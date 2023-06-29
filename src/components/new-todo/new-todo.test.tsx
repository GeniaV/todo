import NewTodo from "./new-todo";
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import { render, screen, fireEvent } from "@testing-library/react";
import { addTodo } from "../../store/todosSlice";

const mockStore = configureMockStore();

describe("NewTodo", () => {
  it("renders form with input", () => {
    const store = mockStore({
      data: { todos: [] },
    });

    render(
      <Provider store={store}>
        <NewTodo />
      </Provider>
    );

    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveAttribute("placeholder", "What needs to be done?");
  });

  it("updates input value correctly", () => {
    const store = mockStore({
      data: { todos: [] },
    });

    render(
      <Provider store={store}>
        <NewTodo />
      </Provider>
    );
  
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
  
    fireEvent.change(inputElement, { target: { value: "New task" } });
  
    expect(inputElement.value).toBe("New task");
  });

  it("submits form with correct values", () => {
    const store = mockStore({
      data: { todos: [] },
    });

    render(
      <Provider store={store}>
        <NewTodo />
      </Provider>
    );

    store.dispatch = jest.fn();
  
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;;
    const formElement = screen.getByRole("form");
  
    fireEvent.change(inputElement, { target: { value: "New task" } });
    fireEvent.submit(formElement);
  
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      addTodo({
        text: "New task",
        id: expect.any(String),
        done: false,
      })
    );
  
    expect(inputElement.value).toBe("");
  });
});