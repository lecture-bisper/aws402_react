import SetStateClass from "./components/SetStateClass.tsx";
import SetStateFunction from "./components/SetStateFunction.tsx";
import NotificationList from "./components/NotificationList.tsx";
import Parent from "./components/Parent.tsx";
import Events from "./components/Events.tsx";
import CounterFunc from "./components/CounterFunc.tsx";
import CounterClass from "./components/CounterClass.tsx";
import CounterUseState from "./components/CounterUseState.tsx";
import CounterUseEffect from "./components/CounterUseEffect.tsx";
import VolumeControl from "./components/VolumeControl.tsx";

function App() {

  return (
    <div className={'container mt-5'}>
      <h3>클래스 컴포넌트에서 state 사용하기</h3>
      <SetStateClass />

      <br/>
      <br/>

      <h3>함수 컴포넌트에서 state 사용하기</h3>
      <SetStateFunction />

      <br/>
      <hr/>
      <br/>

      <h3>컴포넌트 생명주기</h3>
      {/*<NotificationList />*/}

      <br/>
      <hr/>
      <br/>

      <h3>props 와 state 차이</h3>
      <Parent />

      <br/>
      <hr/>
      <br/>

      <h3>이벤트 사용하기</h3>
      <Events />

      <br/><hr/><br/>

      <h3>React Hooks 사용하기</h3>
      <br/>

      <h4>함수 컴포넌트에서 hook 없이 그냥 사용했을 경우</h4>
      <CounterFunc />

      <hr/>

      <h4>클래스 컴포넌트에서 state 없이 그냥 사용했을 경우</h4>
      <CounterClass />

      <hr/>

      <h4>함수 컴포넌트에서 useState 를 사용했을 경우</h4>
      <CounterUseState />

      <hr/>

      <h3>useEffect 로 생명주기 함수 사용하기</h3>
      <CounterUseEffect />

      <br/>
      <hr/>
      <br/>

      {/* 문제1 ) 버튼 2 개를 생성하고 (+, -), useState, useEffect 를 사용하여 볼륨 값을 설정하는 프로그램을 작성하세요 */}
      {/* 볼륨의 초기값은 0 으로 설정 */}
      {/* 컴포넌트 호출 시 볼륨의 기본값을 5로 설정 */}
      {/* 버튼 클릭 시 값을 1씩 증가/감소, 최소값은 0, 최대값은 10 */}
      {/* 컴포넌트 이름 : VolumeControl */}
      <h3>문제 1</h3>
      <VolumeControl />


      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App
