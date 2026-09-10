//  File :  ClassComponent.tsx
//  User :  it
//  Date :  2026-09-10
//  Time :  오전 11:35
//  Desc :

import {Component} from "react";

//  클래스 컴포넌트는 React 의 Component 클래스를 상속받아 사용함
//  자바스크립트의 클래스이기 때문에 생명주기 함수를 사용할 수 있음
//  멤버 메소드, 멤버 변수, 생성자 모두 선언하여 사용할 수 있음
//  JSX 코드를 사용한 UI 부분은 render() 메소드를 사용하여 구현함

class ClassComponent extends Component {
  // 클래스의 멤버를 입력하는 부분


  // UI 를 그리는 부분
  render() {
    return (
      <>
        <h4>클래스 컴포넌트 방식으로 컴포넌트 생성</h4>
        <p>클래스 컴포넌트로 생성한 자식 컴포넌트 입니다.</p>
      </>
    );
  }
}

export default ClassComponent;










