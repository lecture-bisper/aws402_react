//  File :  objects2.js
//  User :  it
//  Date :  2026-09-04
//  Time :  오후 4:09
//  Desc : 객체 확장 표현식 / 구조 분해 할당

//  배열의 구조 분해 할당
//  ES6 에서 구조 분해 할당 방식을 제공하여 배열이나 object 의 데이터를 변수에 쉽게 대입할 수 있도록 함
//  1. 배열의 요소를 변수에 대입할 경우 대입 연산자 ' = ' 왼쪽에 배열처럼 [] 를 사용하고 [] 안에 변수명을 여러개 입력
//  2. 대입 연산자 ' = ' 오른쪽에 데이터를 출력할 배열을 입력
//  3. 왼쪽의 변수에 ' = 데이터 ' 를 사용하여 변수에 기본값을 설정할 수 있음
//  4. 배열의 순서대로 변수에 입력됨

//  object 의 구조 분해 할당
//  1. object 의 요소를 변수에 대입할 경우 대입 연산자 ' = ' 왼쪽에 object 처럼 {} 사용하고 {} 안에 변수명을 여러개 입력
//  2. 대입 연산자 ' = ' 오른쪽에 데이터를 출력할 object 변수를 입력
//  3. 왼쪽의 변수명과 오른쪽의 object 요소의 key 명이 일치할 경우 object 요소의 value가 대입됨
//  4. 변수명과 key 명이 다를 경우 변수에 null 이 대입 됨
//  5. 배열의 구조 분해 할당처럼 변수에 기본값을 설정할 수 있음
//  6. 왼쪽에 있는 변수 뒤에 ' :새변수명 ' 을 사용하여 key 명과 동일한 변수에 데이터를 저장하고 새로운 변수에 대입된 값을 복사하여 저장할 수 있음


console.log('\n ----- ES5 -----\n');

var list = [0, 1];
var item1 = list[0];
var item2 = list[1];
var item3 = list[2] || -1;

console.log(`원본 배열 list = ${list}`);
console.log(`대입받은 변수 item1 = ${item1}`);
console.log(`대입받은 변수 item2 = ${item2}`);
console.log(`대입받은 변수 item3 = ${item3}`);

console.log();

console.log(`원본 item1 의 값 : ${item1}`);
console.log(`원본 item2 의 값 : ${item2}`);

//  ES5 방식에서는 2개의 변수값을 서로 교환하려면, 임시 저장 변수가 필요함
var temp = item2;
item2 = item1;
item1 = temp;

console.log(`바꾼 후 item1 의 값 : ${item1}`);
console.log(`바꾼 후 item2 의 값 : ${item2}`);

console.log();

var obj = {
    key1: 'one',
    key2: 'two',
};

var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'key3 에 설정된 기본값';
var newKey = key1;

console.log(`원본 obj 의 값 :`);
console.log(obj);
console.log(`대입받은 변수 key1 : ${key1}`);
console.log(`대입받은 변수 key2 : ${key2}`);
console.log(`대입받은 변수 key3 : ${key3}`);
console.log(`대입받은 변수 newKey : ${newKey}`);


console.log('\n ----- ES6 -----\n');

var list = [0, 1];
//  ES6 의 구조 분해 할당을 사용하여 배열의 데이터를 변수에 대입
var [item1, item2, item3 = -1] = list;

console.log(`원본 배열 list = ${list}`);
console.log(`대입받은 변수 item1 = ${item1}`);
console.log(`대입받은 변수 item2 = ${item2}`);
console.log(`대입받은 변수 item3 = ${item3}`);

console.log();

console.log(`원본 item1 의 값 : ${item1}`);
console.log(`원본 item2 의 값 : ${item2}`);

//  ES6 에서는 swap 진행 시 구조 분해 할당 방식을 사용하여 중간에 임시 저장 변수가 필요없음
[item2, item1] = [item1, item2];

console.log(`바꾼 후 item1 의 값 : ${item1}`);
console.log(`바꾼 후 item2 의 값 : ${item2}`);

console.log()

var obj = {
    key1: 'one',
    key2: 'two'
};

//  ES6의 구조 분해 할당을 사용하여 object 의 key 와 동일한 이름의 변수에 value 대입
var { key2, key1: newKey, key3 = 'key3 에 설정된 기본값' } = obj;

console.log(`원본 obj의 값 :`);
console.log(obj);
console.log(`대입받은 key1 의 값 : ${key1}`);
console.log(`대입받은 key2 의 값 : ${key2}`);
console.log(`대입받은 key3 의 값 : ${key3}`);
console.log(`대입받은 newKey 의 값 : ${newKey}`);








