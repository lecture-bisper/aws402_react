//  File :  objects1.js
//  User :  it
//  Date :  2026-09-04
//  Time :  오후 3:27
//  Desc :  객체 확장 표현식 / 구조 분해 할당

//  객체 확장 표현식
//  ES6 에서 object 를 쉽게 사용할 수 있도록 개선
//  object 의 변수를 선언 시 선언과 동시에 값을 설정할 경우 value 부분에 이미 선언되어 있는 변수를 사용하면 key 명을 생략할 수 있음
//      value 로 사용되는 변수명이 key 명과 동일할 경우 변수명이 key 명으로 사용되고, 변수의 값이 value 로 인식됨
//      object 에 함수를 선언하여 사용 시 key 를 생략하고 함수명을 key 명으로 사용


console.log('\n ----- ES5 -----\n');

//  변수 선언
var x = 10;
var y = 20;

//  object 변수 선언 시 object 데이터를 직접 대입
//  object 변수의 key 명과 value 로 사용된 변수의 이름이 같음
var obj = { x: x, y: y };
console.log(obj);

var randomKeyString = 'other';
//  빈 object 생성
var combined = {};

//  빈 object 에 새 key 와 value 를 입력
combined['one' + randomKeyString] = 'some value';
console.log(combined);

//  object 에 변수와 함수를 함께 선언
var obj2 = {
    x: x,
    methodA: function() {
        console.log('methodA');
    },
    methodB: function() {
        return 0;
    }
};

console.log(obj2);
console.log(obj2.x);
obj2.methodA();
console.log(obj2.methodB());


console.log('\n ----- ES6 -----\n');

var x = 10;
var y = 20;

//  ES6 방식으로 object 변수를 선언하고 동시에 데이터 입력 시 value 로 입력될 값이 이미 선언된 변수를 사용할 경우 key 이름과 변수의 이름이 같으면 key 명을 생략할 수 있음
//  변수명이 key명이 되고 변수의 값이 value 가 됨
var obj = { x, y };
console.log(obj);

//  object 타입 선언 시 key 명을 설정할 때 문자열과 다른 타입의 연결하여 임의의 key로 만들 수 있음
var randomKeyString = 'other';
var combined = { ['one' + randomKeyString]: 'some value' };
console.log(combined);

//  ES6 의 object 에 함수를 저장할 경우 key명을 생략 후 함수를 그대로 입력하여 함수명을 key 명으로 사용할 수 있음
var obj2 = {
    x,
    methodA() {
        console.log('methodA');
    },
    methodB() {
        return 0;
    }
}

console.log(obj2);
console.log(obj2.x);
obj2.methodA();
console.log(obj2.methodB());











