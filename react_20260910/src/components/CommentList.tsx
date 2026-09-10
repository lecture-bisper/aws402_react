//  File :  CommentList.tsx
//  User :  it
//  Date :  2026-09-10
//  Time :  오후 2:07
//  Desc :  

import Comment from './Comment';

//  임시 데이터
const comments = [
  {name: '아이유', comment: '안녕하세요, 아이유 입니다.'},
  {name: '리센느', comment: '안녕하세요, 제나 입니다.'},
  {name: '윈터', comment: '안녕하세요, 윈터 입니다.'},
  {name: '장원영', comment: '안녕하세요, 아이브 장원영 입니다.'},
  {name: '리사', comment: '안녕하세요, 블랙핑크 리사 입니다.'},
]

function CommentList() {
  return (
    <>
      {/* JSX 문법 안에서 {} 사용 시 JS 코드를 입력할 수 있음 */}
      {
        //  ES6 에서 제공하는 배열함수 map 을 사용하여 배열의 크기만큼 반복해서 자식 컴포넌트 Comment 를 호출, 데이터도 함께 전달
        comments.map(item => {
          return (
            <Comment name={item.name} comment={item.comment} />
          );
        })
      }


      {/* 자식 컴포넌트를 5번 호출 */}
      {/*<Comment name={comments[0].name} comment={comments[0].comment} />*/}
      {/*<Comment name={comments[1].name} comment={comments[1].comment} />*/}
      {/*<Comment name={comments[2].name} comment={comments[2].comment} />*/}
      {/*<Comment name={comments[3].name} comment={comments[3].comment} />*/}
      {/*<Comment name={comments[4].name} comment={comments[4].comment} />*/}
    </>
  );
}

export default CommentList;










