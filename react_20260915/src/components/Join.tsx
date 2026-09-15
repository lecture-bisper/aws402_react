//  File :  Join.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오전 9:20
//  Desc :  

import {type ChangeEvent, type SubmitEventHandler, useState} from "react";

function Join() {

  const [userId, setUserId] = useState<string>('');
  const [userPwd, setUserPwd] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');
  const [userGender, setUserGender] = useState<string>('');

  const changeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const changeUserPwd = (e: ChangeEvent<HTMLInputElement>) => setUserPwd(e.target.value);
  const changeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);
  const changeUserEmail = (e: ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value);
  const changeUserPhone = (e: ChangeEvent<HTMLInputElement>) => setUserPhone(e.target.value);
  const changeUserGender = (e: ChangeEvent<HTMLSelectElement>) => setUserGender(e.target.value);

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    const message = `사용자 ID : ${userId}
사용자 비밀번호 : ${userPwd}
사용자 이름 : ${userName}
사용자 이메일 : ${userEmail}
사용자 휴대전화 : ${userPhone}
사용자 성별 : ${userGender}`;
    console.log(message);
    alert(message);

    e.preventDefault();
  }

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <div className={'row'}>
          <div className={'col-sm-4 mx-auto border border-3 border-primary rounded-3 p-3'}>
            {/* 사용자ID, 비밀번호, 이름, 이메일, 전화, 성별*/}
            <div className={''}>
              <label htmlFor={'user-id'} className={'form-label'}>User ID</label>
              <input type={"text"} className={'form-control'} id={'user-id'} placeholder={'사용자 ID를 입력하세요'} value={userId} onChange={changeUserId}/>
            </div>
            <div className={'mt-3'}>
              <label htmlFor={"user-pw"} className={'form-label'}>User Password</label>
              <input type={"password"} className={'form-control'} id={'user-pw'} placeholder={'비밀번호를 입력하세요'} value={userPwd} onChange={changeUserPwd}/>
            </div>
            <div className={'mt-3'}>
              <label htmlFor={"user-name"} className={'form-label'}>User Name</label>
              <input type={"text"} className={'form-control'} id={'user-name'} placeholder={'사용자 이름을 입력하세요'} value={userName} onChange={changeUserName}/>
            </div>
            <div className={'mt-3'}>
              <label htmlFor={"user-email"} className={'form-label'}>User Email</label>
              <input type={"email"} className={'form-control'} id={'user-email'} placeholder={'사용자 이메일을 입력하세요'} value={userEmail} onChange={changeUserEmail}/>
            </div>
            <div className={'mt-3'}>
              <label htmlFor={"user-phone"} className={'form-label'}>User Phone</label>
              <input type={"text"} className={'form-control'} id={'user-phone'} placeholder={'사용자 휴대폰 번호를 입력하세요'} value={userPhone} onChange={changeUserPhone}/>
            </div>
            <div className={'mt-3'}>
              <label htmlFor={"user-gender"} className={'form-label'}>User Gender</label>
              <select className={'form-control'} id={"user-gender"} value={userGender} onChange={changeUserGender}>
                <option value={''}>선택하세요</option>
                <option value={"male"}>남자</option>
                <option value={"female"}>여자</option>
              </select>
            </div>
            <hr/>
            <div className={'mt-3 d-grid gap-2'}>
              <button type={'submit'} className={'btn btn-primary'}>확인</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Join;










