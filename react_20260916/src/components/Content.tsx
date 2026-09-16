//  File :  Content.tsx
//  User :  it
//  Date :  2026-09-16
//  Time :  오전 9:26
//  Desc :  

import {useContext} from "react";

import {UserContext} from "../contexts/UserContext.ts";
import {ThemeContext} from "../contexts/ThemeContext.ts";

import ProfilePage from "./ProfilePage.tsx";

function Content() {

  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <>
      <ProfilePage theme={theme} user={user}/>
    </>
  );
}

export default Content;










