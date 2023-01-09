import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Todo } from "./Todo";

describe('Name of the group', () => {
    test("should render new item",()=>{
        const todo = {
            id:1,
            text:'Hello World',
            isCompleted:false
        }
        render(<Todo todo={todo} index={todo.id} toggleTodo={jest.fn()} removeTodo={jest.fn()}/>)
        expect(screen.getByText("Hello World")).toBeInTheDocument();
    })
    test('should render completed item',()=>{
        const todo = {
            id:1,
            text:'Hello World',
            isCompleted:true
        }
        render(<Todo todo={todo} index={todo.id} toggleTodo={jest.fn()} removeTodo={jest.fn()}/>)
        expect(screen.getByText("Redo")).toBeInTheDocument();
    });
    test('should toggle item',()=>{
        const todo = {
            id:1,
            text:'Hello World',
            isCompleted:true
        }
        const toggleTodo = jest.fn();
        render(<Todo todo={todo} index={todo.id} toggleTodo={toggleTodo} removeTodo={jest.fn()}/>)
        // 已经完成的事件 点击了Redo之后
        userEvent.click(screen.getByText('Redo'));
        // toggleTodo这个函数是否被触发一次
        expect(toggleTodo).toHaveBeenCalledTimes(1);
        // 我们在此单元测试里面不需要关心toggleTodo这个函数产生了什么样的结果
        // 只需要知道他被调用过了即可
    });
    test('should toggle item when todo not completed',()=>{
        const todo = {
            id:1,
            text:'Hello World',
            isCompleted:false
        }
        const toggleTodo = jest.fn();
        render(<Todo todo={todo} index={todo.id} toggleTodo={toggleTodo} removeTodo={jest.fn()}/>)
        // 未完成的事件 点击Complete之后
        userEvent.click(screen.getByText('Complete'));
        // removeTodo这个函数是否被触发一次
        expect(toggleTodo).toHaveBeenCalledTimes(1);
    });
    test('should delete item',()=>{
        const todo = {
            id:1,
            text:'Hello World',
            isCompleted:true
        }
        const removeTodo = jest.fn();
        render(<Todo todo={todo} index={todo.id} toggleTodo={jest.fn()} removeTodo={removeTodo}/>)
        // 点击了Redo之后
        userEvent.click(screen.getByText('x'));
        // removeTodo这个函数是否被触发一次
        expect(removeTodo).toHaveBeenCalledTimes(1);
    });
});