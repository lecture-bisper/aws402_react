//  File :  NameForm.tsx
//  User :  it
//  Date :  2026-09-14
//  Time :  오후 3:30
//  Desc :  

import {type ChangeEvent, type SubmitEventHandler, useState} from "react";

function NameForm() {

  //  state로 관리되고 있는 변수, form 에서 사용자의 name 을 입력 받기 위한 변수, 초기값 '' 빈 문자열
  const [nameValue, setNameValue] = useState('');
  //  form 에서 사용자의 email 입력을 받기 위한 변수, 일반 변수로 선언, 초기값 '' 빈 문자열
  let emailValue = '';

  //  이벤트 처리 함수
  //  form 태그의 submit 이벤트 버튼 클릭 시 동작할 함수
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = e => {
    alert(`입력한 이름 : ${nameValue}, 입력한 이메일 : ${emailValue}`);
    //  e.preventDefault() : 현재 동작 중인 이벤트 정지, 현재 동작중인 submit 이벤트 정지
    e.preventDefault();
  }

  //  이름 수정 시 동작, 매개변수로 이벤트 객체를 받아옴
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    //  state 로 관리되고 있는 변수 nameValue 의 값을 setNameValue() 함수를 사용하여 수정
    //  e 는 이벤트 객체, e.target 은 현재 이벤트를 발생시킨 대상, e.target.value 는 현재 이벤트를 발생시킨 대상이 가지고 있는 value 속성값을 의미
    //  이벤트 발생 시 input 태그의 변경된 value 속성값을 가져와서 setNameValue() 함수에 전달하여 데이터 수정
    //  setState() 가 동작했으므로 화면 UI 가 업데이트 됨
    setNameValue(e.target.value);
    console.log(`받아온 이름 : ${e.target.value}, 현재 nameValue : ${nameValue}`);
  }

  //  이메일 수정 시 동작
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    //  일반 변수 emailValue 에 이벤트 발생 시 가져온 데이터를 대입
    //  일반 변수이므로 = 대입 연산자를 사용하여 직접 데이터 변경
    //  emailValue 는 일반 변수이므로 setState() 가 동작하기 않기 때문에 화면 업데이트가 발생되지 않음, 이메일을 입력하기 위한 input 태그의 value는 초기값인 '' 빈 문자열이 그대로 반영되어 있기 때문에 사용자 입력이 반영되지 못함
    emailValue = e.target.value;
    console.log(`받아온 이메일 : ${e.target.value}, 현재 emailValue : ${emailValue}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={'mt-3'}>
          <label htmlFor="user-name" className={'form-label'}>이름 : </label>
          {/* input 태그의 value 속성에 state 로 관리 중인 변수 nameValue 를 설정 */}
          {/* nameValue 의 초기값이 '' 이므로 아무런 내용을 표시되지 않음 */}
          {/* onChange 이벤트가 설정되지 않았을 경우 UI 가 업데이트 되지 않아 사용자 입력 불가능 */}
          {/* onChange 이벤트에 handleNameChange 함수를 적용 */}
          <input type="text" className={'form-control'} id={'user-name'} value={nameValue} onChange={handleNameChange} />
        </div>
        <div className={'mt-3'}>
          <label htmlFor="user-email" className={'form-label'}>이메일 : </label>
          {/* input 태그의 value 속성에 일반 변수 emailValue 를 설정 */}
          {/* emailValue 의 초기값이 '' 이므로 아무런 내용도 표시되지 않음 */}
          {/* onChange 이벤트가 설정되지 않았을 경우 UI 가 업데이트되지 않아서 사용자 입력 불가 */}
          {/* onChange 이벤트에 handleEmailChange 함수를 적용 */}
          <input type="email" className={'form-control'} id={'user-email'} value={emailValue} onChange={handleEmailChange} />
        </div>
        <div className={'mt-3'}>
          <button type={'submit'} className={'btn btn-primary'}>제출</button>
        </div>
      </form>
    </>
  );
}

export default NameForm;










