//  File :  ZuStandTest.tsx
//  User :  it
//  Date :  2026-09-16
//  Time :  오전 9:26
//  Desc :  

import {useEffect} from "react";

import Layout from "./Layout.tsx";

import {ThemeContext} from "../contexts/ThemeContext.ts";
import {UserContext} from "../contexts/UserContext.ts";

//  zustand 를 사용하기 위한 zustand Store 를 import
import {useThemeStore} from "../stores/ThemeStore.ts";
import {useNameStore} from "../stores/NameStore.ts";

function ZuStandTest() {

  const theme1 = 'success';
  const signedInUser = '프로미스나인 송하영';

  //  zustand 로 생성한 Store 객체를 수정하기 위한 함수만 가져옴
  const { setupTheme } = useThemeStore();
  const { setupName } = useNameStore();

  //  useEffect() 의 componentDidUpdate() 기능을 사용하여 데이터를 수정 확인
  useEffect(() => {
    setupName('프로미스나인 송하영');
    setupTheme('success');
  }, [setupTheme, setupName]);

  return (
    <>
      <ThemeContext value={theme1}>
        <UserContext value={signedInUser}>
          <Layout />
        </UserContext>
      </ThemeContext>
    </>
  );
}

export default ZuStandTest;










