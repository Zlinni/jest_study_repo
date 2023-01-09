import * as services from './service';

// 如果数据大于三个返回三个 小于三个直接返回
export const searchNames = (keyword)=>{
    const matches = services.getNames().filter((name)=>{
        return name.toUpperCase().includes(keyword.toUpperCase());
    })
    return matches.length>3?matches.slice(0,3):matches;    
}
export const sayHelloToName = (name)=>{
    return 'Hello '+name;
}