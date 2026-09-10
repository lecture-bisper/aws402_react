//  File :  DivComponent.tsx
//  User :  it
//  Date :  2026-09-10
//  Time :  오후 12:32
//  Desc :

import UserInfo from "./UserInfo.tsx";

function formatDate(date: Date) {
  return date.toLocaleString();
}

function DivComponent(props: {text: string, date: Date, author: {avatarUrl: string, name: string}}) {
  return (
    <div className={'comment'}>

      {/* 컴포넌트 추출 */}
      {/* UI 구성이 복잡한 컴포넌트를 컴포넌트 추출을 통해서 간소화된 형태의 작은 컴포넌트의 조합으로 구성하는 것 */}
      {/* 기능 단위, 재사용이 가능한 형태로 추출하는 것이 좋음 */}

      {/* 컴포넌트 추출로 분리된 자식 컴포넌트를 호출 */}
      {/* 부모 컴포넌트에서 전달받은 데이터 중 author 부분만 userDate 라는 이름으로 자식 컴포넌트에 다시 전달함 */}
      <UserInfo userData={props.author}/>

      {/* 작은 컴포넌트로 컴포넌트 추출을 진행할 부분 */}
      {/*<div className={'user-info'}>*/}
      {/*  <img src={props.author.avatarUrl} alt={props.author.name}/>*/}
      {/*  <div className={'user-info-name'}>{props.author.name}</div>*/}
      {/*</div>*/}
      <div className={'comment-text'}>{props.text}</div>
      <div className={'comment-date'}>{formatDate(props.date)}</div>
    </div>
  );
}

export default DivComponent;










