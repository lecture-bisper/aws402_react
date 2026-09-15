//  File :  ProfilePage.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오후 4:17
//  Desc :  

//  useContext 훅을 사용하기 위해서 import
import {useContext} from "react";
//  데이터가 저장된 Context 를 import
import ThemeContext from "../contexts/ThemeContext.ts";
import UserContext from "../contexts/UserContext.ts";

interface ProfilePageProps {
  theme: string;
  user: string;
}

function ProfilePage({theme, user}: ProfilePageProps) {

  //  Context 에서 useContext() 훅을 사용하여 저장된 데이터 가져오기
  const contextTheme = useContext(ThemeContext);
  const contextUser = useContext(UserContext);

  return (
    <div>
      <h4>props 로 받아온 user : {user}</h4>
      <h4>props 로 받아온 theme : {theme}</h4>
      <hr/>
      <h4>useContext() 로 받아온 user : {contextUser}</h4>
      <h4>useContext() 로 받아온 theme : {contextTheme}</h4>
    </div>
  );
}

export default ProfilePage;










