//  File :  FancyBorder1.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오후 12:39
//  Desc :  

interface FancyBorder1Props {
  color: string;
}

//  기존 방식은 자식 컴포넌트에 UI 구성에 필요한 것들이 모두 존재
function FancyBorder1({color}: FancyBorder1Props) {
  return (
    <>
      <div className={'border border-2 border-info rounded-3 p-3 m-3'}>
        <h4 className={'mb-3 text-' + color}>자식 컴포넌트 영역</h4>
        <h1>어서오세요</h1>
        <p>우리 사이트의 방문을 환영합니다.</p>
      </div>
    </>
  );
}

export default FancyBorder1;










