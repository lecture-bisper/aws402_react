//  File :  person.mjs
//  User :  it
//  Date :  2026-09-07
//  Time :  오전 11:10
//  Desc :

// export 키워드를 사용하여 외부에 제공하는 변수
export const name = '아이유';
export const age = 33

//  변수를 그냥 선언
let email = 'iu@bitc.ac.kr';
let tel = '01012345678';
let addr = '부산광역시 부산진구 중앙대로 708';

// 기존에 선언된 변수를 한번에 export
//  as 를 사용하여 외부에 제공되는 변수명을 별칭으로 변경하여 제공
export { email, tel as phone, addr };

//  export 키워드를 사용하여 외부에 직접 제공하는 함수
export function sum(num1, num2) {
    console.log(`두 수의 합은 ${num1 + num2}`);
}

//  ES5 방식의 함수로 선언
function sub(num1, num2) {
    console.log(`두 수의 차는 ${num1 - num2}`);
}

//  export 키워드를 사용하여 외부에 직접 제공하는 화살표 함수
export const multi = num1 => num1 * num1;

//  화살표 함수로 선언
const divide = (num1, num2) => num1 / num2;

//  미리 선언한 함수를 export 키워드로 한번에 외부에 제공
//  as 를 사용하여 export 하는 함수에 별칭을 설정하여 외부에 제공함
export { sub, divide as div };


class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area = num1 => this.radius * this.radius * num1;
}

//  미리 선언한 클래스를 export 로 외부에 제공
export { Circle };










