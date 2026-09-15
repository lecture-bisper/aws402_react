//  File :  WelcomeDialog.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오후 12:39
//  Desc :  

import FancyBorder1 from "./FancyBorder1.tsx";
import FancyBorder2 from "./FancyBorder2.tsx";

function WelcomeDialog() {
  return (
    <>
      <div className={'border border-2 border-primary p-3'}>
        <h3>부모 컴포넌트 영역</h3>
        <br/>

        <h3>기존 사용 방법</h3>
        {/* 부모 컴포넌트에서 자식 컴포넌트를 호출하여 UI 구성 */}
        {/* 자식 컴포넌트에 UI 를 구성하는 모든 요소가 있음 */}

        {/* 단축 방식 */}
        <FancyBorder1 color={'info'} />
        {/* 아래가 정규 방식 */}
        {/*<FancyBorder1 color={'blue'}></FancyBorder1>*/}

        <hr/>

        <h3>Containment 방식</h3>

        {/* 부모 컴포넌트에서 자식 컴포넌트를 호출하여 UI를 구성 시 자식 컴포넌트가 구성할 UI 의 요소를 추가로 전달 */}
        {/* 부모 컴포넌트가 자식 컴포넌트로 전달하는 UI 구성요소는 props의 children 에 포함되어 전달됨 */}
        <FancyBorder2 color={'info'}>
          <h1>안녕하세요</h1>
          <p>우리 사이트의 방문을 환영합니다.</p>
        </FancyBorder2>
      </div>
    </>
  );
}

export default WelcomeDialog;










