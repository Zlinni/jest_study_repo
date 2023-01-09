import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("should render todo-list", () => {
  //given
  render(<App />);
  //when
  const todos = screen.getAllByTestId("todo-item");
  //then
  expect(todos).toHaveLength(3);
});
test("should add todo", () => {
  //given
  render(<App />);
  //when
  // 模拟用户输入
  userEvent.type(
    screen.getByPlaceholderText("What's your plan?"),
    "do sth{enter}"
  );
  //then
  const todos = screen.getAllByTestId("todo-item");
  //then
  expect(todos).toHaveLength(4);
});
test("should remove todo", () => {
  //given
  render(<App />);
  //when
  // 模拟用户输入
  userEvent.click(
    within(screen.getByText("Learn about React")).getByTestId("remove-todo")
  );
  //then
  expect(screen.getAllByTestId("todo-item")).toHaveLength(2);
});
test("should toggle todo", () => {
  //given
  render(<App />);
  //when
  // 根据名字找到第一个item
  const firstTodo = within(screen.getByText("Learn about React"));
  //   模拟用户点击Complete
  userEvent.click(firstTodo.getByText("Complete"));
  //then
  // 期望第一个item中的Redo出现在dom中
  expect(firstTodo.getByText("Redo")).toBeInTheDocument();
});
