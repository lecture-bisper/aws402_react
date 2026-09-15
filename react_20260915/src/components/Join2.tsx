//  File :  Join2.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오전 11:40
//  Desc :  

import {useState} from "react";
import JoinForm from "./JoinForm.tsx";

function Join2() {

  //  state로 관리되고 있는 변수
  const [id, setId] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  //  state 로 관리되는 변수의 값을 초기화하는 함수
  const resetData = () => {
    setId('');
    setPwd('');
    setName('');
    setEmail('');
  }

  return (
    <>
      <div className={'row'}>
        <div className={'col-sm-4 mx-auto border border-2 bordeer-info rounded-3 p-3'}>
          <h3 className={'text-center mt-3'}>회원 가입</h3>
          {/* 자식컴포넌트 호출 */}
          {/* 자식 컴포넌트 호출 시 setState() 함수를 전달 */}
          <JoinForm setupId={setId} setupPwd={setPwd} setupName={setName} setupEmail={setEmail} reset={resetData} />
        </div>
      </div>
      <hr className={'px-5 my-3'}/>
      <div className={'row'}>
        <div className={'col-sm-4 mx-auto border border-2 border-secondary rounded-3 p-3 text-start'}>
          {/* state 끌어올리기를 통해서 자식 컴포넌트가 전달한 데이터를 화면에 출력*/}
          <h4>사용자 ID : {id}</h4>
          <h4>사용자 PW : {pwd}</h4>
          <h4>사용자 Name : {name}</h4>
          <h4>사용자 Email : {email}</h4>
        </div>
      </div>
    </>
  );
}

export default Join2;










