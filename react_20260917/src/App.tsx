
//  react-router : SPA(Single Page Application) 인 리액트 프로젝트에서 URL 주소에 따라 서로 다른 화면(페이지 컴포넌트)을 보여줄 수 있도록 하는 라이브러리
//  실제로는 서버에서 html 을 새로 받아오는 것이 아니라 브라우저의 History API 를 사용하여 주소만 변경하고 화면의 컴포넌트를 교체하여 MPA 방식을 사용하는 것처럼 보여줌
//  리액트 라우터 6버전까지는 패키지명이 react-router-dom 이었으나 7 버전부터 react-router 로 변경됨
//  현재는 react-router v8임 (최소사양 : Nodejs 22 버전 이상, react 19 버전, vite 7버전 이상 사용)

//  사용법:
//  설치 :
//    npm install react-router


//  자주 사용하는 리액트 라우터 컴포넌트
//  <BrowserRouter> : 브라우저의 주소(History API) 와 리액트 컴포넌트를 연결하는 최상위 컴포넌트, 라우터를 사용하는 모든 컴포넌트를 감싸야 함
//  <Routes> : 여러 개의 <Route> 를 자식 컴포넌트로 가지며, 현재 URL 과 일치하는 <Route> 를 하나 선택하여 화면에 랜더링함
//  <Route> : URL 과 컴포넌트를 연결하는 객체, <Route> 안에 <Route> 를 중첩하여 사용 시 부모 <Route> 의 주소가 기본 주소가 됨
//    path : 웹 브라우저에 표시되는 url 주소를 설정, 절대/상대 경로를 다 사용 가능, * 사용 시 일치하는 것이 없는 모든 주소를 의미 (* 은 주로 error 페이지 설정 시 사용)
//    element : pat 속성에서 설정한 url 과 매칭되는 컴포넌트를 설정(JSX 문법으로 설정)
//    index : 부모 <Route> 의 주소를 자식의 주소로 그대로 사용 시 설정(path 속성 없이 사용)
//  <Link> : 리액트 라우터에서 사용되는 링크 전용 컴포넌트, html 의 <a> 태그와 같은 역할을 함
//    to : 이동할 url 주소를 설정, <Route> 컴포넌트의 path 에 입력된 주소를 입력
//  <NavLink> : 네비게이션 메뉴에서 사용, <Link> 와 같지만 현재 주소와 일치할 때 className 에 'active' 가 자동으로 붙음
//  <Outlet> : 부모 <Route> 의 컴포넌트 안에서 현재 일치하는 자식 <Route> 의 컴포넌트를 표시하는 위치 설정, 레이아웃의 공통 부분 처리 시 사용


//  쿼리스트링 : 기존의 GET 방식으로 웹 브라우저의 주소창에 파라미터를 함께 전달하는 방식
//  <Route> 컴포넌트의 path 속성값의 변경이 없음(path 에는 '?' 뒤의 내용을 입력하지 않음)
//  element 속성에서 지정한 컴포넌트에서 useLocation() hook 으로 location 객체를 가져올 수 있음
//  location 객체의 속성:
//    pathname : 쿼리스트링을 제외한 현재 주소의 경로
//    search : 맨앞의 '?' 문자를 포함한 쿼리스트링 값 전체
//    hash : 주소의 '#' 문자열 뒤의 값 (페이지 내의 특정 위치로 이동 시 사용)
//    state : 페이지 이동 시 임의로 추가할 상태 값
//    key : location 객체의 고유한 값

//  useLocation(), useSearchParams() hook 을 사용하여 데이터를 가져올 수 있음
//  useLocation() hook 사용 시 원하는 파라미터 값을 가져오기 위해서 사용자가 직접 파싱해야 함
//  useSearchParams() hook 사용 시 파라미터 값만 가져올 수 있음 (URLSearchParams 객체로 가져옴)
//    사용법 :
//      기존URL?파라미터1=값1&파라미터2=값2...
//      const location = useLocation()
//      const [searchParams, setSearchParams] = useSearchParams()
//      searchParams.get('파라미터1')


//  URL 파라미터 : REST API 방식의 주소형태로 구성되는 파라미터
//  <Route> 컴포넌트의 path 속성값 뒤에 '/'와 ':파라미터명' 추가하여 데이터를 전달하는 방식
//  REST 방식으로 구성되어 있을 경우 사용
//  연결된 컴포넌트에서 useParams() hook 을 사용하여 파라미터값을 가져옴
//  typescript 사용 시 useParams() 의 값은 항상 'string | undefined' 타입임 (숫자 필요시 Number() 로 변환)
//    사용법 :
//      기존URL/:파라미터1/:파라미터2 ...
//      <Route path={'url/:test1/:test2'} element={<URL />} />


//  useNavigate() : <Link> 컴포넌트를 사용하지 않고 코드( 이벤트 함수 등) 에서 다른 페이지로 이동할 수 있도록하는 hook
//  사용법 :
//    const navi = useNavigate();
//    navi(-1);   // History 를 사용하여 이전페이지로 이동, 숫자를 음수로 사용 시 이전페이지로 이동, 양수로 사용 시 다음 페이지로 이동, 숫자의 크기에 따라서 이동 단계가 설정
//    navi(url);    // 지정한 URL 로 이동, <Route> 컴포넌트의 path 설정 값 사용
//    navi(url, {replace: true}};   // 현재 페이지를 History 에 남기지 않고 이동(이전 페이지로 이동 불가)


import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./components/pages/Home.tsx";
import About from "./components/pages/About.tsx";
import ErrorPage from "./components/pages/ErrorPage.tsx";
import Login from "./components/pages/Login.tsx";
import Signup from "./components/pages/Signup.tsx";
import Logout from "./components/pages/Logout.tsx";
import Profile2 from "./components/pages/Profile2.tsx";
import Profile1 from "./components/pages/Profile1.tsx";
import Area from "./components/pages/Area.tsx";

function App() {

  return (
    <>
      <div className={'container mt-5'}>
        <BrowserRouter>
          <Routes>
            {/* path 속성의 url 은 절대/상대 경로 모두 사용 가능 */}
            {/* 상대 경로 사용 시 부모 컴포넌트의 주소가 존재해야 함*/}

            {/* 웹 브라우저 주소창에 '서버주소/' <Home> 컴포넌트가 열림*/}
            <Route path={'/'} element={<Home />} />
            {/* url 을 /about 으로 입력 시 About 컴포넌트가 표시됨 */}
            <Route path={'/about'} element={<About />}>
              {/* Outlet 사용 시 부모 컴포넌트의 내용과 자식 컴포넌트의 내용이 모두 표시 */}
              {/* Outlet 사용 시 url 을 '부모 url + 자식 url 형태로 사용 */}
              {/* Outlet 사용 시 자식 컴포넌트에 index 속성을 사용하면 부모 컴포넌트의 url 만 입력해도 자식 컴포넌트의 내용까지 모두 출력함 */}
              <Route index element={<Area />} />
            </Route>
            {/* Route 컴포넌트의 path 속성에 없는 url 입력 시 접속하는 페이지로 설정 */}
            {/* <Route> 는 작성 순서가 아니라 URL 과 가장 구체적으로 일치하는 Route 를 선택하므로 '*' 의 위치는 상관 없음 */}
            <Route path={'*'} element={<ErrorPage />} />
            {/* 절대 경로 방식을 사용하여 path 를 설정 */}
            <Route path={'/pages/login'} element={<Login />} />
            {/* <Route> 를 중첩하여 path 를 설정할 수 있음(상대 경로 방식) */}
            {/* 부모 Route 에 element 속성이 없으면 자식 Route 의 컴포넌트만 표시*/}
            <Route path={'/pages'}>
              {/* 자식 Route 중 index 속성을 사용한 Route 가 부모 Route 의 페이지로 동작 */}
              {/* index : 부모 Route 의 URL 을 자신의 URL 로 사용한다는 의미 */}
              <Route index element={<Signup />} />
              {/* 자식 Route 의 URL 은 '부모 Route 의 URL + 자식 Route 의 URL' 형태로 사용*/}
              {/* 자식 Route 의 path 속성의 시작 부분의 '/' 를 사용하지 않음 */}
              <Route path={'logout'} element={<Logout />} />

              {/* ':username', ':age' 는 URL 파라미터로 동작, 해당 컴포넌트에서 useParams() 로 가져옴 */}
              <Route path={'profile2/:username/:age'} element={<Profile2 />} />
            </Route>
            {/* 쿼리스트링을 사용하여 데이터를 전달 */}
            {/* '/prifile1?username=홍길동&age=30' 형태로 웹 브라우저의 주소창에 입력 */}
            <Route path={'/profile1'} element={<Profile1 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
