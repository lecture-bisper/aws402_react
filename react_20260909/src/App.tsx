import './App.css'
import Library from "./Library.tsx";

//  함수 컴포넌트 사용, 현재 리액트는 함수 컴포넌트만 사용, 전체가 다 자바스크립트 코드
function App() {
  //  일반 자바 스크립트 코드를 입력하는 영역

  //  return : 일반 자바스크립트에서 return 은 함수의 반환값을 출력하는 부분이지만 리액트의 jsx 에서는 리액트의 UI 를 그려주는 부분임
  //  클래스 컴포넌트의 render() 함수와 동일한 기능을 함
  //  jsx 문법으로 UI 를 입력하면 됨
  //  return 반환 요소는 반드시 1개이어야함
  //    반환되는 태그가 단 1개만 존재할 경우 () 생략 가능함
  //    반환되는 태그가 여러개일 경우 부모 태그는 무조건 1개이어야 함
  //    리액트의 JSX 에서 <> 는 div 태그를 의미

  //  JSX 는 기본적으로 모든 html 태그를 제공함
  //  JSX 의 html 태그에 js 의 예약어와 겹치는 부분이 존재하기 때문에 해당 부분을 카멜명명법을 사용한 다른 속성명으로 수정해서 사용함
  //    class -> className, for -> htmlFor, readonly -> readOnly, colspan -> colSpan, enctype -> encType
  //  return 안에 JSX 문법으로 html 태그와 js 코드를 입력하여 사용
  //  JSX 문법 안에서 JS 코드는 {} 안에 입력

  //   자바스크립트 변수 선언
  const text = '자바스크립트 코드';
  const tag = <p>자바스크립트 코드로 만든 html 태그</p>
  const uri = 'https://www.naver.com';

  return (
    <div>
      {/* 리액트 플래그먼트, html 태그로 <div> 와 같음 */}
      <h1>처음만드는 리액트 UI</h1>
      <h2>소제목</h2>
      <div>
        <p>{'자바스크립트 코드를 입력할 수 있음'}</p>
        {/* 자바스크립트 코드에 있는 변수를 JSX 문법에서 불러옴 */}
        <p>{text}</p>
        {tag}
        <a href={uri}>네이버 홈페이지</a>
      </div>

      <br/>
      <hr/>
      <br/>

      <Library />
    </div>
  );
}

//  default export 로 함수 App 을 외부로 출력, 파일 하나당 default export 는 1개
export default App








