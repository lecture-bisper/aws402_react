//  File :  Events.tsx
//  User :  it
//  Date :  2026-09-11
//  Time :  오후 12:37
//  Desc :  

//  리액트의 이벤트는 일반적인 웹 형태처럼 eventListener 방식을 사용할 수 없음
//  리액트에서는 이벤트 처리를 위해서 inline 방식을 사용함
//  리액트의 이벤트 속성은 JSX 문법에 의해서 카멜명명법으로 변경되어 있음
//  inline 이벤트 사용 시 콜백 함수를 선언하고 사용
//  1. html 태그의 이벤트 속성에 직접 콜백함수를 선언하여 사용
//  2. 컴포넌트에 이벤트 처리를 위한 함수를 선언하고, 이벤트 속성에 해당 함수명을 입력하여 사용

//  이벤트 함수 사용 시 매배견수로 이벤트 객체를 제공함
//  이벤트 객체를 사용하면 실제 이벤트가 발생한 태그의 정보를 가져올 수 있음

function Events() {

  //  이벤트 처리용 콜백함수를 선언
  function clickEvent() {
    alert('이벤트 처리 함수를 미리 생성하고, html 태그의 이벤트 속성에 함수명만 입력하여 사용');
  }

  //  이벤트 처리 함수의 매개변수로 이벤트 객체도 함께 가져옴
  const clickEvent2 = (e) => {
    alert('이벤트 처리 함수를 미리 생성하고, html 태그의 이벤트 속성에 함수명만 입력하여 사용');
    alert(`이벤트가 발생한 태그의 id : ${e.target.id}`);
  }

  return (
    <div>
      {/* html 태그의 이벤트 속성에 콜백함수를 직접 선언 */}
      <button type={'button'} className={'btn btn-primary me-2'} onClick={function() {
        alert('콜백함수를 직접 선언하여 이벤트 처리');
      }}>클릭 1</button>
      {/* 콜백함수로 화살표 함수를 사용 */}
      <button type={'button'} className={'btn btn-primary me-2'} onClick={() => {
        alert('콜백함수로 화살표 함수를 사용하여 이벤트 처리');
      }}>클릭 2</button>
      {/* 콜백함수로 활살표 함수를 사용, {} 생략 */}
      <button type={'button'} className={'btn btn-primary me-2'} onClick={() => alert('콜백함수로 화살표 함수를 사용하여 이벤트 처리 2')}>클릭 3</button>
      {/* html 태그의 이벤트 속성에 미리 선언해 놓은 함수의 이름을 입력하여 사용, () 생략 */}
      <button type={'button'} className={'btn btn-primary me-2'} onClick={clickEvent}>클릭 4</button>
      {/* 여러개의 html 태그에 미리 선언해 놓은 동일한 이름의 함수를 사용할 수 있음 */}
      <button type={'button'} className={'btn btn-info me-2'} onClick={clickEvent}>클릭 5</button>
      {/* html 태그의 이벤트 속성에 직접 콜백함수를 선언, 이벤트 객체를 전달 */}
      <button type={'button'} className={'btn btn-primary me-2'} id={'btn6'} onClick={(event) => {
        console.log(event);
        //  이벤트 객체를 매개변수로 전달 시 이벤트가 발생된 태그의 정보를 가져올 수 있음
        console.log(event.target);
        console.log(event.target.id);
        console.log(event.target.innerText);
      }}>클릭 6(이벤트 객체 사용하기)</button>
      <button type={'button'} className={'btn btn-info'} id={'btn7'} onClick={clickEvent2}>클릭 7</button>
    </div>
  );
}

export default Events;










