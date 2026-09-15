//  File :  FancyBorder2.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오후 1:54
//  Desc :  

import type {ReactNode} from "react";

//  사용자 정의 타입 설정
interface FancyBorder2Props {
  color: string;
  // children 에 ? 기호를 사용하여 null(undefined) 이 가능함을 알려줌
  children?: ReactNode;
}

//  Containment 방식 사용 시 자식 컴포넌트의 UI 일부분을 부모 컴포넌트에서 전달받아서 사용
function FancyBorder2({color, children}: FancyBorder2Props) {
  return (
    <>
      <div className={'border border-2 border-info rounded-3 m-3 p-3'}>
        <h4 className={'mb-3 text-' + color}>자식 컴포넌트 영역</h4>
        {/* 부모 컴포넌트에서 전달받은 html 태그를 props 객체를 통해서 사용할 수 있음 */}
        {/* 전달받은 html 태그 및 컴포넌트는 props.children 을 통해서 사용할 수 있음 */}
        {children}
      </div>
    </>
  );
}

export default FancyBorder2;










