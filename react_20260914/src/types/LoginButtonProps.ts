//  File :  LoginButtonProps.ts
//  User :  it
//  Date :  2026-09-14
//  Time :  오후 12:26
//  Desc :  interface 를 통한 사용자 정의 데이터 타입 선언

//  컴포넌트에서 사용할 사용자 정의 데이터 타입을 선언
interface LoginButtonProps {
  onClick: () => void;
}

//  해당 interface 가 데이터 타입으로 사용되는 것임을 알리기 위해서 export type 사용
export type { LoginButtonProps };













