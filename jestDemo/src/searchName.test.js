import {searchNames,sayHelloToName} from "./searchName";
import { getNames } from "./service";
// describe('searchName', () => {
// 拦截了service里面的getNames
// jest.mock("./service", () => ({
//   getNames: jest.fn(() => ["John", "Paul", "George", "Ringo"]),
// }));
jest.mock("./service", () => ({
  getNames: jest.fn(),
}));
test("should return empty result when not search", () => {
  //given
  const keyword = "JOJO";
  getNames.mockImplementation(() => []);
  //when
  const result = searchNames(keyword);
  //then
  expect(result).toEqual([]);
});
test("should return empty result when found search", () => {
  //given
  const keyword = "John";
  getNames.mockImplementation(() => ["John", "Paul", "George", "Ringo"]);
  //when
  const result = searchNames(keyword);
  //then
  expect(result).toEqual(["John"]);
});
// });
test('should not return more than 3 matches', () => {
  //given
  const keyword = "John";
  getNames.mockImplementation(() => ["John 1", "John 2", "John 3 ", "John4"]);
  //when
  const result = searchNames(keyword);
  //then
  expect(result).toHaveLength(3);
});

test('should handle null or undefined as input', () => {
    //given
    getNames.mockImplementation(()=>[])
    //when
    
    //then
    expect(searchNames(undefined)).toEqual([]);
    expect(searchNames(null) ).toEqual([]);
});

test('should return search result is not case sensitive', () => {
    //given
    getNames.mockImplementation(() => ["John", "Paul", "George", "Ringo"]);
    //when
    
    //then
    // 目前这个测试用例是跑不通的 因为我们并没有实现这样的功能
    expect(searchNames('john')).toEqual(['John']);
});

test('should say Hello when search', () => {
    const result = sayHelloToName('JOJO LION');
    // expect(result).toEqual("Hello JOJO");
    // 能够快速的把结果显示出来
    expect(result).toMatchInlineSnapshot(`"Hello JOJO LION"`);
});