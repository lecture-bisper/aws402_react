//  File :  useUserStatus.tsx
//  User :  it
//  Date :  2026-09-14
//  Time :  오전 9:46
//  Desc :  

import {useEffect, useState} from "react";

//  여러 곳에서 사용되는 기능의 소스코드를 모아서 커스텀 훅으로 생성
function useUserStatus(props) {

  const [ isOnline, setIsOnline ] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    return () => {
      ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
    };
  }, []);

  return isOnline;
}

export default useUserStatus;










