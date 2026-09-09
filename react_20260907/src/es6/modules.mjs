//  File :  modules.mjs
//  User :  it
//  Date :  2026-09-07
//  Time :  오전 10:29
//  Desc :  모듈 사용하기

// 모듈 사용하기
//  자바스크립트에서는 코드를 별도의 파일로 분리하여 사용할 수 있음
//  기본적으로 html 파일에서 자바스크립트 파일을 호출하여 사용
//  자바스크립트 파일 간 서로 호출하여 사용하는 것이 가능함
//  'require' 키워드를 사용하여 자바스크립트 파일에서 다른 자바스크립트 파일을 로드하여 사용할 수 있음
//  ES6 에서 'import / export' 가 추가됨
//      - 자바스크립트의 모듈 사용 기본값은 'require' 이며, 'import / export' 를 사용하려면 추가 설정이 필요함
//      - 확장자가 'mjs' 인 파일은 추가 설정 없이 'import / export' 를 사용할 수 있음

//  as : import / export 사용 시 변수, 함수, 클래스의 이름에 별칭을 설정 시 사용하는 명령어

//  import : 다른 자바스크립트 모듈에서 제공하는 변수, 함수, 클래스를 현재 자바스크립트 파일로 가져옴
//  사용법 :
//      - 1. 다른 자바스크립트 모듈에서 export 로 제공하는 변수, 함수, 클래스를 가져옴
//          - export 로 지정한 것만 가져와서 사용함
//          - 가져온 변수, 함수, 클래스를 현재 모듈의 멤버인 것처럼 사용함
//          - > import { 변수명, 함수명, 클래스명} from '모듈경로';

//      - 2. 다른 자바스크립트 모듈에서 export 제공하는 모든 것을 한번에 가져옴
//          - 가져온 모듈을 사용 시 '별칭명.변수, '별칭명.함수', '별칭명.클래스' 형태로 사용
//          - > import * as 별칭 from '모듈경로';

//      - 3. import 시 as 를 사용하여 별칭을 설정 후 사용
//          - 여러개의 모듈을 import 시 중복되는 모듈이 있을 경우 별칭을 사용하여 모듈의 이름을 변경하여 사용
//          - > import { 원본명 as 별칭 } from '모듈경로';

//  default import : default export 로 설정된 변수, 함수, 클래스를 가져옴
//      - default import 로 가져온 모듈은 {} 가 없음
//      - > import 모듈명 from '모듈경로';


//  export : 현재 자바스크립트 모듈에서 특정 변수, 함수, 클래스를 다른 자바스크립트 모듈에서 사용할 수 있도록 제공
//      - named export : 자바스크립트 모듈에서 일반적으로 사용되는 export, 여러개 사용 가능
//          1. 외부에 제공할 변수에 직접 export 사용
//              - > export const 변수명;
//          2. 외부에 제공할 함수에 직접 export 사용
//              - > export function 함수명(매개변수1, 매개변수2, ...) {
//                      소스코드 ...
//                  }
//          3. 외부에 제공할 클래스에 직접 export 사용
//              - > export class 클래스명 {
//                      const 필드명
//                      메소드명() {
//                          소스코드
//                      }
//                  }
//          4. 외부에 제공할 변수, 함수, 클래스를 해당 모듈의 마지막 부분에서 한번에 등록
//              - 한번에 여러개를 등록할 수 있음
//              - > export { 변수명, 함수명, 클래스명 };


//      - default export : 해당 모듈 안에서 단 1개만 사용할 수 있는 export
//          - 이름을 지정할 필요 없음
//          - export 시 {} 가 없음, default 키워드를 사용
//          - > export default 모듈명;

console.log('\n ----- 모듈에서 변수 가져오기 -----\n');

// const name = '아이유';
// const age = 33;

//  import 를 사용하여 다른 모듈에서 제공하는 변수를 가져와서 사용
import { name, age, email, phone, addr } from './person.mjs';

//  현재 파일에서 선언한 변수처럼 사용 가능
console.log(`name : ${name}`);
console.log(`age : ${age}`);
console.log(`email : ${email}`);
console.log(`phone : ${phone}`);
console.log(`address : ${addr}`);

console.log('\n----- 모듈에서 함수 가져오기 -----\n');

//  person.mjs 에서 export 로 제공하는 함수를 named import 로 가져옴
import { sum, sub, multi, div } from './person.mjs';

sum(10, 20);
sub(20, 10);

let result = multi(10);
console.log(`두 수의 곱셈은 ${result}`);
result = div(10, 3);
console.log(`두 수의 나눗셈은 ${result}`);


console.log('\n ----- 모듈에서 클래스 가져오기 -----\n');

import { Circle } from "./person.mjs";

const circle = new Circle(10);
result = circle.area(10);
console.log(`클래스 사용하기 : ${result}`);


console.log('\n ----- 모듈에서 제공하는 내용 모두 가져오기 -----\n');

//  지정한 모듈에서 export 로 제공하는 모든 내용을 가져오기
//  as 를 사용하여 별칭을 붙여서 사용
import * as test from './person2.js';

//  실제로 사용 시 '별칭.변수'로 사용
console.log(`이름 : ${test.name2}`);
console.log(`이메일 : ${test.email2}`);

//  실제로 사용 시 '별칭.함수'로 사용
test.sum2(10, 20);
test.sub(20, 10);

//  실제로 사용 시 '별칭.클래스' 로 사용
const circle2 = new test.Circle2(10);
result = circle2.area(10);
console.log(`클래스 사용하기 2 : ${result}`);


console.log('\n ---- import 시 as 로 별칭 사용하기 -----\n');
//  모듈을 export 하는 곳에서 as 를 사용하여 별칭을 사용하는 것이 아니라 모듈을 가져오는 곳에서 import 시 as 를 사용하여 별칭을 설정
//  여러개의 모듈을 import 시 동일한 이름을 가진 변수, 함수, 클래스가 존재할 수 있으므로 import 를 진행하는 곳에서 as 로 별칭을 설정
import { sub as sub2 } from './person2.js';
sub(20, 10);
sub2(20, 10);


console.log('\n ----- export default 사용 시 -----\n');

//  모듈을 export 하는 곳에서 default 를 사용하면 import 하는 곳에서 {} 없이 import 하여 사용
import multi2 from './person2.js';

result = multi2(10);
console.log(result);











