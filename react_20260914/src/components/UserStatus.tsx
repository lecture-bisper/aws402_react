//  File :  UserStatus.tsx
//  User :  it
//  Date :  2026-09-14
//  Time :  오전 9:31
//  Desc :  

import useUserStatus from "./useUserStatus.tsx";

function UserStatus(props) {
  // 커스텀 훅 사용 시
  const isOnline = useUserStatus(props.user.id);

  //  커스텀 훅 미사용 시
  // const [isOnline, setIsOnline] = useState(null);
  //
  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }
  //
  //   ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
  //   return () => {
  //     ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
  //   };
  // });

  if (isOnline == null) {
    return '대기중...';
  }

  return isOnline ? '온라인' : '오프라인';
}

export default UserStatus;










