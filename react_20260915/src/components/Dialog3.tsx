//  File :  Dialog3.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오후 2:25
//  Desc :  

import FancyBorder2 from "./FancyBorder2.tsx";
import type {ReactNode} from "react";

interface Dialog3Props {
  title: string;
  message: string;
  color: string;
  children?: ReactNode;
}

//  자식 컴포넌트인 Dialog3 은 범용적으로 사용할 수 있는 컴포넌트
function Dialog3({title, message, color, children}: Dialog3Props) {
  return (
    <>
      <div>
        <FancyBorder2 color={color}>
          <h1>{title}</h1>
          <p>{message}</p>
          {children}
        </FancyBorder2>
      </div>
    </>
  );
}

export default Dialog3;










