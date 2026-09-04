//  File :  operator.js
//  User :  it
//  Date :  2026-09-04
//  Time :  오후 2:51
//  Desc :  ES6의 전개연산자

//  전개연산자
//  ES6 에서 추가된 문법으로 전개 연산자 ' ... ' 사용 시 배열 혹은 object 의 전체 요소 및 요소 일부를 다른 배열이나 object 에 빠르게 출력
//  배열의 요소를 변수에 대입할 경우 대입 연산자 ' = ' 왼쪽에 배열처럼 [] 를 사용하고, [] 안에 변수를 입력 후 대입연산자 ' = ' 오른쪽에 원본 배열을 입력
//  대입 연산자 ' = ' 왼쪽에 있는 변수의 개수가 대입 연산자 오른쪽의 배열 크기보다 클 경우 null 을 대입
//  대입 연산자 ' = ' 왼쪽에 있는 변수에 값을 지정하여 기본값을 설정할 수 있음
//  대입 연산자 ' = ' 왼쪽에 있는 변수에 전개 연산자 ' ... ' 사용 시 대입 연산자 오른쪽에 있는 배열의 나머지 요소를 모두 대입

console.log('\n ----- ES5 ----- \n');
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

console.log(`원본 배열 array1 : ${array1}`);
console.log(`원본 배열 array2 : ${array2}`);

//  es5 방식, 2개의 배열 요소를 모두 출력하여 하나의 배열에 모두 직접 입력
var combined = [array1[0], array1[1], array2[0], array2[1]];
console.log(`합쳐진 배열 combined : ${combined}`);

//  es5 방식, concat() 함수를 사용하여 array1 에 array2 을 뒤에 붙여서 새로운 배열로 만듬
var combined = array1.concat(array2);
console.log(`concat() 으로 합쳐진 배열 combined : ${combined}`);

//  변수에 배열의 요소를 대입
var first = array1[0];
var second = array1[1];
//  변수에 배열의 요소 대입 시 대입할 값이 없을 경우 es5 에서는 || 로 기본값을 설정
var three = array1[2] || 'empty';
console.log(`first : ${first}`);
console.log(`second : ${second}`);
console.log(`three : ${three}`);


console.log('\n ----- ES6 -----\n');

var array1 = ['one', 'two', 3, 4, 5, 6, 7, 8, 9];
var array2 = ['three', 'four'];
console.log(`원본 배열 array1 : ${array1}`);
console.log(`원본 배열 array2 : ${array2}`);

//  전개 연산자 '...'를 사용하여 지정한 배열의 내용을 모두 출력
var combined = [...array1, ...array2];
console.log(`전개연산자로 합쳐진 배열 combined : ${combined}`);

//  구조 분해 할당을 사용하여 배열의 내용을 변수에 모두 대입
//  오른쪽에 있는 배열의 요소가 왼쪽에 있는 변수에 순서대로 대입 됨
//   변수명 뒤에 ' = 데이터 ' 을 사용하여 기본값 설정이 가능함
var [first, second, three = 'empty', ...others] = array1;
console.log(`first : ${first}`);
console.log(`second : ${second}`);
console.log(`three : ${three}`);
console.log(`others : ${others}`);

console.log(`first 의 타입 : ${typeof first}`);
console.log(`second 의 타입 : ${typeof second}`);
console.log(`three 의 타입 : ${typeof three}`);
console.log(`others 의 타입 : ${typeof others}`);





