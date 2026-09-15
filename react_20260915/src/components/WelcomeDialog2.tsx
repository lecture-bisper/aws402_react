//  File :  WelcomeDialog2.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오후 2:12
//  Desc :  

import Dialog2 from "./Dialog2.tsx";

function WelcomeDialog2() {
  return (
    <>
      <div>
        {/*<Dialog2 title={'어서오세요'} message={'우리 사이트의 방문을 환영합니다.'} color={'info'}/>*/}
        <Dialog2 title={'경고!!'} message={'오류가 발생했습니다.'} color={'danger'}/>
      </div>
    </>
  );
}

export default WelcomeDialog2;










