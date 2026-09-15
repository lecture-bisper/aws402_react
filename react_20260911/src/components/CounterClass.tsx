//  File :  CounterClass.tsx
//  User :  it
//  Date :  2026-09-11
//  Time :  오후 2:33
//  Desc :  

import {Component} from "react";

class CounterClass extends Component {

  constructor(props)   {
    super(props);

    this.count = 0;
  }

  //  화면 UI 가 업데이트 되는 조건 3가지
  //  1. 부모 컴포넌트에서 전달되는 props의 데이터가 변경되었을 경우
  //  2. setState() 함수를 호출했을 경우
  //  3. forceUpdate() 함수를 호출했을 경우 (클래스 컴포넌트 전용)
  render () {
    return (
      <div>
        <p>총 {this.count} 번 클릭했습니다.</p>
        <button type={'button'} className={'btn btn-primary'} onClick={() => {
          // setState() 를 사용하지 않기 때문에 화면 업데이트가 발생하지 않음
          this.count++;
          console.log(`class count : ${this.count}`);
          //  forceUpdate() 를 사용하여 강제로 화면 업데이트를 발생시킴
          this.forceUpdate();
        }}>클릭!!</button>
      </div>
    );
  }
}

export default CounterClass;










