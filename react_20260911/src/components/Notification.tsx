//  File :  Notification.tsx
//  User :  it
//  Date :  2026-09-11
//  Time :  오전 10:48
//  Desc :  

import {Component} from "react";

class Notification extends Component {

  constructor(props) {
    super(props);

    this.state = {}
    console.log('constructor() 호출됨!!');
  }

  componentDidMount() {
    console.log('componentDidMount() 호출됨!!');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate() 호출됨!!');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount() 호출됨!!');
  }

  render() {
    return (
      <div className={'m-2 p-2 d-flex border rounded-3'}>
        <span className={'text-black fs-4'}>{this.props.message}</span>
        {console.log('render() 호출됨')}
      </div>
    );
  }
}

export default Notification;










