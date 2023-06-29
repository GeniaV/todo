import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import Count from "./count";

const mockStore = configureMockStore();

describe("Count", () => {
  it("renders without errors at first, when state is empty", () => {
    const store = mockStore({
      data: { todos: [] },
    });

    render(
      <Provider store={store}>
        <Count />
      </Provider>
    );

    expect(screen.queryByTestId("count")).toBe(null);
  });

  it("renders without errors at first, when state is not empty", () => {
    const store = mockStore({
      data: {
        todos: [{ text: "Написать прекрасный код", id: "V1StGXR8_Z5jdHi6B-myT", done: true },
        { text: "Написать тесты", id: "S1StGXR8_ZjdHi6B-myT", done: false }]
      },
    });

    render(
      <Provider store={store}>
        <Count />
      </Provider>
    );

    expect(screen.getByTestId("count")).toBeInTheDocument();
    expect(screen.getByText("1 item left")).toBeInTheDocument();
  });
});
