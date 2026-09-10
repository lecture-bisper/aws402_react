//  File :  Avatar.tsx
//  User :  it
//  Date :  2026-09-10
//  Time :  오후 12:37
//  Desc :  

function Avatar(props: {user: {avatarUrl: string, name: string}}) {
  return (
    <>
      {/*  부모 컴포넌트에서 전달한 데이터 user 에 포함되어 있는 avatarUrl, name 을 사용 */}
      <img src={props.user.avatarUrl} alt={props.user.name}/>
    </>
  );
}

export default Avatar;










