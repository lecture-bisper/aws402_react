//  File :  UserContext.ts
//  User :  it
//  Date :  2026-09-15
//  Time :  오후 4:13
//  Desc :  

import {createContext} from "react";

//  외부에서 쉽게 사용할 수 있도록 파일로 분리한 Context
const UserContext = createContext('Guest');
UserContext.displayName = '유저 컨텍스트';

export default UserContext;












