//  File :  CounterUseEffect.tsx
//  User :  it
//  Date :  2026-09-11
//  Time :  오후 3:15
//  Desc :  

import {useEffect, useState} from "react";

function CounterUseEffect() {

  //  state 로 관리 중인 상수 count1, count2 선언
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //  useEffect : 리액트에서 제공하는 hook 중 하나로 클래스 컴포넌트만 사용할 수 있어떤 리액트의 생명주기 함수를 사용할 수 있도록 하는 훅
  //  하나의 컴포넌트에서 여러개의 useEffect 사용 가능

  //  사용법 :
  //  useEffect(effect콜백함수, 의존성배열);

  //  effect콜백함수 : useEffect 사용 시 동작할 소스코드가 있는 함수
  //  의존성 배열 : useEffect 의 의존성 배열에 등록한 요소가 변경될 경우 useEffect 등록된 effect 콜백 함수가 자동 실행

  //  componentDidMount() 생명주기 함수의 역할을 함
  //  useEffect 사용 시 의존성 배열을 빈 배열로 지정
  useEffect(() => {
    setCount2(100);
    console.log('컴포넌트 mount 시 동작');
  }, []);

  // componentDidUpdate() 생명주기 함수의 역할
  //  useEffect 사용 시 의존성 배열에 변수를 입력
  //  해당 의존성 배열에 등록된 변수의 값이 변경되면 콜백함수가 자동 실행됨
  useEffect(() => {
    document.title = `총 ${count1} 번 클릭했습니다.`;
    console.log('컴포넌트 update 시 동작');
  }, [count1]);

  //  componentWillUnmount() 생명주기 함수의 역할
  //  useEffect 사용 시 effect 콜백 함수에 return 을 추가하고, 해당 부분에 콜백함수를 입력하면 현재 컴포넌트가 삭제될 때 return 에 등록한 콜백함수가 자동 실행됨
  useEffect(() => {
    return () => {
      console.log('컴포넌트 unmount 시 동작');
    }
  }, []);


  return (
    <>
      <p>총 <span className={'fs-4'}>{count1}</span> 번 클릭했습니다.</p>
      <button type={'button'} className={'btn btn-primary'} onClick={() => setCount1(count1 + 1)}> + 1 클릭</button>

      <div className={'mt-3'}>
        <p>count2 의 값 : <span className={'fs-4'}>{count2}</span></p>
        <button type={'button'} className={'btn btn-primary'} onClick={() => setCount2(count2 + 10)}> +10 클릭</button>
      </div>
    </>
  );
}

export default CounterUseEffect;










