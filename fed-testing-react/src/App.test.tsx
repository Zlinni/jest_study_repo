import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('should show fullName when type', async() => {
  //given
  const appendText = 'Welcome';
  //when  
  render(<App/>);
  // 模拟用户行为在输入框上面输入 因为一开始在setState里面有异步的操作 所以找不到
  // 要使用findByPlaceholderText并进行await 来找到input框
  const input = await screen.findByPlaceholderText('Type your name')
  userEvent.type(
    input,
    appendText
  )
  //then
  //由于我们一开始请求获取了一些人名 所以我们这里要用正则来找到对应的测试结果
  expect(screen.getByText(/Welcome/i).textContent).toMatchInlineSnapshot(`"JOJO ABCWelcome"`);
});

test("should display name from api directly",async()=>{
  //given
  render(<App/>)
  //when
  // 找到对应的名字 这个方法是异步方法 所以要await
  const text = await screen.findByText(/JOJO ABC/ig);
  //then
  expect(text).toBeInTheDocument();
})