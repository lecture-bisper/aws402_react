//  File :  interface_type.ts
//  User :  it
//  Date :  2026-09-08
//  Time :  오후 2:01
//  Desc :  


console.log('\n ----- 인터페이스 사용하기 -----\n');

//  interface : 타입 스크립트의 타입 검사를 통과하기 위한 데이터의 형태를 지정하는 것
//  타입 스크립트의 타입 검사는 값의 형태가 같으면 타입을 통과함
//  사용하고자 하는 사용자 데이터 타입을 선언 시 사용 (자바의 DTO 클래스와 비슷)

//  변수 post 에 사용할 데이터 타입 지정
let post: { id: number, title: string, writer: string } = { id: 1, title: '테스트 제목 1', writer: 'tester1'};

console.log(`원본 post :`);
console.log(post);
console.log(`id : ${post.id}, title : ${post.title}, writer : ${post.writer}`);

post = { id: 2, title: '테스트 제목 2', writer: 'tester2' };
console.log(`id : ${post.id}, title : ${post.title}, writer : ${post.writer}`);


//  변수 post2, post3 에 사용할 데이터 타입을 object 로 지정, 데이터 입력
let post2: {id: number, title: string, writer: string} = {id: 2, title: '테스트 제목2', writer: 'tester2'};
const post3: {id: number, title: string, writer: string} = {id: 3, title: '테스트 제목3', writer: 'tester3'};
console.log(post2);
console.log(post3);

interface Post {
  id: number,
  title: string,
  writer: string
}

const post4: Post = {id: 4, title: '테스트 제목4', writer: 'tester4'};
const post5: Post = {id: 5, title: '테스트 제목5', writer: 'tester5'};
console.log(post4);
console.log(post5);

//  지정한 데이터 타입인 Post 에는 writer 이 존재하는데 대입한 object 에는 writer 요소가 부족함
// const a: Post = {id: 1, title: '제목1'};
//  지정한 데이터 타입보다 요소가 초과함, 객체 리터럴을 직접 대입할 경우 발생
//  변수에 저장 후 대입 시는 오류 없음
// const b: Post = {id: 2, title: '제목2', writer: 'test2', viewCount: 10};
//  오타가 발생하여 오류 발생,
// const c: Post = {id: 3, titel: '제목3', writer: 'test3'};


//  json 데이터 파싱
// {
//   'id': 1,
//   'title': '공지사항',
//   'writer': {'id': 7, 'name': '홍길동', 'email': 'hong@bitc.ac.kr'},
//   'tags': ['공지', '필독'],
//   'comments': [
//     { 'id': 100, 'content': '확인했습니다.', 'writerName': '아이유'}
//   ]
// }

// json 데이터 타입 중 작은 것부터 interface 로 변환하여 사용
// 인터페이스로 사용자 데이터 타입을 설정

interface Writer {
  id: number,
  name: string,
  email: string
}

interface Comm {
  id: number,
  content: string,
  writerName: string
}


interface Post2 {
  id: number,
  title: string,
  writer: Writer,
  tags: Array<string>,
  comments: Array<Comm>
}

const user1: Writer = {
  id: 123,
  name: '테스터 5',
  email: 'tester5@bitc.ac.kr'
};

const comm1: Comm = {
  id: 1001,
  content: '글 내용 10',
  writerName: '테스터 5'
}

const comm2: Comm = {
  id: 1002,
  content: '글 내용 11',
  writerName: '테스트 6'
}

const post6: Post2 = {
  id: 10,
  title: '제목 10',
  writer: user1,
  tags: ['공지', '필독', '자유'],
  comments: [comm1, comm2]
}

console.log(post6);


console.log('\n ----- type ----- \n');
//  type : interface 처럼 객체의 모양을 정의하여 사용자 정의 타입을 설정

//  interface 와 type의 차이
//  interface 는 선언 시 ' = ' 가 없음
//  type 은 선언 시 ' = ' 를 사용, 끝에 ' ; ' 를 붙임
//  객체의 모양 선언 시 interface 사용, 나머지는 type 사용

//  type 은 유니온 타입을 설정할 수 있음 (interface 는 유니온 사용 불가)
//  type 은 별칭 사용 가능 (interface 는 별칭 사용 불가)
//  type 은 튜플 사용 가능 (interface 튜플 사용 불가)

//  interface 선언 병합 가능
//    interface 선언 시 동일한 이름으로 인터페이스를 2개 이상 선언하고, 다른 요소를 각각 입력 시 모든 요소가 통합된 하나의 인터페이스로 사용이 가능함

//  인터페이스로 선언한 사용자 타입
interface Post3 {
  id: number,
  title: string
}

//  type 으로 선언한 사용자 타입
type Post4 = {
  id: number,
  title: string
};

//  결과물은 동일함
const post31: Post3 = { id: 30, title: '인터페이스로 만든 사용자 정의 타입'};
const post41: Post4 = { id: 40, title: 'type으로 만든 사용자 정의 타입'};
console.log(post31);
console.log(post41);

console.log('\n ----- type 전용 -----');

//  유니온으로 설정
type PostStatus = 'DRAFT' | 'PUBLISHED';
//  별칭 설정, Id 라는 사용자 타입이 실제로는 number 임, number 타입에 대한 별칭을 'Id' 라고 설정
type Id = number;
//  튜플 설정
type Point = [number, number];

let postStat: PostStatus = 'DRAFT';
console.log(`postStat : ${postStat}`);
postStat = 'PUBLISHED';
console.log(`postStat : ${postStat}`);

let num5: number = 10;
let num6: Id = 20;
console.log(`num5 : ${num5}`);
console.log(`num6 : ${num6}`);
num5 = 100;
num6 = 200;
console.log(`num5 : ${num5}`);
console.log(`num6 : ${num6}`);

let t5: Point = [100, 200];
console.log(`t5 : ${t5}`);
t5 = [1000, 2000];
console.log(`t5 : ${t5}`);

console.log('\n ----- interface 전용 -----');

//  동일한 이름의 인터페이스를 여러개 만들면, 서로의 요소를 합하여 하나의 인터페이스로 만들어 짐
interface Post5 { id: number }
interface Post5 { title: string }
interface Post5 { writer: string }

let post51: Post5 = { id: 51, title: '인터페이스 선언 병합으로 사용자 타입 선언', writer: 'tester5'};
console.log(post51);
post51 = { id: 52, title: '내용 변경', writer: 'tester5'};
console.log(post51);

console.log('\n ----- interface 상속 -----\n');
//  interface 선언 시 extends 키워드를 사용하면 다른 interface 의 요소를 상속받아 사용할 수 있음
//  interface 의 다중 상속도 가능함

interface PostSummary {
  id: number;
  title: string;
  writer: string;
  createdAt: string
}

//  기존 인터페이스의 요소를 extends 로 상속받아 사용함
interface PostDetail extends PostSummary {
  content: string,
  comments: Comm[]
}

let post61: PostSummary = { id: 61, title: '기본 post 내용', writer: 'test6', createdAt: '20260908'};
console.log(post61);
post61 = { id: 61, title: '내용 수정된 post', writer: 'test6', createdAt: '20260908 15:34'};
console.log(post61);

const post62: PostDetail = { id:62, title: '추가된 내용의 post', writer: 'test62', createdAt: '20260908 15:35', content: 'PostSummary 를 상속받아 더 많은 요소 사용', comments: [comm1, comm2]};
console.log(post62);


console.log();

interface TimeStamped {
  createdAt: string,
  updatedAt: string,
}

interface Authored {
  writer: string,
}

//  extends 를 사용하여 인터페이스의 다중 상속이 가능함
interface Post7 extends TimeStamped, Authored {
  id: number,
  title: string,
}

const post71: Post7 = { id: 71, title: 'interface 다중 상속', writer: '테스터7', createdAt: '20260908 15:57', updatedAt: '20260908 16:00' };
console.log(post71);

console.log('\n ----- 구조적 타이핑 -----\n');
//  구조적 타이핑 : 자바의 경우는 이름이 같아야 같은 데이터 타입(명목적 타이핑)으로 인식하지만 타입스크립트는 모양이 같으면 같은 타입으로 인식(구조적 타이핑)
//  두 인터페이스에서 동일한 요소를 제외하고 더 많은 요소를 가진 객체는 더 적은 요소를 가진 객체에 들어갈 수 있음


//  인터페이스 선언
interface Post8 {
  id: number,
  title: string,
}

//  Post8과 동일한 요소를 가지고 있는 interface
interface Notice {
  id: number,
  title: string,
}

//  Notice 인터페이스 타입으로 객체 생성
const notice: Notice = { id: 1, title: '제목'};
//  Post8 인터페이스 타입으로 객체 선언, Notice 인터페이스 타입으로 생성된 객체 notice 를 대입
//  인터페이스의 이름이 달라도 인터페이스의 요소가 동일하면 같은 인터페이스로 인식함
const post81: Post8 = notice;
console.log(post81);

console.log();

interface Named {
  name: string,
}

//  자동 추론 방식을 통해서 객체 생성
const writer = {id: 9, name: '아이유', email: 'iu@bitc.ac.kr'};

//  함수의 매개변수로 interface Named  타입을 사용
function printNamed(target: Named) {
  console.log(target.name);
}

//  printNamed() 함수 호출 시 매개변수로 writer 객체를 전달
//  writer 객체는 Named 인터페이스가 가지고 있는 name 속성이 있으므로 Named 인터페이스 타입으로 인식 됨
printNamed(writer);


interface Post9 { id: number, title: string }

//  인터페이스를 사용하여 사용자 정의 타입을 선언하고 해당 데이터 타입의 객체를 생성 시 값을 직접 입력 시 오타 방지용으로 문법 체크를 더 엄격하게 확인함
const post91: Post9 = {id: 1, title: '요소가 초과될 경우', extra: 1};
console.log(post91);

const temp = {id: 1, title: '요소가 초과될 경우', extra: 1};
//  변수에 한번 저장된 객체는 엄격하게 체크하지 않음
const post92: Post9 = temp;
console.log(post92);


console.log('\n ----- readonly ----- \n');
//  인터페이스로 설정한 사용자 데이터 타입의 특정 요소에 readonly 사용 시 읽기 전용 필드가 됨
//  처음 객체 생성 시 readonly 로 설정된 요소에 저장된 데이터는 수정할 수 없음
//  반드시 해당 객체의 값을 변경하고자 할 경우 해당 객체의 데이터를 받아서 새 객체를 생성해야 함

interface Post10 {
  readonly id: number,
  title: string,
}

const post101: Post10 = {id: 1, title: '제목1'};
console.log(post101);

post101.title = '수정된 제목1';
console.log(post101);

// readonly 로 설정된 요소의 값을 수정할 수 없음
// post101.id = 100;
// console.log(post101);







