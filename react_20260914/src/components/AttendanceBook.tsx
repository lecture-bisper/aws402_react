//  File :  AttendanceBook.tsx
//  User :  it
//  Date :  2026-09-14
//  Time :  오후 3:01
//  Desc :  

const students = [
  { name: 'inje', id: 1},
  { name: 'steve', id: 2},
  { name: 'bill', id: 3},
  { name: 'jeff', id: 4},
];


function AttendanceBook() {

  //  배열 선언
  const numbers = [10, 20, 30, 40, 50];
  //  엘리먼트 변수 선언
  //  배열 함수 map 을 사용하여 배열 numbers 의 요소를 하나씩 출력하여 html 태그 <li>의 텍스트로 사용
  const itemList = numbers.map((item, index) => <li key={index}>{item}</li>);

  const studentList = students.map(std => <li key={std.id}>{std.name}</li>);

  return (
    <>
      <h4>배열의 내용을 배열 함수 map() 을 사용하여 화면에 출력</h4>
      <ul>
        {itemList}
      </ul>

      <br/>

      {/* 엘리먼트 변수에 저장된 내용을 UI 에 출력 */}
      <ul>{studentList}</ul>

      <br/>

      <ul>
        {
          //  배열의 내용을 배열함수 map()을 통해서 직접 반복 출력
          //  key 속성을 추가하여 반복 출력되는 html 태그 및 컴포넌트를 구분할 수 있도록 함
          students.map(std => <li key={std.id}>{std.name}</li>)
        }
      </ul>
    </>
  );
}

export default AttendanceBook;










