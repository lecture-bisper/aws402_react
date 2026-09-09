//  File :  map.js
//  User :  it
//  Date :  2026-09-07
//  Time :  오후 1:56
//  Desc :  배열 함수 map

//  배열 관련 함수 map
//  ES6에서 추가된 배열 관련 함수
//  forEach 와 비슷한 기능을 가지고 있는 함수, 사용법이 동일함
//  forEach 는 반환값이 없으나, map 은 반환값이 있음
//  map 함수를 통해서 실행된 내용을 모아서 새로운 배열로 출력
//  map 의 매개변수로 콜백함수를 받아서 사용함
//      - > const 새배열명 = 배열명.map(function(currentValue, index, array) {
//              반복 실행할 소스코드 ...
//              return 반환할 값;
//          });
//      - currentValue : 필수 입력, 지정한 배열에서 하나씩 출력된 값
//      - index : 옵션, 지정한 배열에서 출력된 요소의 index 번호
//      - array : 옵션, 지정한 배열, 원본 배열에 접근할 수 있음


console.log('\n ----- map() 사용하기 -----\n');

const numbers = [10, 20, 30, 40, 50];
console.log('원본 배열 numbers : ');
console.log(numbers);

console.log('\n ----- for ~ in 문 으로 출력 -----\n');

for (let item in numbers) {
    console.log(`index : ${item}, value : ${numbers[item]}`);
}

console.log('\n ----- forEach() 로 출력 -----\n');

numbers.forEach(function(item, index) {
    console.log(`index : ${index}, value : ${item}`);
});

console.log('\n ----- map() 으로 출력 -----\n');

numbers.map(function(item, index) {
    console.log(`index : ${index}, value : ${item}`);
});

console.log('\n ----- forEach()와 map() 의 차이점 -----\n');

let newArray = [];

console.log('\n ----- forEach() 실행 -----');
newArray = numbers.forEach( (item, index) => {
    console.log(`index : ${index}, value : ${item}`);
    return item * 2;
});

console.log('forEach() 에서 반환한 값 : ');
console.log(newArray);

console.log();

console.log('\n ----- map() 실행 -----');
newArray = numbers.map( (item, index) => {
    console.log(`index : ${index}, value : ${item}`);
    return item * 2;
});

console.log('map() 에서 반환한 값 : ');
console.log(newArray);








