//  File :  Profile2.tsx
//  User :  it
//  Date :  2026-09-17
//  Time :  오전 10:33
//  Desc :  

import {useNavigate, useParams} from "react-router";

function Profile2() {

  //  리액트 라우터에서 제공하는 useParams() hook 을 사용하여 파라미터로 전달된 데이터 가져오기
  //  useParams() hook 으로 가져온 데이터는 object 타입임
  //  '변수명.파라미터명' 으로 데이터에 접근함
  //  typescript 의 제네릭을 사용하여 데이터 타입을 지정하여 가져올 수 있음
  //    파라미터의 값은 URL에서 출력된 것이므로 'string | undefined' 로 되어 있음

  const profile = useParams();
  //  제네릭 과 리터럴 타입을 사용하면 지정한 속성만 가져올 수 있음
  // const profile = useParams<'username'|'age'>();
  console.log('useParams() 로 가져온 데이터 :');
  console.log(profile);
  console.log(`username : ${profile.username}`);
  console.log(`age : ${profile.age}`);


  //  리액트 라우터에서 제공하는 useNavigate() hook 을 사용하여 이전페이지, 다음페이지 혹은 지정한 페이지로 이동 가능
  //  <Route> 컴포넌트의 path 속성 값을 사용하여 <Link> 컴포넌트 없이 원하는 컴포넌트로 이동할 수 있음
  const navi = useNavigate();

  //  매개변수로 음수 사용 시 이전 페이지, 양수 사용 시 다음 페이지, 주소 사용 시 해당 페이지로 이동
  const goPrev = () => navi(-1);
  const goNext = () => navi(1);
  const goAbout = () => navi('/about');

  return (
    <>
      <div>
        <h1>Profile 2 페이지</h1>
        <p>Rest 방식으로 데이터를 가져오는 페이지</p>

        <br/><br/>

        <h4>useParams() 사용 파라미터 1 : {profile.username}</h4>
        <h4>useParams() 사용 파라미터 2 : {profile.age}</h4>

        <br/><br/>

        <button type={'button'} className='btn btn-warning me-2' onClick={goPrev}>뒤로 가기</button>
        <button type={'button'} className='btn btn-info me-2' onClick={goNext}>앞으로 가기</button>
        <button type={'button'} className='btn btn-primary' onClick={goAbout}>지정한 곳으로 가기</button>
      </div>
    </>
  );
}

export default Profile2;










