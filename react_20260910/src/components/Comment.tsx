//  File :  Comment.tsx
//  User :  it
//  Date :  2026-09-10
//  Time :  오후 1:55
//  Desc :  

//  css 스타일, 리액트에서 css 스타일을 적용하는 방법
//  1. 외부 CSS 파일을 import 하여 사용
//  2. 자바스크립트의 object 타입으로 변수를 선언하고 css 속성을 사용
//    css 속성명은 카멜 명명법으로 입력
//    key:value 형태로 css 속성명과 속성값을 입력
//    숫자값은 number 로 그대로 입력, 나머지는 모두 string 으로 입력

// const wrapper: React.CSSProperties = {
//   margin: 8,
//   padding: 8,
//   display: 'flex',
//   flexDirection: 'row',
//   border: '1px solid black',
//   borderRadius: 16,
// };

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid black',
    borderRadius: 16,
  } as const,
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: '16',
  },
  contentContainer: {
    marginLeft: '8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  } as const,
  nameText: {
    color: 'black',
    fontSize: '16',
    fontWeight: 'bold',
  },
  commentText: {
    color: 'black',
    fontSize: '16',
  },
}

//  부모 컴포넌트에서 전달받은 데이터
function Comment(props: {name: string, comment: string}) {

  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img src="https://cdn-icons-png.flaticon.com/512/6423/6423924.png" style={styles.image} alt="인물 아이콘"/>
      </div>

      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={{color: 'black', fontSize: 16}}>{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;










