//  File :  SignupDialog.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오후 2:25
//  Desc :  

import {type ChangeEvent, useState} from "react";
import Dialog3 from "./Dialog3.tsx";

function SignupDialog() {

  const [nickName, setNickName] = useState('');

  const changeNickName = (e: ChangeEvent<HTMLInputElement>) => setNickName(e.target.value);
  const clickSignup = () => alert(`어서오세요 ${nickName}`);
  const changeCheckbox = () => alert(`체크되었습니다.`);

  return (
    <>
      <div>
        {/* 부모 컴포넌트에서 자식 컴포넌트 호출 시 containment 방식을 사용하여 html 태그를 자식 컴포넌트의 컨텐츠 영역에 포함해서 전달 */}
        <Dialog3 title={'화성 탐사 프로그램'} message={'닉네임을 입력하세요'} color={'primary'}>
          <input type={"text"} className={'form-control'} value={nickName} onChange={changeNickName}/>
          <button type={'button'} className={'btn btn-primary mt-2'} onClick={clickSignup}>가입하기</button>
        </Dialog3>

        <br/>

        <Dialog3 title={'심해 탐사 프로그램'} message={'닉네임을 입력하세요'} color={'success'}>
          <label htmlFor={"chk"} className={'form-check-label me-3'}>18세 이상 :
            <input type={"text"} className={'form-check-input ms-2'} id={'chk'} onChange={changeCheckbox}/>
          </label>
          <button type={'button'} className={'btn btn-primary'} onClick={clickSignup}>가입하기</button>
        </Dialog3>
      </div>
    </>
  );
}

export default SignupDialog;










