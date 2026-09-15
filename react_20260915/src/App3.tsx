//  File :  App3.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오후 3:29
//  Desc :  

import {createContext} from "react";

//  Context API : 리액트는 기본적으로 단방향으로 데이터를 전달함(부모 -> 자식)
//  조상 컴포넌트에서 아래에 있는 타겟 컴포넌트로 데이터를 전달 시 props 를 사용하여 타겟 컴포넌트까지 존재하는 모든 중간 컴포넌트를 통해서 순차적으로 데이터를 전달함
//  조상 컴포넌트와 타겟 컴포넌트 사이의 모든 컴포넌트들은 사용하지 않는 props 데이터를 가지고 있어야 함
//  조상 컴포넌트와 타겟 컴포넌트 간의 거리가 먼면 멀수록 관리가 어렵기 때문에 전역 변수로 사용할 수 있는 Context 를 생성하여 데이터를 저장하고 필욯나 컴포넌트에서 해당 Context 와 데이터를 호출하여 한번에 전달

//  React.createContext(기본값) : Context API 를 사용하기 위해 Context 를 생성하는 메소드, 기본값 설정 가능
//  Provider 를 사용하지 않았을 경우 createContext() 를 통해서 설정된 기본값을 Consumer 가 사용함
//  초기값으로 undefined 사용 시 기본값을 사용할 수 없음
//  사용법 :
//  > const Context변수명 = React.createContext(기본값);

//  Context.Provider : createContext() 를 통해 생성된 Context 에 원하는 데이터를 저장
//  value 속성에 전달하고자 하는 데이터를 입력
//  사용법 :
//  <MyContext.Provider value={전달할 값}>

//  Context.Consumer : Provider 를 통해서 저장된 데이터를 가져옴
//  Provider 에서 value 속성에 저장한 값을 가져옴
//  실제로 Context의 데이터를 사용할 컴포넌트에는 props 로 데이터 전달
//  사용법 :
//  <MyContext.Consumer>
//    {value => 데이터를 사용할 컴포넌트 }
//  </MyContext.Consumer>

//  Context.displayName : 개발자 도구에서 확인할 경우 Context 를 구분하기 위한 이름 설정
//  Context 는 여러개를 중복으로 사용할 수 있기 때문에 개발자도구에서 사용자가 쉽게 확인할 수 있도록 함


//  Context API 를 사용하여 Context 객체 생성, 기본값으로 success 를 설정
const ThemeContext = createContext('success');

interface ThemeProps {
  theme: string;
}

// 최상위 부모 컴포넌트, 타겟 컴포넌트로 데이터 전달
function App3() {
  return (
    <>
      <div className={'container mt-5'}>
        {/* Context 에서 제공하는 Provider 를 사용하여 전달할 데이터를 설정 */}
        {/* Provider 하나에 데이터 1개 저장, 동시에 여러개의 데이터를 저장 시 배열이나 object 사용 */}
        {/* Provider 는 여러개 중복 사용 가능 */}
        <ThemeContext.Provider value={'info'}>
          <Toolbar2 />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

//  첫번째 자식 컴포넌트, 부모에게서 전달받은 데이터 없음
function Toolbar2() {
  //  자식 컴포넌트 호출, 전달하는 데이터 없음
  return <ThemeButton2 />
}

//  두번째 자식 컴포넌트, 부모에게서 전달받은 데이터 없음
function ThemeButton2() {
  return (
    //  Context 에서 제공하는 Consumer 를 사용하여 Provider 를 통해서 저장한 데이터를 가져옴
    //  콜백 함수 방식으로 동작
    <ThemeContext.Consumer>
      {/* 자식 컴포넌트 호출 시 Consumer 를 사용하여 가져온 데이터를 전달 */}
      {value => <Button2 theme={value} />}
    </ThemeContext.Consumer>
  );
}

//  마지막 컴포넌트(타겟컴포넌트), 부모 컴포넌트에서 전달받은 데이터를 사용
function Button2({theme}: ThemeProps) {
  const clickButton = () => alert(`사용한 테마 : ${theme}`);

  return <button type={'button'} className={`btn btn-${theme}`} onClick={clickButton}>{theme} 테마버튼</button>
}

export default App3;










