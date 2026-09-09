//  리액트에서 제공하는 자바스크립트 문법 엄격 검사 모드를 사용하는 컴포넌트 가져오기
import { StrictMode } from 'react'
//  react-dom : 리액트에서 사용하는 dom 객체, virtual dom 을 의미
import { createRoot } from 'react-dom/client'
import './index.css'
//  default export 로 선언된 컴포넌트를 import 시 {} 생략
import App from './App.tsx'

//  js 로 id 가 'root' 인 html 태그 검색
// virtual dom 을 생성
//  render() : 리액트로 UI 를 실제로 그려주는 함수
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 위에서 import 한 App.tsx 파일, App 라는 컴포넌트 */}
    {/* XML 문법을 사용하기 때문에 사용자 정의 태그를 사용할 수 있음 */}
    {/* XML 에서 태그는 반드시 시작 태그 와 끝 태그가 1쌍으로 되어 있음 */}
    {/* 시작 태그만 사용 시  시작 태그의 끝에 종료를 의미하는 '/' 붙여야 함 */}
    {/*<App></App>*/}
    <App />
  </StrictMode>,
)
