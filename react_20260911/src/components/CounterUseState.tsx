//  File :  CounterUseState.tsx
//  User :  it
//  Date :  2026-09-11
//  Time :  오후 2:55
//  Desc :  

import {useState} from "react";

function CounterUseState() {

  //  React Hook : 리액트의 state 와 생명주기 함수와 같은 기능에 갈고리를 걸어서 원하는 시점에 정해진 함수를 실행하도록 하는 기능

  //  useState : state 상태 관리를 쉽게 하기 위해서 사용
  //  useEffect : 생명주기 함수를 쉽게 사용하기 위해서 사용
  //  useNavigate : React Router 를 사용하여 MPA 방식 웹 처럼 동작하도록 하기 위해서 사용

  //  useMemo : 기존에 수행한 결과를 메모리에 저장해 두고, 동일한 입력이 들어올 경우 메모리에 저장된 데이터를 재활용하여 전체적인 성능을 높이는데 사용
  //  useCallback : useMemo 와 동일한 기능으로 useMemo 는 결과값을 재활용하고, useCallback 은 함수를 재활용하여 성능을 높이는데 사용
  //  useRef : 특정 컴포넌트에 접근할 수 있도록 함

  //  useReducer : 전역 상태 관리 시 사용


  //  useState() hook 을 사용하기 위해서 설정
  //  구조 분해 할당으로 state 로 관리되는 변수와 해당 변수의 값을 수정하는 함수를 선언
  //  const 키워드를 사용하여 직접 수정할 수 없도록 설정
  //  setState() 함수를 통해서 지정한 변수의 값을 수정
  //  useState() 의 매개변수에 지정한 상수의 초기값을 설정
  const [count, setCount] = useState(0);

  //  버튼 클릭 시 동작할 이벤트 처리 함수
  const btnClick = () => {
    //  이벤트 발생 시 state 로 관리되는 상수 count 의 값을 변경하기 위해서 setCount() 를 호출
    //  setState() 는 비동기 방식으로 동작하기 때문에 화면에 표시되는 값과 console 로 출력되는 값이 다르게 출력될 수 있음
    setCount(count + 1); // setCount() 를 사용하여 데이터 수정 요청
    console.log(`useState() count : ${count + 1}`);
  }

  return (
    <>
      <p>총 <span className={'fs-4'}>{count}</span> 번 클릭했습니다.</p>
      <button type={'button'} className={'btn btn-primary'} onClick={btnClick}>클릭</button>
    </>
  );
}

export default CounterUseState;










