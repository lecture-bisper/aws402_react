//  File :  useClass2.js
//  User :  it
//  Date :  2026-09-04
//  Time :  오후 5:04
//  Desc :  ES6의 클래스

console.log('\n ----- ES6 의 클래스 -----\n');

class Shape {

    // 정적멤버 선언
    static create(x, y) {
        return new Shape(x, y);
    }

    // 클래스의 필드 선언
    name = 'shape';

    // 생성자 선언, 생성자 오버로딩은 없음
    constructor(x, y) {
        this.move(x, y);
    }

    // 메소드 선언
    move(x, y) {
        // 클래스의 필드 선언 및 데이터 저장
        this.x = x;
        this.y = y;
    }

    // 메소드 선언
    area() {
        return 0;
    }
}

var s = new Shape(10, 20);
console.log(s.area());
s.move(100, 200);
console.log(s.area());
console.log(s.name);


console.log('\n ----- ES6의 클래스 상속 -----\n');

//  extends 키워드로 클래스 상속 가능
class Circle extends Shape {

    // Circle 의 생성자
    constructor(x, y, radius) {
        //  자바의 super() 과 같은 기능
        //  상속받은 부모의 생성자를 호출
        super(x, y);

        // 클래스 필드 선언, Circle 클래스의 전용 필드
        this.radius = radius;
    }

    // 상속 받은 부모 클래스의 멤버 메소드인 area() 를 오버라이딩 하여 사용
    area() {
        if (this.radius === 0) {
            // super 도 자바의 super 와 같은 기능
            return super.area();
        }

        return this.radius * this.radius;
    }
}

var c = new Circle(0, 0, 10);
console.log(s.area());











