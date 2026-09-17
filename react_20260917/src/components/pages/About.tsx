//  File :  About.tsx
//  User :  it
//  Date :  2026-09-17
//  Time :  오전 9:47
//  Desc :  

import {Link, Outlet} from "react-router";

function About() {
  return (
    <>
      <div>
        <h1>소개 페이지</h1>
        <p>리액트 라우터를 사용하여 about 으로 이동한 페이지</p>

        <br/>

        <Link to={'/'}>Home 으로 이동</Link><br/>
        <Link to={'/about'}>about 으로 이동</Link><br/>
        <Link to={'/about/area'}>area 로 이동</Link>

        <br/>

        {/* 자식 Route 의 주소가 웹 브라우저의 URL 과 일치하면 자식 컴포넌트의 화면도 모두 출력되고, 일치하지 않으면 부모 컴포넌트의 내용만 출력 */}
        <Outlet />
      </div>
    </>
  );
}

export default About;










