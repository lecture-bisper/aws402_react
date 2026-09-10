//  File :  Car.tsx
//  User :  it
//  Date :  2026-09-10
//  Time :  오전 10:32
//  Desc :  

import Profile from "./Profile.tsx";

//  컴포넌트의 이름은 첫글자가 반드시 대문자이어야 함
//  리액트에서 컴포넌트로 생성되는 리액트 엘리먼트와 html 엘리먼트를 구분하기 위해서 컴포넌트의 이름을 대문자로 시작
//  화살표 함수로 컴포넌트를 만들어도 상관없음
const Car = () => {
  return (
    <>
      {/* 자식 컴포넌트를 3번 호출 */}
      {/* 자식 컴포넌트에 데이터 4개를 각각 전달함 */}
      {/* 데이터 전달 시 string 타입은 '', "", `` 으로 감싸서 전달, {} 생략 가능 */}
      {/* number, boolean, 변수 등은 {} 안에 데이터를 입력하여 전달 */}
      <Profile name={'EV6'} type='SUV' price={4660} ele={true} />
      <Profile name={'더 뉴 아이오닉5'} type='SUV' price={4700} ele={true} />
      <Profile name='K5' type={'세단'} price={2507} ele={false} />
    </>
  );
}

export default Car;










