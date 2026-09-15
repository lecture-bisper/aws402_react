//  File :  SetStateFunction.tsx
//  User :  it
//  Date :  2026-09-11
//  Time :  오전 10:17
//  Desc :  

import {useState} from "react";

//  함수 컴포넌트 방식으로 컴포넌트 선언
function SetStateFunction() {

  //  리액트의 hooks 기능 중 useState 기능을 사용하여 컴포넌트의 state 를 수정하도록 설정
  //  = 연산자 왼쪽의 첫번째 요소인 stateString 이 현재 컴포넌트에서 state 로 관리되는 변수가 됨
  //  = 연산자 왼쪽의 두번째 요소인 setStateString 이 현재 컴포넌트에서 state 로 관리되는 변수의 값을 수정하는 setState() 함수가 됨
  //  state 변경 함수의 이름은 'set + 변수명' 형태로 카멜명명법을 사용하여 선언
  //  useState(초기값) : 리액트의 최신 기능인 hooks 의 기능 중 하나, state 객체르 관리하는 역할
  //    초기값을 설정하지 않으면 null 로 초기화
  //    set함수명() 형식으로 state 의 값 변경 시 화면 업데이트가 자동 발생됨
  //    사용법 :
  //    const [state변수명, set함수명()] = useState(초기값);
  //    set함수명(수정할 값);
  let [stateString, setStateString] = useState('click');

  // 이벤트 동작 시 콜백함수로 사용할 함수 선언
  const stateChange = () => {
    console.log(`원본 : ${stateString}`);
    //  state 로 관리되고 있는 변수 stateString 의 값을 직접 수정
    //  해당 변수의 값은 수정되었지만 virtual DOM 에 적용되지 않음, 화면 업데이트가 발생하지 않음
    stateString = 'stateString 직접 수정';
    console.log(`수정 : ${stateString}`);
  }

  return (
    <>
      <button type={'button'} className={'btn btn-primary me-2'} onClick={() => {
        stateChange();
      }}>state 직접 수정</button>
      <button type={'button'} className={'btn btn-success'} onClick={() => {
        console.log(`원본 : ${stateString}`);
        //  리액트의 hooks 인 useState() 를 사용하여 state 로 관리되고 있는 변수 stateString 을 수정하는 함수 setStateString() 을 호출하여 데이터 수정
        //  setStateString() 은 state 가 관리하고 있는 stateString 의 값을 수정 요청하고, 화면 업데이트를 발생 시킴
        setStateString('setState() 로 수정 - 클릭!!');
        console.log(`수정 : ${stateString}`);
      }}>setState() 로 수정</button>
      <br/>
      <p className={'fs-4'}>[함수 컴포넌트에서 state 변경하기] stateString : {stateString}</p>
    </>
  );
}

export default SetStateFunction;










