//  File :  App2.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오후 3:08
//  Desc :

interface ThemeProps {
  theme: string;
}

//  props 를 사용하는 기존의 데이터 전달 방식
//  리액트에서 데이터의 흐름은 기본적으로 부모 컴포넌트에서 자식 컴포넌트로 단방향으로 흐름
//  조상 컴포넌트에서 타겟 커포넌트로 데이터를 전달 시 props 를 사용하며, 중간에 있는 컴포넌트들은 사용하지 않는 속성을 받아서 자식 컴포넌트로 그대로 전달함

//  부모 컴포넌트, 조상 컴포넌트, 데이터를 타겟 컴포넌트로 최초 전달하는 컴포넌트
function App2() {
  return (
    <div className={'container mt-5'}>
      {/* 자식 컴포넌트 호출, theme 라는 이름의 속성으로 데이터를 전달 */}
      <Toolbar theme={'success'} />
    </div>
  );
}

//  자식 컴포넌트 1, 부모 컴포넌트에서 전달받은 데이터 theme 를 사용하지 않음, 자식 컴포넌트 호출 시 theme 라는 이름으로 다시 전달
function Toolbar({theme}: ThemeProps) {
  return <ThemeButton theme={theme} />
}

//  자식 컴포넌트 2, 부모 컴포넌트에서 전달받은 데이터 theme 를 사용하지 않음, 자식 컴포넌트 호출 시 theme 라는 이름으로 다시 전달
function ThemeButton({theme}: ThemeProps) {
  return <Button theme={theme} />
}

//  자식 컴포넌트 3, 타겟 컴포넌트, 부모 컴포넌트에서 전달받은 데이터 theme 를 사용함
function Button({theme}: ThemeProps) {
  const clickButton = () => alert(`사용한 테마 : ${theme}`);

  return <button type={'button'} className={`btn btn-${theme}`} onClick={clickButton}>{theme} 테마 버튼</button>
}

export default App2;










