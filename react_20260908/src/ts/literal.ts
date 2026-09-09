//  File :  literal.ts
//  User :  it
//  Date :  2026-09-08
//  Time :  오후 12:37
//  Desc :  

console.log('\n ----- 리터럴 타입 -----\n');
//  리터럴 타입 : 타입스트립트에서 enum과 비슷하게 사용자가 사용할 수 있는 데이터를 제한하도록 하는 데이터 타입
//  문자열 리터럴 타입과 숫자 리터럴 타입이 존재함
//  리터럴은 ' | ' 를 사용하여 변수에 저장할 수 있는 데이터를 지정할 수 있음
//  지정된 데이터가 아닌 데이터를 오류 발생

let status: 'DRAFT' | 'PUBLISHED' | 'DELETED' = 'DRAFT';
console.log(`현재 상태 : ${status}`);

status = 'DELETED';
console.log(`변경된 상태 : ${status}`);

status = 'DEBUG';
console.log(`변경된 상태 : ${status}`);

let num: 1|2|3|4|5|6 = 6;
console.log(`저장된 숫자 : ${num}`);

num = 1;
console.log(`변경된 숫자 : ${num}`);

num = 10;
console.log(`변경된 숫자 : ${num}`);











