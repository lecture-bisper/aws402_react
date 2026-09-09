//  File :  union_optional_null.ts
//  User :  it
//  Date :  2026-09-09
//  Time :  오전 9:32
//  Desc :  

console.log("\n ----- 유니온 -----\n");
//  유니온 : 타입스크립트는 변수에 기본적으로 하나의 데이터 타입만 저장하도록 되어 있음
//  여러가지 데이터 타입을 변수에 저장해야 하는 경우가 발생함
//  유니온을 사용하면 하나의 변수에 여러개의 데이터 타입을 저장할 수 있음
//  변수의 데이터 타입 설정 시 '|' 를 사용하여 사용하고자 하는 데이터 타입을 여러개 입력

//  타입스크립트의 일반 변수에 사용 데이터 타입을 number 타입으로 설정
let a: number = 1;
console.log(`변수 a : ${a}`);
a = 10;
console.log(`변수 a : ${a}`);
// a = '문자열';
// console.log(`변수 a : ${a}`);

//  타입스트립트의 일반 변수에 사용 데이터 타입을 유니온을 사용하여 number 와 string 을 모두 저장할 수 있는 타입으로 설정
let b: number | string = 100;
console.log(`변수 b : ${b}`);
b = 200;
console.log(`변수 b : ${b}`);
b = '문자열';
console.log(`변수 b : ${b}`);

let c: number | boolean | string = true;
console.log(`변수 c : ${c}`);
c = 300;
console.log(`변수 c : ${c}`);
c = '문자열';
console.log(`변수 c : ${c}`);

console.log();

//  현재 변수 d 는 number 타입으로 설정되어 null 을 저장할 수 없음
//  유니온으로 null 을 추가 지정하면 null 을 저장할 수 있음
let d: number | null = 400;
console.log(`변수 d : ${d}`);
d = 500;
console.log(`변수 d : ${d}`);
d = null;
console.log(`변수 d : ${d}`);


console.log('\n ----- optional -----\n');
//  옵셔널 : 변수 뒤에 ? 기호를 붙여 놓은 것, 해당 변수에 데이터가 있을 수도 있고 없을 수 있음
//  데이터가 있을 경우 지정한 타입의 데이터가 존재하고, 아니면 undefined 와 같음
//  일반 변수에는 사용할 수 없음
//  interface 와 같은 객체의 요소에 붙여서 사용
//  함수 선언부에서 매개변수에 붙여서 사용

//  일반 변수에는 옵셔널을 사용할 수 없음
// let e?: number = 10;

interface Post1 {
  id: number,
  title: string,
  //  옵셔널 사용, string 타입의 데이터를 입력하거나 아니면 undefined 임
  content?: string,
}

const post11: Post1 = { id: 1, title: '테스트 1' };
const post12: Post1 = { id: 2, title: '테스트 2', content: '옵셔널 사용' };
const post13: Post1 = { id: 3, title: '테스트 3', content: undefined };
console.log(post11);
console.log(post12);
console.log(post13);

interface Post2 {
  id: number,
  title: string,
  //  유니온을 사용하여 string 타입이나 null 을 입력할 수 있도록 데이터 타입 설정
  content: string | null,
}

//  옵셔널(?) 과 유니온의 (| null) 의 차이는 옵셔널은 해당 요소가 선언되지 않을 수 있다는 의미이고, 유니온의 | null 은 해당 요소는 존재하고, 해당 요소의 데이터가 없음을 의미

// 클라이언트가 서버로 데이터 전송 시에 사용하는 데이터에는 옵셔널을 사용
// 서버에서 클라이언트로 응답하는 데이터에는 유니온 사용, 스프링부트 백엔드가 null 을 전달하기 때문에 유니온의 | null 을 사용하는 것이 좋음 (옵셔널 사용 시 null 을 받을 수 없기 때문에 오류 발생)

// const post21: Post2 = { id: 21, title: '테스트 21' };
// console.log(post21);
const post22: Post2 = { id: 22, title: '테스트 22', content: '유니온 사용' };
console.log(post22);


console.log('\n ----- 타입 좁히기 ----- \n');
//  유니온 타입 사용 시 그대로 사용하면 오류 발생 가능성이 있음
//  오류가 발생하지 않도록 예외처리를 해야 함
//  1. if 문으로 null 아닐 때만 사용
//  2. 매개변수로 데이터를 입력받아서 null 이 아닐 때 사용
//  3. 옵셔널 체이닝 (?.) 을 사용
//  4. nullish 사용 (?? , ||)

//  객체 selected 가 null 일 가능성이 있기 때문에 오류 발생
// let selected: Post1 | null = null;
// console.log(selected.title);

console.log('\n ----- if 문으로 처리 -----');
let selected: Post1 | null = null;

//  null 아닐때는 정상 실행, null 이면 실행 안함
if (selected !== null) {
  console.log(selected.title);
}


console.log('\n ----- 함수의 매개변수로 받아서 if 로 처리 -----');
//  !post 는 falsy 로 판단되는 데이터에 대해서 모두 동작
//  falsy 는 자바스크립트에서 false 로 판단하는 데이터를 모두 falsy 라고 함
//  null, undefined, 빈문자열('', "", ``), 0, 0.0, [], {} 을 모두 falsy 임 (데이터가 없으면 falsy)
//  숫자 0 이나 빈 문자열이 유효한 값으로 사용될 경우에는 문제가 될 수 있음

function PostDetail(post: Post1 | null) {
  if (!post) {
    return "게시물을 선택하세요";
  }

  return `${post.title} / ${post.content}`;
}

function showCount(count: number | null) {
  if (!count) {
    return "없음";  // 매개변수로 0 이 들어오면 falsy 인식하여 "없음" 을 출력
  }
  else {
    return `${count} 건`;
  }
}

//  null 일 때만 '없음' 을 출력, 0 일 때는 '0 건' 을 출력
function showCount2(count: number | null) {
  if (count === null) {
    return "없음";
  }
  return `${count} 건`;
}

console.log('\n ----- 옵셔널 체이닝으로 처리 -----');
//  옵셔널 체이닝 : 옵셔널로 지정된 요소를 사용 시 해당 요소 이름 뒤에 '?.' 을 추가하여 사용하는 방식
//  해당 요소에 데이터가 있으면 그대로 진행
//  해당 요소에 데이터가 null 이면 undefined 로 진행

//  !. : 옵셔널을 사용한 요소는 데이터가 있거나 혹은 undefined 로 설정되어 있는데, 해당 요소를 사용 시 !. 을 붙여서 사용하면, 해당 요소가 실행 시점에 반드시 데이터가 있다는 의미로 사용됨

//  selected 객체가 존재 시 해당 객체를 사용, null 이면 undefined 로 사용
const title = selected?.title;

//  selected 객체가 원래 옵셔널이기 때문에 데이터가 있거나 undefined 이지만, !. 를 사용 시 해당 코드가 실행되는 시점에는 무조건 데이터가 있는 것이므로 해당 데이터를 사용하라는 의미
const title2 = selected!.title;

console.log('\n ----- nullish 병합 ??, || -----')
//  nullish 병합 : ES6 의 기본값 설정과 비슷함
//  ?? : 지정한 변수에 데이터가 있을 경우 해당 데이터 사용, 없을 경우 연산자 오른쪽의 데이터 사용
//      null, undefined 일 때 오른쪽의 데이터 사용
//  || : 지정한 변수에 데이터가 있을 경우 해당 데이터 사용, 없을 경우 연산자 오른쪽의 데이터 사용
//      falsy 로 판단되는 모든 데이터에 대해서 오른쪽의 데이터 사용

//  사용법 :
//  변수명 || 데이터;
//  변수명 ?? 데이터;

const count1 = post11.title || 0; // 0, '', false 도 전부 연산자 오른쪽의 데이터를 사용
const count2 = post11.title ?? 0; // null, undefined 일 경우에만 오른쪽의 데이터를 사용

// 기본값 설정 시 ?? 를 사용하는 것이 좋음
const viewCount: number | null = 0;
console.log(viewCount || 100); // 실제 데이터가 0 인데, 화면에 100을 출력
console.log(viewCount ?? 100); // 실제 데이터 0 이 출력, 저장된 데이터가 null 일 경우에만 100을 출력


// !. 를 사용하는 것은 실제 null 이 들어오면 오류가 발생할 수 있으므로 사용하지 않는 것이 좋음
//  as 를 사용한 타입 단언 방식도 사용하지 않는 것이 좋음

const selected2: Post1 | null = null;

//  저장된 데이터가 반드시 있다는 의미지만 실제 데이터는 null 일 경우 오류가 발생함
console.log(selected2!.title);
//  'selected2 의 데이터 타입은 반드시 Post1 이다' 라고 컴파일러에게 단정하에 알려주기 때문에 실제 null 이 들어오면 오류가 발생함
console.log((selected2 as Post1).title);























