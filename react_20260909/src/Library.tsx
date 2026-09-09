//  File :  Library.tsx
//  User :  it
//  Date :  2026-09-09
//  Time :  오후 5:00
//  Desc :  

import Books from "./Books.tsx";

function Library() {
  return (
    <>
      <Books name={'코딩 자율학습 리액트 프론트엔드 개발 입문'} numOfPage={819} />
      <Books name={'Doit HTML CSS 자바스크립트 웹표준의 정석'} numOfPage={678} />
      <Books name={'Doit 오라클로 배우는 SQL 입문'} numOfPage={'412'} />
    </>
  );
}

export default Library;










