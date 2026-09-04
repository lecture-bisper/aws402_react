//  File :  templateString.js
//  User :  ${USER}
//  Date :  ${YEAR}-${MONTH}-${DAY}
//  Time :  2026-09-04
//  Desc :

// 리액트는 Javascript 의 ES6 문법을 사용

//  템플릿 문자열
//  ES6 문법에서 문자열의 연산식과 함께 사용 시 조금 더 쉽게 입력하기 위한 방식으로 템플릿문자열을 제공함
//  문자열을 표현하기 위해서 ""(큰따옴표), ''(작은따옴표) 대신 ``(백틱) 으로 문자열을 감싸서 문자열을 표현함
//  `` 을 사용한 문자열 안에서 ${변수} 를 사용하여 문자열과 변수를 함께 표현
//  ${} 안에서 간단한 연산도 가능함

//  ES5 문법
console.log('\n ----- ES5 -----\n');

var string1 = '안녕하세요';
var string2 = '반갑습니다.';

var greeting = string1 + ' ' + string2;
var product = {name: '리액트 프런트엔드 개발 입문', price: '42,000원'};

var message = '도서 ' + product.name + '의 가격은 ' + product.price + '입니다.';

var value1 = 1;
var value2 = 2;
var boolValue = false;

var operator1 = '곱셈값은 ' + value1 * value2 + '입니다.';
var operator2 = '불리언 값은 ' + (boolValue ? '참' : '거짓') + '입니다.';
var multiline = '문자열 1\n문자열 2';

console.log(string1);
console.log(string2);
console.log(greeting);
console.log(product);
console.log(message);
console.log(operator1);
console.log(operator2);
console.log(multiline);


console.log('\n ----- ES6 ----- \n');

var string1 = '안녕하세요';
var string2 = '반갑습니다.';

//  문자열 표현 시 ``(백틱) 을 사용함
//  문자열 연결 연산자 ' + ' 없이 `` 안에 ${변수} 형태로 문자열과 함께 변수를 사용
var greeting = `${string1} ${string2}`;

var product = {name: '리액트 프런트엔드 개발 입문', price: '42,000원'};
//  템플릿 문자열을 통해서 object 타입의 데이터도 출력 가능
var message = `도서 ${product.name}의 가격은 ${product.price}입니다.`;

var value1 = 1;
var value2 = 2;
var boolValue = false;

//  템플릿 문자열 사용 시 문자열 안에서 연산식을 사용할 수 있음
var operator1 = `곱셈값은 ${value1 * value2} 입니다.`;
var operator2 = `불리언 값은 ${boolValue ? '참' : '거짓'}입니다.`;
var multiline = `문자열 1
문자열 2`;


console.log(string1);
console.log(string2);
console.log(greeting);
console.log(product);
console.log(message);
console.log(operator1);
console.log(operator2);
console.log(multiline);











