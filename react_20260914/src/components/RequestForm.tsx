//  File :  RequestForm.tsx
//  User :  it
//  Date :  2026-09-14
//  Time :  오후 4:23
//  Desc :  

import {type ChangeEvent, type SubmitEventHandler, useState} from "react";

function RequestForm() {

  //  state 로 관리되는 변수, textarea 의 value 속성과 연결
  const [value, setValue] = useState('');

  //  이벤트 처리 함수, textarea 에 입력된 데이터를 그대로 가져와서 setState() 를 사용하여 데이터 수정
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => setValue(e.target.value);

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e): void => {
    alert(`입력한 요청 사항 : ${value}`);
    e.preventDefault();
  }

  return (
    <>
      <div className={'row'}>
        <div className={'col-sm-6 mx-auto'}>
          <form action="#" onSubmit={handleSubmit}>
            <div className={'mt-3'}>
              <label htmlFor={"comments"} className={'form-label'}>요청사항 : </label>
              {/* html 태그의 textarea 는 value 속성이 없기 때문에 시작 태그와 끝 태그 사이에 데이터를 입력해야함 */}
              {/* JSX 문법의 textarea 는 value 속성을 사용할 수 있음 */}
              <textarea name={'comments'} id={'comments'} rows={5} className={'form-control'} value={value} onChange={handleChange} placeholder={'요청사항을 입력하세요'}></textarea>
            </div>
            <div className={'mt-3 d-grid gap-3'}>
              <button type={'submit'} className={'btn btn-primary'}>확인</button>
              <button type={'reset'} className={'btn btn-secondary'}>취소</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RequestForm;










