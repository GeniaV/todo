import App from "./app";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("App", () => {
  it("Should render without crash", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText("todos")).toBeInTheDocument();
  });
});
