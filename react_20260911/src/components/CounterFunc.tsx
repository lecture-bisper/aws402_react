//  File :  CounterFunc.tsx
//  User :  it
//  Date :  2026-09-11
//  Time :  오후 2:26
//  Desc :  

function CounterFunc() {

  // 일반 변수 선언, 화면 업데이트를 하려면 count 변수를 state 로 등록하여 setState()를 호출해야 함
  let count = 0;

  return (
    <>
      <p>총 {count} 번 클릭했습니다.</p>
      <button type={'button'} className={'btn btn-primary'} onClick={() => {
        //   일반 변수의 값을 수정, setState() 를 사용하지 않으므로 화면 업데이트가 발생하지 않음
        count++;
        console.log(`function count : ${count}`);
      }}>클릭!!</button>
    </>
  );
}

export default CounterFunc;










