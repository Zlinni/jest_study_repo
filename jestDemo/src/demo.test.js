// 测试toBe和toEqual

const can1 = {
    test:'abc',
    test2:123
}
const can2 = {
    test:'abc',
    test2:123
}

describe('test', () => {
    test('expect().toBe();', () => {
        expect(1+1).toBe(2);
        expect(1+1).not.toBe(3);
    });
    test('expect().toEqual();', () => {
        expect(can1).toEqual(can2);
    });
});

// mock用于替代整个模块


// stub用于模拟特定行为
describe('jest stub', () => {
    test('jestfn', () => {
        const mockFn = jest.fn();
        mockFn();
        expect(mockFn).toHaveBeenCalled();
    }); 
    test('returnsTrue', () => {
        const returnsTrue = jest.fn(()=>true);
        console.log(returnsTrue())
    });
});

// spy监听模块行为
