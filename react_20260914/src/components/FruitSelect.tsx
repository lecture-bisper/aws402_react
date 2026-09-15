//  File :  FruitSelect.tsx
//  User :  it
//  Date :  2026-09-14
//  Time :  오후 4:51
//  Desc :  


import {type ChangeEvent, type SubmitEventHandler, useState} from "react";

const selectList: Array<string> = ['apple', 'peach', 'grape', 'banana', 'watermelon'];

function FruitSelect() {

  //  state 로 관리되고 있는 변수, select 의 value 속성과 연동
  const [value1, setValue1] = useState('');
  //  state 로 관리되고 있는 변수, select box 에서 multiple 옵션 사용 시 초기값을 배열로 설정
  const [value2, setValue2] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => setValue1(e.target.value);

  //  이벤트 처리 함수
  const handleChangeMultiple = (e: ChangeEvent<HTMLSelectElement>): void => {
    //  e.target.selectedOptions 는 선택된 option 태그들을 배열로 반환
    //  ... 전개 연산자를 사용하여 배열에 있는 모든 데이터를 출력
    const options: HTMLOptionElement[] = [...e.target.selectedOptions];
    //  배열함수 map() 을 사용하여 배열에 있는 요소(option 태그)에서 value 속성값만 출력
    const values: Array<string> = options.map(item => item.value);
    setValue2(values);
    // console.log(e.target);
    // console.log(e.target.selectedOptions);
    // console.log(options);
    // console.log(values);
  }

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    const msg = `선택한 과일 한개 : ${value1}
선택한 과일 여러개 : ${value2}`;
    alert(msg);
    e.preventDefault();
  }

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <div className={'mt-3'}>
          <label htmlFor="fruitSelect" className={'form-label'}>좋아하는 과일 선택 : </label>
          <select name="fruit" id="fruitSelect" className={'form-control'} value={value1} onChange={handleChange}>
            <option value="apple">사과</option>
            <option value="peach">복숭아</option>
            <option value="grape">포도</option>
            <option value="banana">바나나</option>
            <option value="watermelon">수박</option>
          </select>
        </div>

        <div className={'mt-3'}>
          <label htmlFor="fruitSelectMultiple" className={'form-label'}>좋아하는 과일 선택(다중선택) : </label>
          <select name="fruitMultiple" id="fruitSelectMultiple" className={'form-control'} value={value2} onChange={handleChangeMultiple} multiple={true}>
            {
              //  배열 함수 map() 을 통해서 option 태그에 데이터를 입력하고, UI 반복 호출
              selectList.map((item, index) => {
                return <option key={index} value={item}>{item}</option>
              })
            }
          </select>
        </div>
        <div className={'mt-3'}>
          <button type={'submit'} className={'btn btn-primary'}>확인</button>
        </div>
      </form>
    </>
  );
}

export default FruitSelect;










