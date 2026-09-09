//  File :  function_callback.ts
//  User :  it
//  Date :  2026-09-09
//  Time :  오전 11:45
//  Desc :  

console.log('\n ----- 타입스크립트에서 함수 선언 -----\n');
//  함수 선언 시 매개변수에 반드시 데이터 타입을 붙여서 사용
//  반환 타입은 선택임 (반환 타입 자동 추론이 동작)
//    API 호출, 계산 함수등의 중요한 함수는 반환 타입을 명시하는 것이 좋음

//  반환 타입을 사용자가 직접 설정
function getPreview1(title: string, max: number): string {
  return title.length > max ? title.slice(0, max) + "..." : title;
}

//  반환 타입을 컴파일러가 자동으로 추론함
function getPreview2(title: string, max: number) {
  return title.slice(0, max);
}

// //  반환 타입을 입력하지 않아서 자동 추론
// function getCount1(posts: Post[]) {
//   return posts.length + '건'; // 의도는 number 타입으로 반환인데, 현재는 string 타입으로 반환, 오류 없음
// }
//
// //  반환 타입을 지정함
// function getCount2(posts: Post[]): number {
//   return posts.length + '건'; // 반환 타입이 number 타입이므로 오류 발생
// }


console.log('\n ----- 화살표 함수 -----\n');
//  타입 스크립트의 화살표 함수도 ES6 의 화살표 함수 사용법과 같음

//  화살표 함수 기본 형태
const getPreview3 = (title: string, max: number): string => {
  return title.slice(0, max);
}

let result = getPreview3('3타입스트립트에서 화살표 함수 사용', 7);
console.log(result);

//  화살표 함수 한줄 버전
const getPreview4 = (title: string, max: number): string => title.slice(0, max);

result = getPreview4('4타입스트립트에서 화살표 함수 사용', 7);
console.log(result);

//  화살표 함수에 반환값 없음 ( void 사용 )
const getPreview5 = (title: string, max: number): void => {
  console.log(title.slice(0, max));
}

getPreview5('5타입스트립트에서 화살표 함수 사용', 7);

//  화살표 함수에 반환값 없음, 한줄 버전
const getPreview6 = (title: string, max: number): void => console.log(title.slice(0, max));

getPreview6('6타입스트립트에서 화살표 함수 사용', 7);


console.log('\n ----- 선택적 매개변수, 매개변수 기본값 -----\n');
//  선택적 매개변수 : 함수의 매개변수에 옵션널을 사용하여 함수 호출 시 전달하는 데이터의 수를 조절할 수 있음 (자바의 메소드 오버로딩과 비슷)
//    해당 위치에 값이 없을 경우 undefined 로 동작
//    선택적 매개변수는 매개변수 중 가장 마지막에 위치해야 함
//  매개변수 기본값 : 선택적 파라미터와 비슷하게 동작하며, 함수 호출 시 전달하는 데이터가 없을 경우 지정한 기본값이 대신 사용됨

//  선택적 매개변수를 사용한 함수
function search1(keyword: string, page?: number) {
  console.log(`검색어 : ${keyword}`);
  console.log(page); // number | undefined
}

search1('오늘 점심 메뉴', 1);
search1('오늘 점심 메뉴');

//  선택적 매개변수를 사용한 함수, 선택적 매개변수가 다른 매개변수보다 앞쪽에 위치하여 오류 발생
//  함수 호출 시 선택적 매개변수를 생략하면 전달된 데이터가 선택적 매개변수를 의미하는지 다른 매개변수를 의미하는지 판단할 수 없음
// function search2(page?: number, keyword: string) {
//   console.log(`검색어 : ${keyword}`);
//   console.log(page); // number | undefined
// }


//  매개변수 기본값을 사용한 함수
//  선택적 매개변수를 사용하는 것보다 기본값을 사용하는 것을 추천함
function search3(keyword: string, page: number = 1) {
  console.log(`검색어 : ${keyword}`);
  console.log(`페이지 : ${page}`);
}

search3('서면 맛집', 2);
search3('서면 맛집');


console.log('\n ----- 함수 타입 표기 -----\n');
//  함수 타입 표기 : 자바스크립트는 변수에 함수를 저장하여 사용할 수 있음
//  타입 스크립트는 변수에 저장할 데이터 타입을 설정하기 위한 언어
//  타입 스크립트의 변수에 함수를 저장할 경우 저장할 수 있는 함수의 형태를 지정할 수 있음

//    매개변수        반환타입
//  (title: string) => string;

//  화살표 함수의 => 와 모양이 동일하지만 변수의 데이터 타입 입력하는 부분에 화살표 함수 형태가 있으면 해당 형태의 함수를 저장하는 타입이라는 의미가 됨

const f = (a: number) => a + 1;  // 함수
let g: (a: number) => number;  // 함수의 타입
g = f;
g(10);


//  formatter 라는 이름의 변수를 선언
//  데이터 타입을 (title: string) => string; 으로 지정
//  formatter 라는 변수에 저장할 수 있는 타입은 매개변수가 1개이면서 매개변수의 데이터 타입은 string 이고, 반환 타입은 string 인 함수만 저장할 수 있음
let formatter: (title: string) => string;

formatter = (t) => t.toUpperCase();

let funcText = '';
console.log(funcText);

funcText = formatter('abcdefg');
console.log(funcText);

console.log();

//  함수 선언(js 의 함수 선언 방식1)
function add1(x: number, y: number): number {
  return x + y;
}

//  함수 선언(js 의 함수 선언 방식2), 변수에 익명함수를 저장
const add2 = function(x: number, y:number): number {
  return x + y;
}

//  화살표 함수 형태 1
const add3 = (x: number, y: number): number => {
  return x + y;
}

//  화살표 함수 형태 2
let add4 = (x: number, y: number): number => x + y;
let addResult = add4(10, 20);
console.log(addResult);

//  변수 add4에 다른 결과를 출력하는 함수를 저장
add4 = (x: number, y: number): number => x + x + y + y;
addResult = add4(10, 20);
console.log(addResult);

//  함수를 저장할 변수에 사용자가 원하는 형태의 함수를 저장할 수 있도록 미리 함수의 형태를 지정하는 것
//  자바에서의 인터페이스 다형성과 비슷한 형태

//  add5 라는 변수에 저장할 수 있는 데이터 타입을 설정
//  저장할 수 있는 데이터 타입은 함수임
//  number 타입의 매개변수 2개, 반환타입은 number 인 함수만 저장 가능
let add5: (a: number, b: number) => number;

add5 = (x: number, y: number): number => x + y;
addResult = add5(10, 20);
console.log(addResult);

add5 = (x: number, y: number): number => x * y;
addResult = add5(10, 3);
console.log(addResult);

add5 = (x: number, y: number): number => {
  x = x * 2;
  y = y + 2;
  return x / y;
}
addResult = add5(10, 3);
console.log(addResult);

//  변수에 데이터 타입 설정, number 타입인 매개변수가 1개이며, 반환타입인 number 인 함수로 설정
let add6: (x: number) => number;

//  변수의 데이터 타입이 함수인데, 리터럴 데이터를 입력하여 오류
// add6 = 10;

//  변수의 데이터 타입과 동일한 형태의 함수를 저장
add6 = function(x: number) {
  return x * x;
}
addResult = add6(10);
console.log(addResult);

//  변수의 데이터 타입과 동일한 형태의 화살표 함수 저장
add6 = (x: number): number => x + x;
addResult = add6(10);
console.log(addResult);


console.log('\n ----- 함수의 타입의 사용자 데이터 타입으로 설정 -----\n');
//  type 명령어를 사용하면 함수의 타입도 사용자 정의 데이터 타입으로 설정 가능함

//  함수용 사용자 정의 데이터 타입 설정
type myFuncType1 = (x: number) => number;
type myFuncType2 = (x:number, y:number) => number;

//  변수의 데이터 타입을 사용자 정의 타입으로 설정
//  사용자 정의 타입과 동일한 형태의 함수를 저장
let add7: myFuncType1 = (x: number): number => x * x;
addResult = add7(10);
console.log(addResult);

//  사용자 정의 타입과 동일한 형태의 함수를 다시 저장
add7 = (x: number): number => x - x;
addResult = add7(10);
console.log(addResult);


console.log('\n ----- 콜백함수 -----\n');
//  함수의 매개변수로 함수를 받기 위하여 함수의 타입을 지정함
//  지정한 형태의 함수를 매개변수로 전달받아 콜백함수로 사용하기 위해서 함수 타입을 지정함

interface Post {
  id: number;
  title: string;
  content?: string;
}

const posts: Array<Post> = [{id: 1, title: '인터페이스로 만든 포스트의 제목 1', content: '내용1'}, {id: 2, title: '인터페이스로 만든 포스트의 제목 2'}];


//  2번째 매개변수로 함수를 입력받음
function processTitles(
  posts: Post[],
  formatter: (title: string) => string
): string[] {
  return posts.map((post) => formatter(post.title));
}

let arr_str: string[] = processTitles(posts, (t) => t.toUpperCase());
console.log(arr_str);
arr_str = processTitles(posts, (t) => t.slice(0, 10));
console.log(arr_str);


type myType = (title: string) => string;

function processTiles2(
  posts: Post[],
  formatter: myType
): string[] {
  return posts.map((post) => formatter(post.title));
}









