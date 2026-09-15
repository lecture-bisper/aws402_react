//  File :  App4.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오후 4:09
//  Desc :  

//  Context 를 사용하기 위해서 사용자 Context 를 파일로 분리 후 import 로 가져옴
import ThemeContext from "./contexts/ThemeContext";
import UserContext from "./contexts/UserContext";
import Layout from "./components/Layout.tsx";

function App4() {

  //  Provider 로 전달할 데이터 설정
  const theme = 'primary';
  const signedInUser = '아이유';

  return (
    <div className={'container mt-5'}>
      {/* import 한 Context 에 Provider 를 사용하여 데이터 저장 */}
      {/* Context 는 중복 가능 */}
      <ThemeContext value={theme}>
        <UserContext value={signedInUser}>
          {/* 자식 컴포넌트 호출, 전달하는 데이터 없음 */}
          <Layout />
        </UserContext>
      </ThemeContext>
    </div>
  );
}

export default App4;










