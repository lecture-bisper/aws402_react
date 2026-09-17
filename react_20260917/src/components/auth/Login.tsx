//  File :  Login.tsx
//  User :  it
//  Date :  2026-09-17
//  Time :  오후 2:07
//  Desc :  

import {Link} from "react-router";
import {type ChangeEvent, type SubmitEventHandler, useState} from "react";

function Login() {

  const [userId, setUserId] = useState<string>("");
  const [userPw, setUserPw] = useState<string>("");

  const changeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const changeUserPw = (e: ChangeEvent<HTMLInputElement>) => setUserPw(e.target.value);

  const submitForm: SubmitEventHandler<HTMLFormElement> = (e) => {

    // axios 서버와 통신

    e.preventDefault();
  }

  return (
    <>
      <div className={'container mt-5'}>
        <div className={'row'}>
          <div className={'col-sm-4 mx-auto'}>
            <div className={'border border-2 border-primary-subtle rounded-3 p-3 pb-1'}>
              <form action="#" onSubmit={submitForm}>
                <div>
                  <div className={'form-floating'}>
                    <input type="text" id={'user-id'} className={'form-control'} placeholder={'User ID'} value={userId} onChange={changeUserId} />
                    <label htmlFor={"user-id"}>User ID</label>
                  </div>
                </div>
                <div className={'mt-3'}>
                  <div className={'form-floating'}>
                    <input type="password" id={'user-pw'} className={'form-control'} placeholder={'Password'} value={userPw} onChange={changeUserPw} />
                    <label htmlFor={'user-pw'}>Password</label>
                  </div>
                </div>
                <div className={'mt-3'}>
                  <div className={'d-grid gap-2'}>
                    <button type={'submit'} className={'btn btn-outline-success'}>로그인</button>
                    <div className={'d-flex justify-content-end'}>
                      <Link to={'/auth/signup'} className={'btn btn-link'}>회원가입</Link>
                    </div>
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

export default Login;










