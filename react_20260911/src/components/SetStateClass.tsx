//  File :  SetStateClass.tsx
//  User :  it
//  Date :  2026-09-11
//  Time :  오전 9:28
//  Desc :  

import {Component} from "react";

//  클래스 컴포넌트 방식으로 컴포넌트 선언
class SetStateClass extends Component {

  //  자바스크립트 ES6 방식의 클래스 생성자, 생성자 이름은 고정되어 있음, 생성자는 1개만 사용 가능
  constructor(props) {
    //  부모 클래스의 생성자 호출
    super(props);

    //  클래스 안에서 this.변수명을 생성자나 메소드 안에서 사용 시 클래스의 멤버 변수 선언으로 인식
    //  멤버 변수 state 를 선언, 데이터 타입은 object 타입
    //  리액트 컴포넌트의 상태 정보를 저장하는 state 를 선언
    this.state = {
      //  상태 정보를 stateString 이라는 이름으로 click 이라는 값을 저장
      //  수정 시 setState() 함수를 반드시 사용하여 수정해야 함
      //  직접 수정이 가능하지만 직접 수정 시 UI 에 반영되지 않음, 화면 재랜더링이 발생하지 않음
      stateString: 'click'
    }
  }

  stateChange = (flag: string) => {
    if (flag == 'direct') {
      //  클래스 컴포넌트의 state 요소인 stateString 의 값을 '=' 연산자로 직접 수정
      //  리액트는 virtual DOM 을 사용하기 때문에 state 의 내용을 직접 수정 시 virtual DOM 의 UI 변경이 발생하지 않음, 실제 DOM 과 virtual DOM 의 교체도 발생하지 않음
      console.log(`원본 내용 : ${this.state.stateString}`);
      //  state 객체의 값을 = 연사자로 직접 수정
      this.state.stateString = '멤버 변수인 stateString의 값을 직접 변경';
      //  현재 수정된 state 객체의 정보를 출력
      console.log(`수정 내용 : ${this.state.stateString}`);
    }
    else if (flag =='setState') {
      //  컴포넌트의 state 요소인 stateString 의 값을 setState() 함수를 사용하여 수정
      //  setState() 를 사용하여 state 의 내용 수정 시 state 의 값을 변경하고, virtual DOM 에 변경된 state 의 내용을 적용함, 실제 DOM 과 virtual DOM 의 교체도 발생함
      console.log(`원본 내용 : ${this.state.stateString}`);
      //  setState() 함수로 지정한 요소의 데이터 수정 요청
      //  이벤트 큐에 저장된 state 변경 요청을 이벤트 리스너가 확인하여 수정
      //  setState() 함수가 호출되면 자동으로 render() 함수도 호출
      this.setState({stateString: 'setState() 함수로 멤버 변수인 stateString의 값을 변경'});
      //  setState() 를 통해서 데이터 수정 요청을 한 상태에는 아직 state의 값이 변경되지 전이므로 state 를 console.log()로 확인하면 변경되기 전의 값이 출력됨
      console.log(`수정 내용 : ${this.state.stateString}`);
    }
  }

  render() {
    return (
      <>
        <button type={'button'} className={'btn btn-primary me-2'} onClick={() => {
          this.stateChange('direct');
        }}>state 직접 수정</button>
        <button type={'button'} className={'btn btn-primary'} onClick={() => {
          this.stateChange('setState');
        }}>setState() 로 state 수정</button>
        <br/>
        <p className={'fs-4'}>[state 변경하기] stateString: {this.state.stateString}</p>
      </>
    );
  }
}

export default SetStateClass;










