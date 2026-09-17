//  File :  Signup.tsx
//  User :  it
//  Date :  2026-09-17
//  Time :  오후 2:07
//  Desc :  

import {type ChangeEvent, type ReactEventHandler, type SubmitEventHandler, useState} from "react";
import {useNavigate} from "react-router";

function Signup() {

  const [userId, setUserId] = useState<string>('');
  const [userPw, setUserPw] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  const navi = useNavigate();

  const changeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const changeUserPw = (e: ChangeEvent<HTMLInputElement>) => setUserPw(e.target.value);
  const changeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);
  const changeUserEmail = (e: ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value);

  const submitForm: SubmitEventHandler<HTMLFormElement> = (e) => {

    // axios 로 서버와 통신

    e.preventDefault();
  }

  const resetForm: ReactEventHandler<HTMLFormElement> = (e) => {
    navi(-1);
    e.preventDefault();
  }

  return (
    <>
      <div className={'container mt-5'}>
        <div className={'row'}>
          <div className={'col-sm-4 mx-auto'}>
            <div className={'border border-2 border-primary-subtle rounded-3 p-3'}>
              <form action="#" onSubmit={submitForm} onReset={resetForm}>
                <div>
                  <div className={'form-floating'}>
                    <input type="text" id={'user-id'} className={'form-control'} placeholder={'User ID'} value={userId} onChange={changeUserId} />
                    <label htmlFor={"user-id"}>User ID</label>
                  </div>
                </div>
                <div className={'mt-3'}>
                  <div className={'form-floating'}>
                    <input type="text" id={'user-pw'} className={'form-control'} placeholder={'Password'} value={userPw} onChange={changeUserPw} />
                    <label htmlFor={"user-pw"}>Password</label>
                  </div>
                </div>
                <div className={'mt-3'}>
                  <div className={'form-floating'}>
                    <input type="text" id={'user-name'} className={'form-control'} placeholder={'User Name'} value={userName} onChange={changeUserName} />
                    <label htmlFor={"user-name"}>User Name</label>
                  </div>
                </div>
                <div className={'mt-3'}>
                  <div className={'form-floating'}>
                    <input type="text" id={'user-email'} className={'form-control'} placeholder={'User Email'} value={userEmail} onChange={changeUserEmail} />
                    <label htmlFor={"user-email"}>User Email</label>
                  </div>
                </div>
                <div className={'mt-3'}>
                  <div className={'d-grid gap-2'}>
                    <button type={'submit'} className={'btn btn-outline-primary'}>회원가입</button>
                    <button type={'reset'} className={'btn btn-outline-secondary'}>취소</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;










