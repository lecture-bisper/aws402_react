//  File :  Hello.tsx
//  User :  it
//  Date :  2026-09-18
//  Time :  오전 9:37
//  Desc :  

import axios from "axios";

function Hello() {

  const clkBtn = () => {
    axios.get('http://localhost:8080/hello')
      .then(res => {
        console.log('통신 성공!!');
        console.log(res.data);

        const msg = `통신 성공!!\n${res.data}`;
        alert(msg);
      })
      .catch(err => {
        console.log('통신 실패!!');
        console.log(err);
        alert('통신 실패!!');
      });
  }

  return (
    <>
      <div className={'container mt-5'}>
        <h1>리액트 + 스프링 서버</h1>
        <button type={'button'} className={'btn btn-primary'} onClick={clkBtn}>확인</button>
      </div>
    </>
  );
}

export default Hello;










