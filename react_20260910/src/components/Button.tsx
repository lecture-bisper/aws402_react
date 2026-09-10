//  File :  Button.tsx
//  User :  it
//  Date :  2026-09-10
//  Time :  오전 9:31
//  Desc :

import './myStyle.css';
import type {ReactNode} from "react";

function Button(props: {color: string, children: ReactNode}) {
  return (
    <button className={`bg-${props.color}`}>
      <b>{props.children}</b>
    </button>
  );
}

export default Button;










