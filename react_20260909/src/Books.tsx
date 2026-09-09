//  File :  Books.tsx
//  User :  it
//  Date :  2026-09-09
//  Time :  오후 4:54
//  Desc :

function Books(props: {name: string, numOfPage: number}) {
  //  JSX 문법으로 UI 를 그리는 부분
  return (
    <>
      <h2>{`이 책의 이름은 ${props.name} 입니다.`}</h2>
      <h3>{`이 책은 총 ${props.numOfPage} 페이지로 구성되어 있습니다.`}</h3>
    </>
  );
}

export default Books;










