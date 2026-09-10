//  File :  UserInfo.tsx
//  User :  it
//  Date :  2026-09-10
//  Time :  오후 12:35
//  Desc :  

import Avatar from "./Avatar.tsx";

function UserInfo(props: {userData: {avatarUrl: string, name: string}}) {
  return (
    <div className={'user-info'}>

      {/* 컴포넌트 추출을 통해서 재사용 가능하도록 분리된 자식 컴포넌트 */}
      {/* 부모 컴포넌트에서 전달받은 데이터 userData 를 user 라는 이름으로 자식 컴포넌트에게 다시 전달 */}
      <Avatar user={props.userData}/>


      {/* 컴포넌트 추출로 분리할 수 있는 부분 */}
      {/*<img src={props.author.avatarUrl} alt={props.author.name}/>*/}
      <div className={'user-info-name'}>{props.userData.name}</div>
    </div>
  );
}

export default UserInfo;










