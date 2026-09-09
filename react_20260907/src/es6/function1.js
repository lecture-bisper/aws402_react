//  File :  function1.js
//  User :  it
//  Date :  2026-09-07
//  Time :  오전 9:16
//  Desc :  화살표 함수 (람다식)


// ES6의 화살표 함수
//  ES6에서는 람다식을 사용하여 함수를 선언하는 화살표 함수를 제공함
//  'function' 키워드를 생략하고, 매개변수를 입력 후 화살표 ' => ' 기호를 사용함
//  화살표 ' => ' 기호 다음에 코드 블럭 {} 을 사용하여 소스 코드를 입력
//  코드 블럭의 내용이 return 한 줄만 존재하는 경우 코드 블럭 생략 가능
//  매개변수가 1개일 경우 괄호 () 생략 가능함
//  매개변수가 없을 경우 괄호가 필수
//  반환타입이 object 일 경우 반드시 괄호로 감싸야 함

console.log('\n ----- ES5 에서의 함수 선언 -----\n');

//  ES5 의 함수 선언 기본 방식
function add1(num1, num2) {
    return num1 + num2;
}

//  ES5 의 함수 선언 다른 방식
var add2 = function(num1, num2) {
    return num1 + num2;
}

console.log(`함수 add1() 호출 : ${add1(10, 20)}`);
console.log(`함수 add2() 호출 : ${add2(10, 20)}`);
console.log(`함수 add1의 타입 : ${typeof add1}`);
console.log(`함수 add2의 타입 : ${typeof add2}`);


console.log('\n----- ES6의 화살표 함수 -----\n');

//  ES6에서는 람다식을 사용하는 화살표 함수가 추가 됨
//  화살표 함수의 기본 선언 방식
const sum1 = (num1, num2) => {
    return num1 + num2;
}

//  화살표 함수에서 함수의 내용이 return 문 1개만 있을 경우 return 과 코드 블럭 {} 생략
const sum2 = (num1, num2) => num1 + num2;

console.log(`함수 sum1() 호출 : ${sum1(10, 20)}`);
console.log(`함수 sum2() 호출 : ${sum2(10, 20)}`);
console.log(`함수 sum1의 타입 : ${typeof sum1}`);
console.log(`함수 sum2의 타입 : ${typeof sum2}`);

console.log();

//  화살표 함수에서 매개변수가 1개이면서 소스코드도 1줄인 것
const sum3 = (num1) => num1 + num1;
console.log(`함수 sum3() 호출 : ${sum3(10)}`);

//  화살표 함수에서 매개변수와 소스코드가 1줄일 경우 매개변수의 괄호 () 도 생략 가능
const sum4 = num1 => num1 + num1;
console.log(`함수 sum4() 호출 : ${sum4(10)}`);

console.log();

//  화살표 함수 사용 시 소스코드가 1줄만 있고, 해당 소스코드가 return 이 아니라도 코드 블럭 생략 가능
const sum5 = () => { console.log('매개변수가 없는 화살표 함수 '); }
//  화살표 함수 선언 시 매개변수가 없을 경우 () 를 반드시 입력해야 함
const sum6 = () => console.log('매개변수가 없는 화살표 함수');

sum5();
sum6();

//  화살표 함수 사용 시 코드 블럭의 소스코드가 여러줄 일 경우 코드 블럭 필수
const sum7 = num1 => {
    const result = num1 + num1;
    return result;
}

console.log(`함수 sum7() 호출 : ${sum7(10)}`);

console.log();

//  반환값을 object 타입을 반환할 경우 반드시 괄호 () 로 감싸야 함
const sumAndMulti = (num1, num2) => ( { sum: num1 + num2, multi: num1 * num2 } );
console.log(sumAndMulti(10, 20));


console.log('\n ----- 함수를 반환할 때 ES5 방식 ----- \n');

function func1(num) {
    let value = num;

    return function(value) {
        return num + value;
    }
}

//  함수를 반환
console.log(func1(10));
//  func1() 을 변수 result 에 저장, 변수 result 를 사용하여 대신 실행
let result = func1(10);
//  변수 result 의 이름을 함수를 호출
console.log(result(10));

console.log('\n ----- 함수를 반환할 때 ES6 방식 ----- \n');

//  함수의 반환값이 익명함수인 것을 화살표 함수로 표현
const func2 = num => value => num + value;

console.log(func2(10));
result = func2(10);
console.log(result(10));

//  위의 내용을 한번에 표현하는 다른 방식
console.log(func2(10)(10));




