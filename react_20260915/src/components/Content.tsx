//  File :  Content.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오후 4:16
//  Desc :  

import ThemeContext from "../contexts/ThemeContext.ts";
import UserContext from "../contexts/UserContext.ts";

import ProfilePage from "./ProfilePage.tsx";
import {useContext} from "react";

//  부모 컴포넌트에서 전달받은 데이터 없음
function Content() {
  //  useContext : Context 를 쉽게 사용하기 위해서 제공되는 리액트 Hook 중 하나
  //  Provider 를 통해서 저장된 데이터를 useContext() 훅을 사용하면 Consumer 없이 쉽게 가져올 수 있음
  //  사용법 :
  //  const 변수명 = useContext(데이터가 저장된 Context);

  // useContext() 훅을 사용하여 Context 에 저장된 데이터 가져오기
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div>
      {/* props 를 통해서 Context 가 가지고 있던 데이터 전달 */}
      <ProfilePage theme={theme} user={user}/>
    </div>
  );
}

export default Content;










