//  File :  Child.tsx
//  User :  it
//  Date :  2026-09-11
//  Time :  오전 11:38
//  Desc :  

import {useState} from "react";

function Child(props: {data1: number, data2: number}) {

  //  부모가 전달한 데이터 props의 데이터를 자식의 일반 변수에 저장
  let data1 = props.data1;
  let data2 = props.data2;

  //  state 로 관리 중인 변수, 자식 컴포넌트 전용, 초기값 300 설정
  const [data3, setData3] = useState(300);
  //  state 로 관리 중인 변수, 부모가 전달한 데이터를 받아서 초기화
  //  현재 컴포넌트가 처음 호출되서 초기화 될 때 부모 컴포넌트가 전달한 값을 계속 상태 변경없이 유지
  const [data4, setData4] = useState(props.data2);

  //  일반 변수 data1, data2 의 값을 증가, UI 는 업데이트 되지 않음
  const btn1Event = () => console.log(`자식 컴포넌트 data1 : ${++data1}`);

  const btn2Event = () => console.log(`자식 컴포넌트 data2 : ${++data2}`);

  //  부모에게서 전달받은 props 의 데이터를 직접 수정
  const btn3Event = () => {
    props.data1 += props.data1;
    console.log(`자식 컴포넌트 props.data1 : ${props.data1}`);
  }

  //  부모에게서 전달받은 props 의 데이터를 직접 수정
  const btn4Event = () => {
    props.data2 += props.data2;
    console.log(`자식 컴포넌트 props.data2 : ${props.data2}`);
  }

  // setState() 로 데이터 증가
  const btn31Event = () => {
    setData3(data3 + 1);
    console.log(`자식 컴포넌트 data3 : ${data3}`);
  }

  // setState() 로 데이터 증가
  const btn41Event = () => {
    setData4(data4 + 1);
    console.log(`자식 컴포넌트 data4 : ${data4}`);
  }

  return (
    <div className={'border border-2 border-primary rounded-2 p-3'}>
      <h4>자식 컴포넌트</h4>

      <h5>data1 : {data1}, data2 : {data2}</h5>
      <h5>props.data1 : {props.data1}, props.data2 : {props.data2}</h5>
      <h5>data3 : {data3}, data4 : {data4}</h5>
      <hr/>
      <button type={'button'} className={'btn btn-info me-2'} onClick={btn1Event}>props.data1 의 값을 받은 data1 수정</button>
      <button type={'button'} className={'btn btn-info'} onClick={btn2Event}>props.data2 의 값을 받은 data2 수정</button>
      <button type={'button'} className={'btn btn-success me-2'} onClick={btn3Event}>자식 컴포넌트가 props.data1 직접 수정</button>
      <button type={'button'} className={'btn btn-success'} onClick={btn4Event}>자식 컴포넌트가 props.data2 직접 수정</button>
      <button type={'button'} className={'btn btn-primary me-2'} onClick={btn31Event}>자식 컴포넌트의 state 값 수정</button>
      <button type={'button'} className={'btn btn-primary'} onClick={btn41Event}>props.data2의 값을 자식 컴포넌트의 state로 받고 setState로 수정</button>
    </div>
  );
}

export default Child;










