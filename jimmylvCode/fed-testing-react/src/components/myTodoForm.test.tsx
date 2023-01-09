import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoForm } from "./TodoForm";

describe("Name of the group", () => {
  test("should ignore empty input", () => {
    //given
    const addTodo = jest.fn();
    render(<TodoForm addTodo={addTodo} />);
    //when
    // 模拟回车输入空值 用花括号标识回车
    userEvent.type(screen.getByPlaceholderText("What's your plan?"), "{enter}");
    //then
    // 这里要写toBeCalled 不能写toHaveBeenCalled 因为后者需要传递大于0的整数
    expect(addTodo).not.toBeCalled();
  });
  test("should allow add todo when not empty input", () => {
    //given
    const addTodo = jest.fn();
    render(<TodoForm addTodo={addTodo} />);
    //when
    // 模拟回车输入值
    userEvent.type(screen.getByPlaceholderText("What's your plan?"), "do sth{enter}");
    //then
    //这里写toBeCalledWith是代表addTodo这个函数是否被do sth这个参数调用
    expect(addTodo).toBeCalledWith('do sth');
  });
});
