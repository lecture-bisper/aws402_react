//  File :  MainPage.tsx
//  User :  it
//  Date :  2026-09-14
//  Time :  오후 2:23
//  Desc :  

import WarningBanner from "./WarningBanner.tsx";
import {useState} from "react";

//  부모 컴포넌트
function MainPage() {

  //  state로 관리중인 변수
  const [showWarning, setShowWarning] = useState(false);

  //  이벤트 처리 함수
  const handleToggleClick = () => {
    setShowWarning(!showWarning);
  }

  return (
    <>
      {/* 자식 컴포넌트 호출 시 showWarning 의 값을 전달 */}
      <WarningBanner warning={showWarning} />
      {/* 클릭 이벤트에 미리 선언한 이벤트 처리 함수 등록 */}
      {/* 텍스트에 삼항 연산자를 사용하여 showWarning 의 값에 따라 출력될 문자 변경 */}
      <button type={'button'} className={'btn btn-primary'} onClick={handleToggleClick}>{showWarning ? '감추기' : '보이기'}</button>
    </>
  );
}

export default MainPage;










