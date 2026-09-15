//  File :  JoinForm.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오전 11:40
//  Desc :  

interface JoinFormProps {
  setupId: Dispatch<SetStateAction<string>>;
  setupPwd: Dispatch<SetStateAction<string>>;
  setupName: Dispatch<SetStateAction<string>>;
  setupEmail: Dispatch<SetStateAction<string>>;
  reset: () => void;
}

import {
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
  type SubmitEventHandler,
  useState
} from "react";

function JoinForm({setupId, setupPwd, setupName, setupEmail, reset}: JoinFormProps) {

  //  자식 컴포넌트가 state 로 관리중인 변수, 사용자 입력을 받기 위하여 사용
  const [userId, setUserId] = useState<string>('');
  const [userPwd, setUserPwd] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  //  이벤트 처리 함수
  const changeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const changeUserPwd = (e: ChangeEvent<HTMLInputElement>) => setUserPwd(e.target.value);
  const changeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);
  const changeUserEmail = (e: ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value);

  //  form 태그의 submit 이벤트 처리 함수
  const clickSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    const msg = `User ID : ${userId}
User PWD : ${userPwd}
User Name : ${userName}
User Email : ${userEmail}`;

    console.log(msg);
    alert(msg);

    //  부모 컴포넌트에서 전달받은 setState() 함수에 자식 컴포넌트의 데이터를 전달하면서 대신 실행
    //  부모 컴포넌트의 state 변수의 값이 자식 컴포넌트의 데이터로 변경됨
    setupId(userId);
    setupPwd(userPwd);
    setupName(userName);
    setupEmail(userEmail);

    e.preventDefault();
  }

  //  form 태그의 reset 이벤트 처리 함수
  const clickReset = () => {
    //  자식 컴포넌트의 state 로 관리중인 변수의 값을 모두 초기화
    setUserId('');
    setUserPwd('');
    setUserName('');
    setUserEmail('');

    //  부모 컴포넌트에서 전달받은 부모의 state 변수 초기화 함수를 대신 실행
    reset();
  }

  return (
    <>
      <form action="#" className={'text-start'} onSubmit={clickSubmit} onReset={clickReset}>
        <div className={'mt-3'}>
          <label htmlFor={"user-id"} className={'form-label'}>User ID</label>
          <input type={"text"} className={'form-control'} id={'user-id'} placeholder={'사용자 ID 를 입력하세요'} value={userId} onChange={changeUserId} />
        </div>
        <div className={'mt-3'}>
          <label htmlFor={"user-pwd"} className={'form-label'}>User PWD</label>
          <input type={"password"} className={'form-control'} id={'user-pwd'} placeholder={'사용자 비밀번호를 입력하세요'} value={userPwd} onChange={changeUserPwd} />
        </div>
        <div className={'mt-3'}>
          <label htmlFor={"user-name"} className={'form-label'}>User Name</label>
          <input type={"text"} className={'form-control'} id={'user-name'} placeholder={'사용자 이름을 입력하세요'} value={userName} onChange={changeUserName} />
        </div>
        <div className={'mt-3'}>
          <label htmlFor={"user-email"} className={'form-label'}>User Email</label>
          <input type={"email"} className={'form-control'} id={'user-email'} placeholder={'사용자 이메일을 입력하세요.'} value={userEmail} onChange={changeUserEmail} />
        </div>
        <hr/>
        <div className={'mt-3 d-grid gap-2'}>
          <button type={'submit'} className={'btn btn-primary'}>확인</button>
          <button type={'reset'} className={'btn btn-secondary'}>취소</button>
        </div>
      </form>
    </>
  );
}

export default JoinForm;










