//  File :  MailBox.tsx
//  User :  it
//  Date :  2026-09-14
//  Time :  오후 12:38
//  Desc :

interface MailBoxProps {
  unreadMessages: number;
  count: number;
}

function MailBox({unreadMessages, count}: MailBoxProps) {

  return (
    <>
      <h1>안녕하세요</h1>
      {
        //  inline if 문에서 연산식은 화면에 출력되지 않음
        //  전체 결과가 true 일 경우 && 연산자 왼쪽의 연산식은 출력하지 않음
        //  && 연산자 오른쪽의 엘리먼트는 화면에 출력
        unreadMessages > 0 && <h2>현재 {unreadMessages} 개의 읽지 않은 메시지가 있습니다.</h2>
      }
      {
        //  inline if 문에서 && 연산의 결과가 Falsy 일 경우라도 결과값을 출력
        //  변수 count 가 Truthy 일 경우 && 연산자 오른쪽의 내용을 출력
        //  변수 count 가 Falsy 일 경우 연산식이 아닌 값이면 화면에 출력
        count && <h2>현재 카운트 : {count}</h2>
      }
    </>
  );
}

export default MailBox;










