//  File :  Layout.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오후 4:16
//  Desc :  

//  부모 컴포넌트에서 전달받은 데이터 없음
import Content from "./Content.tsx";

function Layout() {
  return (
    <div>
      {/* 자식 컴포넌트 호출, 데이터 전달 없음 */}
      <Content />
    </div>
  );
}

export default Layout;










