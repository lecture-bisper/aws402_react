//  File :  dataType.ts
//  User :  it
//  Date :  2026-09-08
//  Time :  오전 9:29
//  Desc :  

// 데이터 타입 : 타입 스크립트는 자바스트립트에 데이터 타입을 추가한 것으로 여러가지 데이터 타입을 제공함
//  boolean, number, string, array, object, null, undefined, tuple, enum, any, void, unknown

//  데이터 타입은 변수 선언 시 '변수명: 타입명 = 데이터;' 형식으로 사용
//  데이터 타입은 생략 가능함(데이터 타입 자동 추론 방식을 사용하기 때문에 생략 가능함)
//  변수 선언 시 기본적으로 데이터 타입 추론 방식을 사용하고, 특정 상황에만 타입을 명시하여 사용
//    변수의 초기값이 없을 경우 타입 명시
//    변수의 초기값이 null 일 경우 타입 명시 (유니온을 사용하여 null 허용 시)
//    빈 배열을 선언할 경우 타입 명시
//    함수의 매개변수 선언 시 타입 명시
//    함수의 반환 타입 선언 시 타입 명시

console.log('\n ----- typescript 를 사용하는 이유 -----\n');

function getPreview(title: string, length: number): string {
  return title.slice(0, length);
}

let result = getPreview('공지사항입니다.', 4);
console.log(result);

//  동일한 소스코드가 자바스크립트에서는 런타임 에러로 표시되지만 타입스크립트에서는 컴파일 시점에서 오류를 표기함
// result = getPreview(4, '공지사항입니다.');
// console.log(result);


console.log('\n ----- 데이터 타입 -----\n');
//  boolean : 자바스크립트의 boolean 타입과 동일한 데이터 타입, true/false 를 구분하기 위한 타입

//  데이터 타입 추론 방식을 사용하여 boolean 타입 변수를 선언
let isBoolean = true;
console.log(isBoolean);

isBoolean = false;
console.log(isBoolean);

//  변수에 데이터 타입을 명시적으로 입력함
let isBool: boolean = true;
console.log(isBool);

isBool = false;
console.log(isBool);

//  boolean 타입으로 설정된 변수에 문자열을 입력하여 오류 발생
// isBool = '문자열';


console.log('\n ----- number -----\n');
// number : 자바스크립트의 number 와 동일한 데이터 타입
//  정수, 실수, 16진수, 8진수, 2진수 모두 지원
let decimal: number = 10;
let hex: number = 0x0f0d;
let oct: number = 0o744;
let binary: number = 0b1010;

console.log(`10진수 : ${decimal}`);
console.log(`16진수 : ${hex}`);
console.log(`8진수 : ${oct}`);
console.log(`2진수 : ${binary}`);

decimal = 20;
hex = 0xaabb;
oct = 0o762;
binary = 0b0101;

console.log(`10진수 : ${decimal}`);
console.log(`16진수 : ${hex}`);
console.log(`8진수 : ${oct}`);
console.log(`2진수 : ${binary}`);

console.log('\n ----- string -----\n');
//  string : 자바스크립트의 string 타입과 동일한 데이터 타입
//  자바스크립트처럼 작은따옴표(''), 큰따옴표(""), 백틱(``) 을 모두 지원함

const color: string = 'blue';
const fullName: string = "아이유";
let age;
age = 33;

const sentence: string = `안녕하세요. ${fullName} 입니다. 나이는 올해로 ${age} 입니다.`;

console.log(sentence);

console.log('\n ----- null, undefined -----\n');
//  null, undefined : 자바스크립트의 null, undefined 와 동일한 데이터 타입
//  데이터 없음 혹은 할당되지 않음을 의미하는 데이터 타입
//  자바스크립트에서는 null, undefined 를 변수의 데이터 타입으로 사용하지 않았지만 타입스크립트에서는 변수의 데이터 타입으로 사용할 수 있음
//  '--strictNullChecks' 나 'use strict' 를 사용 시 자신의 데이터 타입에만 해당 값을 할당 가능함(오류 방지를 위해서 해당 옵션을 켜는 것이 좋음)
//  타입스크립트의 일반 변수에 null 혹은 undefined 를 사용하려면 유니온을 사용하여 해당 타입을 저장할 수 있음을 컴파일러에 알려야함
//  매개변수나 object 타입의 요소에는 데이터 타입에 '?' 를 추가하여 null 혹은 undefined 를 사용할 수 있음(옵셔널)

//  일반 변수에 데이터 타입으로 undefined 혹은 null 을 지정하지 않을 경우 undefined 나 null 을 저장할 수 없음
let unde = 10;
let nu = 10;

console.log(unde);
console.log(nu);

//  number 타입의 변수에 undefined 나 null 을 저장할 수 없음
// unde = undefined;
// nu = null;

//  변수 선언 시 undefined 와 null 타입으로 설정
let unde2: undefined;
let nu2: null;

//  undefined 와 null 타입의 변수에 undefined 와 null 데이터를 저장
unde2 = undefined;
nu2 = null;

console.log(unde2);
console.log(nu2);

console.log('\n ----- array ----- \n');
//  array : 자바스크립트의 배열과 동일한 데이터 타입
//  타입스크립트에서는 배열 선언 시 자바와 같이 데이터 타입으로 [] 을 사용하거나 제네릭으로 Array<데이터타입> 을 사용함

const list1: number[] = [10, 20, 30, 40, 50];
const list2: Array<number> = [60, 70, 80, 90, 100];

console.log('배열 list1 : ');
console.log(list1);
console.log('배열 list2 : ');
console.log(list2);

console.log(`list1 의 0번 index 요소 : ${list1[0]}`);
console.log(`list1 의 1번 index 요소 : ${list1[1]}`);
console.log(`list1 의 2번 index 요소 : ${list1[2]}`);
console.log(`list2 의 0번 index 요소 : ${list2[0]}`);
console.log(`list2 의 1번 index 요소 : ${list2[1]}`);
console.log(`list2 의 2번 index 요소 : ${list2[2]}`);


console.log('\n ----- object ----- \n');
//  object : 기본적으로는 자바스크립트의 object 와 비슷함 (값을 저장하는 방식은 동일함)
//  key 와 value 가 1:1 로 연동되어 있는 형태와 기본 사용 방법은 같음
//  타입스크립트의 object 는 기본 타입인 number, string, boolean, bigint, symbol, null, undefined 를 제외한 모든 데이터 타입을 의미하는 데이터 타입
//  함수의 매개변수로 object 를 지정할 경우 기본 타입의 데이터를 매개변수의 값으로 사용할 수 없음
//  타입스크립트의 object 는 interface 와 함께 사용되며, 자바의 클래스처럼 형태를 만들어 줌
//  지정한 형태가 포함되어 있응ㄹ 경우 객체로 만들어지고, 포함되어 있지 않을 경우 오류 발생
//  지정한 형태 + 추가요소가 있을 경우 객체로 만들어지지만 추가 요소에는 접근이 불가능함
//  추가 요소에 접근 시 타입 검사를 우회하여 사용해야 함
//    - 자바의 다형성처럼 부토 타입의 변수에 자식 타입의 객체를 저장하면 부모 타입의 요소만 사용 가능한 것과 같음
//    - 자식 타입의 요소를 모두 사용하려면 강제 타입 변환하여 사용하던 것과 같이 타입스크립트에서는 as 를 통해서 타입 검사를 우회하여 사용해야 함

//  object 형태로 데이터를 저장
const car = { name: '아이오닉6', type: '세단', size: '중형' };
//  key명이 name 인 요소는 존재하므로 데이터가 정상 출력
console.log(car.name);
//  key 명이 color 인 요소는 존재하지 않는 요소이지만 js 에서는 문법상 오류가 아님
//  js 에서는 실행 오류가 발생하거나 undefined 가 출력됨
//  ts 에서는 해당 key 가 없을 경우 컴파일러에서 오류로 표시
// console.log(car.color);

//  ts 에서 interface 를 사용하여 사용할 데이터의 형태를 만들어 줌
interface Car { name: string, type: string, size: string }

//  사용자가 만든 object 데이터
const hyundai = { name: '아이오닉6', type: '세단', size: '중형', price: 5000 }

//  myCar 라는 변수를 생성 시 interface 로 형식을 지정한 Car 타입으로 생성
//  myCar 에 object 데이터인 hyundai 를 저장, hyundai 라는 데이터는 Car 가 가지고 있는 모든 형식을 다 가지고 있으므로 사용 가능
const myCar: Car = hyundai;
console.log(myCar);
console.log(myCar.name);
console.log(myCar.type);

//  color 는 존재하지 않는 요소이므로 문법 오류로 판단함, 컴파일 에러 발생
// console.log(myCar.color);

//  price 는 myCar 의 요소이지만, Car 타입에서 제공하는 요소가 아니므로 접근이 불가능
//  as 로 타입 체크를 우회하여 접근해야 함
// console.log(myCar.price);


console.log('\n ----- any -----\n');
//  any : 모든 데이터 타입을 저장할 수 있는 데이터 타입, any 타입은 데이터 타입을 체크하지 않음
//  타입스크립트는 데이터 타입을 사용하기 위한 언어이므로 any 를 사용하는 것은 권장하지 않음
//  배열에 여러가지 데이터 타입을 동시에 저장할 경우 사용할 수 있음
//  any 타입을 사용할 경우 주석으로 해당 부분을 표시하는 것을 권장함 (현재 사용할 데이터 타입을 결정되지 않았을 경우 any 를 사용하여 차후 해당 부분의 데이터 타입을 변경할 것이라고 주석 입력)

//  string 타입으로 변수 선언
let str1: string = '문자열';
console.log(str1);
//  string 타입의 변수에 number 데이터를 입력하여 오류 발생
// str1 = 10;


//  any 타입으로 변수 선언
let str2: any = '문자열';
console.log(str2);

//  any 타입의 변수이므로 모든 데이터 타입이 저장 가능함
str2 = 100;
console.log(str2);

const list3: Array<number> = [10, 20, 30];
console.log(list3);

list3[2] = 300;
console.log(list3);
//  number 타입의 배열에 string 타입의 데이터를 입력하여 오류 발생
// list3[2] = '삼백';


//  any 타입으로 배열 선언
const list4: Array<any> = [10, 20, 30];
console.log(list4);

list4[2] = 300;
console.log(list4);

//  any 타입의 배열이므로 모든 데이터 타입의 데이터 저장 가능
list4[2] = '삼백';
console.log(list4);


console.log('\n ----- void ----- \n');
//  void : 어떠한 타입도 존재할 수 없을 나타내는 타입
//  주로 함수의 반환 타입에 사용됨
//  void 타입의 변수 선언 시 undefined 만 저장할 수 있음
//  반환 타입 생략 시 기본으로 void 가 사용됨
//  return 키워드를 사용했을 경우 반환하는 데이터 타입으로 자동 추론 됨

function msg() {
  console.log('반환값이 없는 함수...');
}

msg();

//  변수의 데이터 타입으로 void 사용 시 undefined 만 저장 가능
let unused: void;
console.log(`unused : ${unused}`);

unused = undefined;
console.log(`unused : ${unused}`);

//  null 은 데이터 저장 후 데이터가 삭제되어 데이터 없음을 의미하므로 undefined 의 초기화되지 않음과 다르기 때문에 void 타입의 변수에 null 을 저장할 수 없음
// unused = null;
// console.log(`unused : ${unused}`);

//  void 가 어떤한 데이터도 없다는 의미이므로 다른 데이터 타입을 저장할 수 없음
// unused = 100;
// console.log(`unused : ${unused}`);


console.log('\n ----- never ----- \n');
//  never : 절대 발생할 수 없는 타입을 의미함
//  함수 선언문이나 화살표 함수 표현식에서 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입으로 사용됨

//  throw 를 사용하여 강제로 예외가 발생하여 함수가 종료되지 않음
function error(msg: string): never {
  throw new Error(msg);
}

function fail() {
  return error('파일 사용 중 오류 발생!!');
}

//  무한 루프로 동작하기 때문에 함수가 종료되지 않음
function loop(): never {
  while (true) {
    console.log();
  }
}



console.log('\n ----- tuple -----\n');
//  tuple : 요소의 타입과 개수가 고정된 형태의 데이터 타입
//  튜플은 기본적으로 배열로 구성되어 있음
//  사용 방법도 배열과 동일함
//  지정된 크기를 넘어서는 index 에 접근 시 오류 발생

//  튜플을 사용하여 저장할 배열에 저장할 형태를 지정함
let t1: [string, number] = ['아이유', 33];
console.log(t1);
console.log(`t1의 요소 : ${t1[0]}`);
console.log(`t1의 요소 : ${t1[1]}`);

//  지정한 형태와 동일한 형식의 데이터는 저장 가능
t1 = ['원이', 22];
console.log(`르센느 멤버 : ${t1[0]}, 나이 : ${t1[1]}`);

//  지정한 형태와 다른 형식의 데이터는 오류 발생
// t1 = [22, '원이'];
// console.log(`르센느 멤버 : ${t1[1]}, 나이 : ${t1[0]}`);

//  2개의 데이터를 입력할 수 있는 튜플에 3개의 데이터를 입력하여 오류 발생
// t1 = ['원이', 22, '리더'];
// console.log(`르센느 멤버 : ${t1[0]}, 나이 : ${t1[1]}`);


console.log('\n ----- enum ----- \n');
//  enum : 자바나 C/C++ 같은 언어에서 제공하는 열거형과 동일한 데이터 타입
//  지정한 데이터의 집합에 이름을 제공할 수 있음
//  enum 의 기본값은 0부터 시작하여 1씩 상승함, 수동으로 번호를 설정할 수 있음
//  리액트에서는 enum 보다 리터럴을 많이 사용하는 추세임

//  열거형 타입 Color 을 선언, 기본값을 사용하여 0부터 시작
enum Color { RED, GREEN, BLUE }

let c: Color = Color.RED;
c = Color.GREEN;
console.log(`저장된 색상 : ${c}`);

//  열거형 타입 Color2 선은, 시작 값을 1 로 설정
enum Color2 { RED = 1, GREEN, BLUE }
let c2: Color2  = Color2.RED;
console.log(c2);
//  c2 는 Color2 타입을 저장할 수 있는데, Color 타입의 데이터를 저장하여 오류 발생
// c2 = Color.BLUE;
// console.log(c2);

//  열거형의 데이터에 번호를 각각 설정할 수 있음
enum Color3 { RED = 100, GREEN = 200, BLUE = 300 }
const c3 = Color3.BLUE;
console.log(c3);












