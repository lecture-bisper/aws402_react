//  File :  ProfilePage.tsx
//  User :  it
//  Date :  2026-09-16
//  Time :  오전 9:26
//  Desc :  

//  zustand 상태 관리 라이브러리
//  zustand 는 리액트에서 사용하는 상태 관리 라이브러리로 Context API 와 useContext 와 같이 데이터를 컴포넌트에 저장하고 원하는 위치에서 불러서 사용하는 방식
//  create() 함수를 사용하여 object 를 생성하고 상태 관리할 key 와 value 를 저장
//  상태 관리 중인 객체의 데이터를 변경하기 위한 상태 변경 함수를 추가하여 외부에서 데이터를 수정할 수 있도록 함
//  단순히 조상 컴포넌트에서 여러 단계 아래의 자손 컴포넌트로 데이터를 전달 시 데이터 수정용 함수를 추가하지 않아도 됨

//  create() : zustand 에서 제공하는 함수로 zustand 상태 관리 객체를 생성
//  set() : zustand 에서 제공하는 함수로 zustand 로 상태 관리 중인 객체의 데이터를 수정

//  사용법(설치)
//  > npm install zustand

//  사용법(선언):
//  import { create } from 'zustand';   // zustand 라이브러리를 사용하기 위해서 import

//  변수명을 선언, 기본적으로 커스텀 훅이기 때문에 use 를 붙여야 함
//  접미사 Store 는 상태관리 라이브러리 변수라는 의미로 사용함(필요 시 제거하거나 원하는 형태로 사용), Store 는 관례적으로 사용함
//    const use변수명Store = create((set) => ({
//      변수명: 초기값,     // key: value 형태로 입력
//      데이터수정함수명: (newValue) => set(() => ({변수명: newValue})),
//    }));

//    export { use변수명Store }; // export 나 default export 로 외부로 노출


//  사용법(사용):
//    import use변수명Store from './경로명/Store파일이름';

//  타겟 컴포넌트에서 사용 시 객체 분해할당 방식을 사용하여 zustand 객체에서 변수와 데이터 수정용 함수를 모두 가져옴
//  단순히 값만 필요할 경우 변수만 가져올 수 있음, 데이터 수정만 필요 시 데이터 수정용 함수만 가져올 수 있음
//  객체 분해 할당 시 반드시 뒤에 () 를 사용하여 함수를 실행해야 함
//    const { 변수명, 데이터수정함수명 } = use변수명Store();

//  데이터가 수정되는 부분에서 수정되는 데이터를 계속 확인하기 위해서 useEffect() 를 사용하고 의존성 배열에 포함
//    useEffect(() => {
//        데이터수정함수1('수정 데이터1');
//        데이터수정함수2('수정 데이터2');
//        데이터수정함수3('수정 데이터3');
//        ...
//    }, [데이터수정함수1, 데이터수정함수2, ... ]);


import {useContext} from "react";

import {ThemeContext} from "../contexts/ThemeContext.ts";
import {UserContext} from "../contexts/UserContext.ts";
//  zustand 의 Store 객체를 사용하기 위해서 import
import {useThemeStore} from "../stores/ThemeStore.ts";
import {useNameStore} from "../stores/NameStore.ts";

interface PropsProfilePage {
  theme: string;
  user: string;
}

function ProfilePage({theme: propsTheme, user: propsUser}: PropsProfilePage) {

  const contextTheme = useContext(ThemeContext);
  const contextUser = useContext(UserContext);

  //  zustand 의 Store 객체에 저장된 내용을 가져옴
  const { theme } = useThemeStore();
  const { name } = useNameStore();

  return (
    <>
      <div>
        <h4>props 로 받아온 theme : {propsTheme}</h4>
        <h4>props 로 받아온 user : {propsUser}</h4>

        <hr/>

        <h4>Context API 로 받아온 theme : {contextTheme}</h4>
        <h4>Context API 로 받아온 user : {contextUser}</h4>

        <hr/>

        <h4>zustand 로 받아온 theme : {theme}</h4>
        <h4>zustand 로 받아온 name : {name}</h4>
      </div>
    </>
  );
}

export default ProfilePage;










