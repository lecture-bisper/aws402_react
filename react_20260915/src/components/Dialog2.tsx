//  File :  Dialog2.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오후 2:13
//  Desc :  

import FancyBorder2 from "./FancyBorder2.tsx";

interface Dialog2Props {
  title: string;
  message: string;
  color: string;
}


//  Specialization : 범용적으로 사용할 수 있는 컴포넌트를 미리 생성해 두고, 특정 부분에 사용하여 특별한 컴포넌트로 만들어서 사용하는 것
function Dialog2({title, message, color}: Dialog2Props) {
  return (
    <>
      <div>
        <FancyBorder2 color={color}>
          <h1>{title}</h1>
          <p>{message}</p>
        </FancyBorder2>
      </div>
    </>
  );
}

export default Dialog2;










