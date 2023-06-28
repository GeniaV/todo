import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import ClearButton from "./clear-button";
import { deleteCompleted } from "../../store/todosSlice";

const mockStore = configureMockStore();

describe("ClearButton", () => {
  test("renders without errors at first, when state is empty", () => {
    const store = mockStore({
      data: { todos: [] },
    });

    render(
      <Provider store={store}>
        <ClearButton />
      </Provider>
    );

    expect(screen.queryByText("Clear Completed")).toBe(null);
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
        <ClearButton />
      </Provider>
    );

    expect(screen.getByText("Clear Completed")).toBeInTheDocument();
  });

  test("dispatches deleteCompleted action on button click", () => {
    const store = mockStore({
      data: {
        todos: [{ text: "Написать прекрасный код", id: "V1StGXR8_Z5jdHi6B-myT", done: true },
        { text: "Написать тесты", id: "S1StGXR8_ZjdHi6B-myT", done: false }]
      },
    });

    render(
      <Provider store={store}>
        <ClearButton />
      </Provider>
    );

    fireEvent.click(screen.getByText("Clear Completed"));
    const actions = store.getActions();

    expect(actions[0].type).toEqual(deleteCompleted.type);
    expect(actions[0].payload).toEqual([{ text: "Написать тесты", id: "S1StGXR8_ZjdHi6B-myT", done: false }]);
  });
});
