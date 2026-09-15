//  File :  WarningBanner.tsx
//  User :  it
//  Date :  2026-09-14
//  Time :  오후 2:21
//  Desc :  

function WarningBanner({warning}: {warning: boolean}) {

  //  부모 컴포넌트에서 전달받은 데이터가 false 일 경우 null 을 반환
  //  null을 반환 시 JSX 문법에서 화면 UI 를 출력하지 않음
  if (!warning) {
    return null;
  }

  return (
    <>
      <h2 className={'text-danger'}>경고!!</h2>
    </>
  );
}

export default WarningBanner;










