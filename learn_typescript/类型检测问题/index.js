// 当前foo函数，再被其他地方调用时，没有做任何的参数校验
// 2> 没有对是否传入参数进行校验
function foo ( message ) {
    if ( message ){
        console.log( message.length );
    }
}

foo('Hello, World');
foo('你好啊，李银河')