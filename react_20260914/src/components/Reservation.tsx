//  File :  Reservation.tsx
//  User :  it
//  Date :  2026-09-14
//  Time :  오후 5:22
//  Desc :  

import {type SubmitEventHandler, useState} from "react";

function Reservation() {

  //  state 로 관리되고 있는 변수, 초기값 true / 2
  const [haveBreakfast, setHaveBreakfast] = useState<boolean>(true);
  const [numberOfGuest, setNumberOfGuest] = useState<number>(2);

  //  이벤트 처리 함수
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    alert(`아침 식사 여부 : ${haveBreakfast ? '아침먹음' : '아침 안먹음'}, 방문객 수 : ${numberOfGuest}`);
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="chk" className={'form-label'}>아침 식사 여부 : </label>
        {/* checkbox 는 value 속성을 사용하지 않음, checked 속성값을 true/false 로 입력하여 사용 */}
        {/* state 로 관리되는 변수를 checked 와 연동 */}
        <input type="checkbox" className={'form-check-input ms-2'} id={'chk'} checked={haveBreakfast} onChange={(e) => setHaveBreakfast(e.target.checked)}/>
        <label htmlFor="count" className={'form-label ms-3'}>방문객 수 : </label>
        <div className={'d-inline-block ms-2'}>
          <input type="number" className={'form-control'} id={'count'} value={numberOfGuest} onChange={(e) => setNumberOfGuest(Number(e.target.value))}/>
        </div>
        <button type={'submit'} className={'btn btn-primary ms-2'}>확인</button>
      </form>
    </>
  );
}

export default Reservation;



//  문제 1) 회원 가입 페이지를 작성하세요
//  사용자 ID, 비밀번호, 이름, 이메일, 휴대전화, 성별 정보를 입력받고 확인 버튼 클릭 시 console.log() 나 alert() 를 통해서 화면에 출력하는 컴포넌트를 작성하세요
//  컴포넌트명 : Join.tsx








