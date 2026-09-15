//  File :  Parent2.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오전 10:33
//  Desc :  

import {useState} from "react";

import Child2 from "./Child2.tsx";

function Parent2() {

  let parentValue1 = 100;
  const [parentValue2, setParentValue2] = useState<number>(200);

  //  부모 컴포넌트의 이벤트 처리 함수
  const changeParentValue1 = () => {
    parentValue1++;
    console.log(`부모 컴포넌트의 함수로 데이터 수정 : ${parentValue1}`);
  }

  const changeParentValue2 = () => {
    setParentValue2(parentValue2 + 1);
    console.log(`부모 컴포넌트의 setState()함수로 데이터 수정 : ${parentValue2 + 1}`);
  }

  return (
    <div className={'border border-2 border-secondary rounded-2 m-4 p-4'}>
      <h3>부모 컴포넌트</h3>
      <h4>부모 컴포넌트가 가지고 있는 일반 변수 : {parentValue1}</h4>
      <h4>부모 컴포넌트가 가지고 있는 state 변수 : {parentValue2}</h4>

      <button type={'button'} className={'btn btn-primary me-2'} onClick={changeParentValue1}>부모의 첫번째 데이터 수정</button>
      <button type={'button'} className={'btn btn-success'} onClick={changeParentValue2}>부모의 두번째 데이터 수정</button>
      <br/>
      {/* 자식 컴포넌트 호출, 데이터와 함수를 함께 전달 */}
      <Child2 data1={parentValue1} data1Func={changeParentValue1} data2={parentValue2} data2Func={setParentValue2}/>
    </div>
  );
}

export default Parent2;










