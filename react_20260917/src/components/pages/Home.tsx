//  File :  Home.tsx
//  User :  it
//  Date :  2026-09-17
//  Time :  오전 9:47
//  Desc :  

import {Link} from "react-router";

function Home() {
  return (
    <>
      <div>
        <h1>Home 페이지</h1>
        <p>접속 시 가장 먼저 보이는 페이지</p>

        <br/>

        {/* <Route> 의 path 에 설정한 URL 대로 <Link> 의 to 속성에 입력 */}
        {/* to 에 '/'가 없으면 상대 경로로 동작(현재 위치를 기준으로 이동)*/}
        <Link to={'about'}>소개 페이지로 이동</Link>
      </div>
    </>
  );
}

export default Home;










