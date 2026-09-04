//  File :  useClass.js
//  User :  it
//  Date :  2026-09-04
//  Time :  오후 4:52
//  Desc :  클래스 사용하기

//  클래스 사용하기
//  ES5 에서는 클래스를 정의하기 위한 문법이 없었기 때문에 prototype 을 사용하여 클래스처럼 표현함
//  ES6 에서 클래스를 정의하기 위한 class 키워드가 추가 됨
//  기본적으로 자바의 class 와 비슷함
//  ES6 의 클래스는 생성자 이름이 'constructor' 라는 이름으로 고정되어 있음
//      자바의 클래스 필드를 선언하는 방식과 동일함
//      메소드 안에 'this.필드명' 형태로 선언
//  'static' 키워드를 사용하여 정적 멤버를 사용할 수 있음
//  'extend' 키워드를 사용하여 클래스 상속이 가능함

console.log('\n ----- ES5 의 클래스 -----\n');

//  ES5 에는 클래스가 없음
function Shape(x, y) {
    //  필드 선언
    this.name = 'shape';
    //  메소드 등록
    this.move(x, y);
}

//
Shape.create = function(x, y) {
    return new Shape(x, y);
}

//  메소드 선언 및 구현
Shape.prototype.move = function(x, y) {
    // 함수 안에서 this.변수명 을 입력 시 클래스의 필드가 됨
    this.x = x;
    this.y = y;
}

//  prototype을 사용하여 등록하지 않은 메소드도 선언 가능함
Shape.prototype.area = function() {
    return 0;
}

//  메소드 선언 다른 방식
// Shape.prototype = {
//     move: function(x, y) {
//         this.x = x;
//         this.y = y;
//     },
//     area: function() {
//         return 0;
//     }
// }

// 객체 생성
var s = Shape.create(0, 0);
console.log(s.area());

var s2 = Shape.create(0, 0);
console.log(s2.area());








