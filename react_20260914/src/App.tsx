import Accommodate from "./components/Accommodate.tsx";
import Greeting from "./components/Greeting.tsx";
import LoginControl from "./components/LoginControl.tsx";
import MailBox from "./components/MailBox.tsx";
import LoginControl2 from "./components/LoginControl2.tsx";
import MainPage from "./components/MainPage.tsx";
import AttendanceBook from "./components/AttendanceBook.tsx";
import NameForm from "./components/NameForm.tsx";
import RequestForm from "./components/RequestForm.tsx";
import FruitSelect from "./components/FruitSelect.tsx";
import Reservation from "./components/Reservation.tsx";

function App() {

  return (
    <>
      <div className={'container mt-5'}>
        <h2>커스텀 훅</h2>
        <Accommodate />

        <br/><hr/><br/>

        <h2>조건부 랜더링</h2>
        <Greeting isLoggedIn={false} />

        <br/><hr/><br/>

        <h2>엘리먼트 변수</h2>
        <LoginControl isLogin={false}/>

        <br/><hr/><br/>

        <h2>인라인 IF</h2>
        <MailBox unreadMessages={0} count={0}/>

        <br/><hr/><br/>

        <h2>인라인 IF~ELSE</h2>
        <LoginControl2 isLogin={false} />

        <br/><hr/><br/>

        <h2>렌더링 막기</h2>
        <MainPage />

        <br/><hr/><br/>

        <h2>리스트와 key</h2>
        <AttendanceBook />

        <br/><hr/><br/>

        <h2>Form 사용하기</h2>
        <NameForm />

        <hr/>

        <RequestForm />

        <hr/>

        <FruitSelect />

        <hr/>

        <Reservation />

      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </>
  );
}

export default App
