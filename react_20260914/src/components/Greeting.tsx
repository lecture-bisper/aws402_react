//  File :  Greeting.tsx
//  User :  it
//  Date :  2026-09-14
//  Time :  오전 11:06
//  Desc :  

import UserGreeting from "./UserGreeting.tsx";
import GuestGreeting from "./GuestGreeting.tsx";

//  조건부 랜더링 : 어떠한 조건에 따라서 랜더링이 달라지는 것
//  자바스크리트에서 조건식으로 데이터를 구분할 경우 true / false 2가지로 구분할 수 있음
//  여기서 데이터에 따라 Truthy / Falsy 로 구분할 수 있음
//  간단하게 데이터가 있으면 Truthy, 데이터가 없으면 Falsy 로 구분함

//  Truthy : true(boolean 값 true), {} (빈 object), [] (빈 배열), 100, -200, 0.1, -1 (0이 아닌 숫자), "0", "false" (빈 문자열이 아닌 문자)
//  Falsy : false (boolean 값 false), 0, -0, 0.0 (양수, 음수 관계없이 숫자 0), '', "", `` (빈 문자열), null (데이터없음), undefined(초기화되지 않음), NaN (Not a Number, 숫자가 아님)

//  let a;      - 변수 선언과 동시에 초기화하지 않았기 때문에 undefined 상태가 되어 Falsy
//  let b = []; - 변수 선언과 동시에 배열 타입을 선언했기 때문에 변수 b 에 배열 데이터가 저장되어 있어 Truthy 로 동작
//  let c = {}; - 변수 선언과 동시에 object 로 선언했기 때문에 변수 c 에 object 데이터가 저장되어 있어 Truthy 로 동작

function Greeting(props: {isLoggedIn: boolean}) {

  const isLoggedIn = props.isLoggedIn

  if (isLoggedIn == true) {
    return <UserGreeting />
  }
  else {
    return <GuestGreeting />
  }
}

export default Greeting;










