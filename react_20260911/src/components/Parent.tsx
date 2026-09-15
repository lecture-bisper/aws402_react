//  File :  Parent.tsx
//  User :  it
//  Date :  2026-09-11
//  Time :  오전 11:38
//  Desc :  

import {useState} from "react";
import Child from "./Child.tsx";

//  일반 변수 선언
let data1 = 100;

function Parent() {
  //  state 로 관리하는 변수
  const [data2, setData2] = useState(200);

  //  일반 변수 값을 증가
  const firstDataChange = () => {
    console.log(`data1 : ${++data1}`);
  }

  //  setState() 로 값 증가
  const secondDataChange = () => {
    setData2(data2 + 1);
    console.log(`data2 : ${data2}`);
  }

  return (
    <>
      <div className={'border border-2 rounded-3 p-3'}>
        <button type={'button'} className={'btn btn-primary me-2'} onClick={firstDataChange}>부모 첫번째 데이터 수정</button>
        <button type={'button'} className={'btn btn-primary'} onClick={secondDataChange}>부모 두번째 데이터 수정</button>

        <h4 className={'my-3'}><span>data1 : {data1}, data2 : {data2}</span></h4>

        {/* 자식 컴포넌트 Child 를 호출하면서 일반변수 data1, state 로 관리되는 변수 data2 전달함 */}
        <Child data1={data1} data2={data2} />
      </div>
    </>
  );
}

export default Parent;










