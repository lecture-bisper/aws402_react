//  File :  LoginControl2.tsx
//  User :  it
//  Date :  2026-09-14
//  Time :  오후 1:57
//  Desc :  

import Greeting from "./Greeting.tsx";
import {useState} from "react";
//  미리 만들어 놓은 사용자 타입 가져오기
import type {LoginButtonProps} from "../types/LoginButtonProps.ts";

//  사용자 타입 설정
interface LogoutButtonProps {
  onClick: () => void;
}

interface LoginControl2Props {
  isLogin: boolean;
}

//  자식 컴포넌트 선언
const LoginButton = ({onClick}: LoginButtonProps) => <button type={'button'} className={'btn btn-success'} onClick={onClick}>로그인</button>

const LogoutButton = ({onClick} : LogoutButtonProps) => <button type={'button'} className={'btn btn-secondary'} onClick={onClick}>로그아웃</button>

//  부모 컴포넌트 선언, 부모에게서 전달받은 데이터 props 를 사용자 정의 타입과 구조 분해 할당으로 처리
function LoginControl2({isLogin}: LoginControl2Props) {
  //  전달받은 props 의 데이터를 state 로 관리하는 isLoggedIn 변수의 초기값으로 사용
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(isLogin);

  //  이벤트 처리 함수
  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <>
      <Greeting isLoggedIn={isLoggedIn} />
      {
        //  삼항 연산자를 사용하여 if ~ else 를 구현
        //  JSX 문법에서는 자바스크립트의 전통적인 if ~ else 문을 사용할 수 없음
        //  엘리먼트 변수 없이 삼항연산자를 사용하여 조건에 따라 자식 컴포넌트를 변경하여 호출
        isLoggedIn == true
          ? <LogoutButton onClick={handleLogoutClick}/>
          : <LoginButton onClick={handleLoginClick}/>
      }
    </>
  );
}

export default LoginControl2;










