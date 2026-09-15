//  File :  Child2.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오전 10:35
//  Desc :  

import {type Dispatch, type MouseEventHandler, type SetStateAction, useState} from "react";

//  사용자 정의 타입
interface Child2Props {
  data1: number;
  //  부모 컴포넌트에서 전달한 버튼 이벤트 처리 함수
  data1Func: MouseEventHandler<HTMLButtonElement>;
  data2: number;
  data2Func: Dispatch<SetStateAction<number>>;
}

//  상태 끌어올리기
//  자식 컴포넌트의 데이터를 부모 컴포넌트로 전달하는 방법
//  부모 컴포넌트가 자식 컴포넌트로 전달하는 props 에 부모 컴포넌트의 함수를 전달하면 자식 컴포넌트에서 부모 컴포넌트의 함수를 대신 실행할 수 있음
//  1. 자식 컴포넌트에서 전달할 데이터를 받을 수 있는 변수를 부모 컴포넌트에 선언
//  2. 부모 컴포넌트에서 state로 관리되는 변수를 수정하는 setState() 함수를 자식 컴포넌트로 전달
//  3. 부모 컴포넌트에서 전달받은 setState() 함수를 자식 컴포넌트에서 대신 실행(매개변수에 자식 컴포넌트의 데이터를 전달하여 실행)
//  4. 자식 컴포넌트가 가지고 있는 데이터가 부모 컴포넌트의 setState() 함수에 의해서 부모 컴포넌트의 state 로 관리되는 변수에 저장됨

function Child2({data1, data1Func, data2, data2Func}: Child2Props) {

  const [childValue, setChildValue] = useState<number>(data2);

  const changeChildValue = () => {
    setChildValue(childValue + 1);
    //  부모 컴포넌트에서 전달받은 setState() 함수를 대신 실행, 매개변수의 데이터는 자식 컴포넌트의 데이터
    data2Func(childValue + 1);
  }

  return (
    <div className={'border border-2 border-info rounded-2 m-3 p-3'}>
      <h3>자식 컴포넌트 영역</h3>
      <h4>부모 컴포넌트가 전달한 데이터1 : {data1}</h4>
      <h4>부모 컴포넌트가 전달한 데이터2 : {data2}</h4>
      <h4>자식 컴포넌트가 가지고 있는 데이터 : {childValue}</h4>

      <br/><br/>

      {/* 부모 컴포넌트가 props 로 전달한 함수를 자식 컴포넌트의 버튼 이벤트 처리 함수로 사용 */}
      {/* 부모 컴포넌트의 함수를 자식 컴포넌트가 대신 실행 */}
      <button type={'button'} className={'btn btn-success me-2'} onClick={data1Func}>부모가 전달한 함수 실행</button>
      {/* 부모 컴포넌트가 props 를 통해서 전달한 setState()를 자식 컴포넌트에서 대신 실행 */}
      <button type={'button'} className={'btn btn-info'} onClick={changeChildValue}>부모가 전달한 setState() 함수를 대신 실행</button>
    </div>
  );
}

export default Child2;










