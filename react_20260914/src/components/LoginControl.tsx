//  File :  LoginControl.tsx
//  User :  it
//  Date :  2026-09-14
//  Time :  오전 11:30
//  Desc :

import {useState} from "react";
import Greeting from "./Greeting.tsx";
//  import 로 가져온 것이 데이터 타입으로 사용되는 것임을 알리기 위해서 import type 을 사용
import type {LoginButtonProps} from "../types/LoginButtonProps.ts";

// interface LoginButtonProps {
//   onClick: () => void;
// }

//  interface 를 통해서 사용자 정의 타입 설정
//  interface 로 생성한 사용자 정의 타입을 여러 컴포넌트에서 사용할 경우 따로 파일로 분리 후 import 로 가져와서 사용
interface LogoutButtonProps {
  onClick: () => void;
}

//  자식 컴포넌트
function LoginButton({onClick}: LoginButtonProps) {
  return <button type={'button'} className={'btn btn-success'} onClick={onClick}>로그인</button>
}

//  1. 부모에게서 전달받은 데이터인 props 의 데이터 타입까지 표시
// function LogoutButton(props: {onClick: Function}) {
//  3. 자식 컴포넌트 안에서 진행하던 객체의 구조 분해 할당을 선언부의 매개변수에서 직접 처리
// function LogoutButton({onClick}: () => void) {
//  4. interface 를 사용하여 사용자 정의 타입을 설정하고 구조 분해 할당을 진행함
function LogoutButton({onClick}: LogoutButtonProps) {
  //  1.1 부모에게서 전달받은 데이터인 props 의 요소를 자식 컴포넌트의 변수에 저장하여 사용
  // const onClick = props.onClick;
  //  2. props 가 object 이므로 객체의 구조 분해 할당을 사용하여 한번에 변수에 할당이 가능함
  // const {onClick} = props;

  return <button type={'button'} className={'btn btn-secondary'} onClick={onClick}>로그아웃</button>
}


//  컴포넌트 선언 시 부모에게서 전달받는 데이터인 props 를 구조분해할당을 통해서 바로 사용이 가능함
//  interface 를 사용하여 사용자 정의 타입을 지정하여 사용할 수 있음
interface typeIsLoggedIn {
  isLogin: boolean;
}

//  부모 컴포넌트
function LoginControl({isLogin}: typeIsLoggedIn) {

  const [ isLoggedIn, setIsLoggedIn ] = useState(isLogin);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  const handleLogoutClick = () => setIsLoggedIn(false);

  //  엘리먼트 변수 : 일반 자바스크립트 변수에 저장된 내용이 jsx 문법으로 만들어진 html 태그 혹은 리액트 컴포넌트인 변수
  //  리액트 엘리먼트를 저장할 변수 선언(엘리먼트 변수)
  let btn;

  if (isLoggedIn) {
    //  엘리먼트 변수 btn 에 자식 컴포넌트 저장
    btn = <LogoutButton onClick={handleLogoutClick} />
  }
  else {
    btn = <LoginButton onClick={handleLoginClick} />
  }

  return (
    <>
      <Greeting isLoggedIn={isLoggedIn} />
      {/* 엘리먼트 변수를 화면에 출력 */}
      {/* 엘리먼트 변수를 활용하여 조건부 랜더링 구현 */}
      {/* 엘리먼트 변수 사용 시 불 필요한 화면 구성을 하지 않아도 됨 */}
      {btn}
    </>
  );

  //  엘리먼트 변수를 사용하지 않을 경우, 결과에 따라 출력될 화면 UI를 모두 구현해야 함
  // if (isLoggedIn) {
  //   return (
  //     <div>
  //       <Greeting isLoggedIn={isLoggedIn} />
  //       <LogoutButton onClick={handleLogoutClick} />
  //     </div>
  //   );
  // }
  // else {
  //   return (
  //     <div>
  //       <Greeting isLoggedIn={isLoggedIn} />
  //       <LoginButton onClick={handleLoginClick} />
  //     </div>
  //   );
  // }
}

export default LoginControl;










