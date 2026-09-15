//  File :  useCounter.tsx
//  User :  it
//  Date :  2026-09-14
//  Time :  오전 10:05
//  Desc :  

import {useState} from "react";

//  커스텀 훅
//  리액트에서 제공하는 hook 중에서 사용자가 원하는 기능이 없을 경우 사용자가 직접 hook 을 생성하여 사용할 수 있음
//  여러가지 컴포넌트에서 반복적으로 사용되는 로직을 자바스크립트 함수로 묶어 놓은 것
//  커스텀 훅의 이름은 'use' 로 시작하고, 함수 내부에서 다른 리액트 hook 을 호출하는 자바스트립트 함수를 커스텀 훅이라고 함
//  커스텀 훅의 이름이 'use' 로 시작하지 않을 경우 리액트 내부적으로 해당 함수가 hook 인지 일반 함수인지 판단할 수 없기 때문에 커스텀 훅은 반드시 'use' 로 시작해야 함
//  커스텀 hook 도 hook 이기 때문에 리액트 hook 사용 규칙이 그대로 적용됨

//  hook 사용 규칙
//  1. 훅은 함수 컴포넌트에서만 사용 가능
//    - 일반 자바스크립트 함수에서 훅을 사용할 수 없음
//  2. 훅은 무조건 컴포넌트의 최상위 레벨에서만 호출해야 함
//    - if 문 이나 for 문 같은 다른 명령어 혹은 함수 안에서 훅을 호출할 수 없음
//  3. 컴포넌트가 랜더링될 때마다 같은 순서로 호출되어야 함
//    - 조건에 따라 훅의 실행여부가 결정되어서는 안됨

//  커스텀 훅 사용 조건
//  1. 함수명이 'use'로 시작
//  2. 함수 내부에서 리액트의 다른 훅 사용

function useCounter(initValue: number) {

  //  useState 훅 사용, 매개변수로 초기값을 받아옴
  const [ count, setCount ] = useState(initValue);

  //  다른 컴포넌트에서 반복 사용할 수 있는 함수
  const incrementCount = () => {
    return (
      setCount((count) => {
        return count + 1;
      })
    );
  }

  const decrementCount = () => setCount((count) => Math.max(count - 1, 0));

  //  state 로 관리 중인 변수와 함수를 배열에 저장한 후 반환
  return [ count, incrementCount, decrementCount ];
}

export default useCounter;










