//  File :  UserListItem.tsx
//  User :  it
//  Date :  2026-09-14
//  Time :  오전 9:36
//  Desc :  

import useUserStatus from "./useUserStatus.tsx";

function UserListItem(props) {

  //  커스텀 훅 사용 시
  const isOnline = useUserStatus(props.user.id);

  //  커스텀 훅 미사용 시
  // const [ isOnline, setIsOnline ] = useState(null);
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

  return (
    <li style={{ color: isOnline ? 'green' : 'black'}}>
      {props.user.name}
    </li>
  );
}

export default UserListItem;










