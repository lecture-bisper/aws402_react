//  File :  Accommodate.tsx
//  User :  it
//  Date :  2026-09-14
//  Time :  오전 10:10
//  Desc :  

import {useEffect, useRef, useState} from "react";
import useCounter from "./useCounter.tsx";

//  최대값 설정
const MAX_CAPACITY = 10;

function Accommodate() {

  //  state 로 관리되고 있는 변수 isFull 선언, 초기값 false
  const [ isFull, setIsFull ] = useState(false);

  //  커스텀 훅 사용 시
  const [ count, incrementCount, decrementCount ] = useCounter(0);

  // //  커스텀 훅을 사용하지 않았을 경우
  // //  state 로 관리되는 변수 count 선언, 초기값 0
  // const [ count, setCount ] = useState(0);
  //
  // //  버튼 이벤트 처리 함수
  // const incrementCount = () => {
  //   return setCount((count) => count + 1);
  // }
  //
  // const decrementCount = () => {
  //   return setCount((count) => Math.max(count - 1, 0));
  // }

  //  componentDidMount() 함수의 기능
  useEffect(() => {
    console.log('--------------------');
    console.log('useEffect() 실행');
    console.log(`isFull = ${isFull}`);
  }, []);

  //  componentDidUpdate() 함수의 기능
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`현재 count : ${count}`);
  }, [count]);

  return (
    <>
      <p>{`총 ${count} 명 수용했습니다.`}</p>
      <button type={'button'} className={'btn btn-primary'} onClick={incrementCount} disabled={isFull}>입장</button>
      <button type={'button'} className={'btn btn-warning ms-2'} onClick={decrementCount}>퇴장</button>
      {/* 조건부 렌더링 */}
      {/* isFull 의 값이 false 면 화면 출력 안함, true 면 화면 출력 */}
      {isFull && <p className={'text-danger'}>정원이 가득찼습니다.</p>}
    </>
  );
}

export default Accommodate;










