import Join from "./components/Join.tsx";
import Parent1 from "./components/Parent1.tsx";
import Parent2 from "./components/Parent2.tsx";
import Join2 from "./components/Join2.tsx";
import WelcomeDialog from "./components/WelcomeDialog.tsx";
import WelcomeDialog2 from "./components/WelcomeDialog2.tsx";
import SignupDialog from "./components/SignupDialog.tsx";

function App() {

  return (
    <div className={'container mt-5'}>
      <h2>여러가지 폼 사용하기</h2>
      <Join />

      <br/><hr/><br/>

      <h2>state 공유</h2>
      <Parent1 />

      <br/><hr/><br/>

      <h2>state 끌어올리기</h2>
      <Parent2 />

      <hr/>

      <h2>state 끌어올리기로 회원 가입 페이지 만들기</h2>
      <Join2 />

      <br/><hr/><br/>

      <h2>컴포넌트 합성</h2>
      <WelcomeDialog />

      <hr/>

      <WelcomeDialog2 />

      <hr/>

      <SignupDialog />


      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App
