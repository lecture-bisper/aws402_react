//  File :  Parent1.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오전 10:08
//  Desc :  

import {useState} from "react";
import Child11 from "./Child11.tsx";
import Child12 from "./Child12.tsx";

function Parent1() {

  //  state 로 관리중인 데이터
  const [data2, setData2] = useState<string>('부모가 state로 관리중인 데이터');

  return (
    <div className={'border border-2 border-secondary rounded-2 m-4 p-4'}>
      <h3>부모 컴포넌트 영역</h3>
      <button type={'button'} className={'btn btn-primary'} onClick={() => setData2('부모가 변경한 데이터')}>클릭 시 부모 데이터 변경</button>
      <h3 className={'text-decoration-underline mt-3'}>data2 : {data2}</h3>

      <div className={'row'}>
        <div className={'col-sm'}>
          {/* 자식 컴포넌트 호출, 데이터 전달, data2 는 state로 관리중인 데이터를 전달*/}
          <Child11 data1={'부모가 전달한 데이터'} data2={data2} />
        </div>
        <div className={'col-sm'}>
          {/* 자식 컴포넌트 호출, 데이터 전달, data2 는 state로 관리중인 데이터를 전달*/}
          <Child12 data1={10000} data2={data2} />
        </div>
      </div>
    </div>
  );
}

export default Parent1;










