//  File :  person2.mjs
//  User :  it
//  Date :  2026-09-07
//  Time :  오전 11:46
//  Desc :

const name2 = '유인나';
const email2 = 'inna@bitc.ac.kr';

function sum2(num1, num2) {
    console.log(`두 수의 덧셈은 ${num1 + num2}`);
}

const sub = (num1, num2) => {
    console.log('person2 에서 제공하는 함수');
    console.log(`두 수의 뺄셈은 ${num1 - num2}`);
    return num1 - num2;
}

const multi2 = num1 => num1 * num1;

class Circle2 {
    constructor(radius) {
        this.radius = radius;
    }

    area = num1 => this.radius * num1;
}

//  export 시 변수, 함수, 클래스를 동시에 입력 가능
export { name2, email2, sum2, sub, Circle2 }

//  default export 방식으로 함수를 외부에 제공, 모듈 하나당 한개만 가능
export default multi2;










