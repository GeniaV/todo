import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import Filter, { Buttons } from "./filter";
import { selectOption } from "../../store/filterSlice";

const mockStore = configureMockStore();

describe("Filter", () => {
  test("renders without errors at first, when state is empty", () => {
    const store = mockStore({
      data: { todos: [] },
    });

    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );

    expect(screen.queryByTestId("filter")).toBe(null);
  });

  test("renders without errors at first, when state is not empty", () => {
    const store = mockStore({
      data: {
        todos: [{ text: "Написать прекрасный код", id: "V1StGXR8_Z5jdHi6B-myT", done: true },
        { text: "Написать тесты", id: "S1StGXR8_ZjdHi6B-myT", done: false }]
      },
    });

    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );

    expect(screen.getByTestId("filter")).toBeInTheDocument();
  });

  test("should call showCompletedTodos when Completed button is clicked", () => {
    const store = mockStore({
      data: {
        todos: [{ text: "Написать прекрасный код", id: "V1StGXR8_Z5jdHi6B-myT", done: true },
        { text: "Написать тесты", id: "S1StGXR8_ZjdHi6B-myT", done: false }]
      },
      filter: Buttons.Completed,
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );

    fireEvent.click(screen.getByText(Buttons.Completed))

    expect(store.dispatch).toHaveBeenCalledWith(selectOption(Buttons.Completed))
  });

  test("should call showAllTodos when All button is clicked", () => {
    const store = mockStore({
      data: {
        todos: [{ text: "Написать прекрасный код", id: "V1StGXR8_Z5jdHi6B-myT", done: true },
        { text: "Написать тесты", id: "S1StGXR8_ZjdHi6B-myT", done: false }]
      },
      filter: Buttons.All,
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );

    fireEvent.click(screen.getByText(Buttons.All))

    expect(store.dispatch).toHaveBeenCalledWith(selectOption(Buttons.All))
  });

  test("should call showActiveTodos when Active button is clicked", () => {
    const store = mockStore({
      data: {
        todos: [{ text: "Написать прекрасный код", id: "V1StGXR8_Z5jdHi6B-myT", done: true },
        { text: "Написать тесты", id: "S1StGXR8_ZjdHi6B-myT", done: false }]
      },
      filter: Buttons.Active,
    });

    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );

    fireEvent.click(screen.getByText(Buttons.Active))

    expect(store.dispatch).toHaveBeenCalledWith(selectOption(Buttons.Active))
  });
});