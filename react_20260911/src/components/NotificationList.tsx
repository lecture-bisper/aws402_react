//  File :  NotificationList.tsx
//  User :  it
//  Date :  2026-09-11
//  Time :  오전 10:48
//  Desc :  

import {Component} from "react";
import Notification from "./Notification.tsx";

//  화면에 출력할 더미 데이터, 전역 변수
const reservedNotifications = [
  { message: '안녕하세요. 메시지 테스트입니다.' },
  { message: '두번째 메시지입니다.' },
  { message: '세번째 메시지입니다.' },
  { message: '네번째 메시지입니다.' },
  { message: '다섯번째 메시지입니다.' },
  { message: '여섯번째 메시지입니다.' },
];

//  자바스크립트의 타이머 객체 값을 저장하기 위한 변수
let timer: number | null = null;

//  클래스 컴포넌트로 컴포넌트 선언
class NotificationList extends Component {

  // 생성자
  constructor(props) {
    super(props);

    // state 객체
    this.state = {
      // notifications 라는 이름의 빈 배열을 state로 관리
      notifications: [],
    }
  }

  //  현재 컴포넌트의 UI 화면을 구성하고 부모 컴포넌트에 출력된 후 자동 동작하는 생명주기 함수
  componentDidMount() {

    // 객체의 구조 분해 할당 사용하여 state 가 관리하고 있는 배열 notifications 를 componentDidMount() 의 지역변수로 받아서 선언 (현재 빈 배열)
    const { notifications } = this.state;

    //  setInterval() : 자바스크립트의 타이머 함수, 지정한 시간이 지난 후 반복 동작
    timer = setInterval(() => {
      //  지역변수 notifications 의 크기를 전역변수 reservedNotifications 의 크기 비교
      if (notifications.length < reservedNotifications.length) {
        //  지역변수의 현재 크기를 index 번호로 지정
        const index = notifications.length;
        //  전역변수에서 지정한 index 에 저장된 데이터를 가져와서 지역변수 notifications 에 저장
        notifications.push(reservedNotifications[index]);
        // setState() 를 사용하여 state 로 관리되고 있는 notifications 에 현재 지역변수의 데이터를 저장
        // setState() 를 사용했으므로 render() 도 함께 호출
        this.setState({notifications});
      }
      else {
        clearInterval(timer);
      }
    }, 2000);
  }

  render() {
    return (
      <div>
        {
          //  컴포넌트 생성 시 state 로 관리되는 notifications 는 데이터가 없음, 화면 출력 없음
          //  setState() 를 통해서 render() 가 재호출 됨
          this.state.notifications.map((item, index) => {
            return <Notification message={item.message} key={index} />
          })
        }
      </div>
    );
  }
}

export default NotificationList;










