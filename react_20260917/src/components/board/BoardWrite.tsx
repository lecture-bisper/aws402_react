//  File :  BoardWrite.tsx
//  User :  it
//  Date :  2026-09-17
//  Time :  오후 2:08
//  Desc :  

import {Link} from "react-router";
import {type ChangeEvent, type SubmitEventHandler, useState} from "react";

function BoardWrite() {

  const [title, setTitle] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [contents, setContents] = useState<string>('');

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const changeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const changeContents = (e: ChangeEvent<HTMLTextAreaElement>) => setContents(e.target.value);

  const submitForm: SubmitEventHandler<HTMLFormElement> = (e) => {

  //   axios 통신

    e.preventDefault();
  }

  return (
    <>
      <div className={'container mt-5'}>
        <div className={'row'}>
          <div className={'col-sm-6 mx-auto'}>
            <form action="#" onSubmit={submitForm}>
              <div>
                <div className={'form-floating'}>
                  <input type="text" className={'form-control'} id={'board-title'} placeholder={'제목을 입력하세요'} value={title} onChange={changeTitle} />
                  <label htmlFor={"board-title"}>제목을 입력하세요</label>
                </div>
              </div>
              <div className={'mt-3'}>
                <div className={'form-floating'}>
                  <input type="text" className={'form-control'} id={'user-id'} placeholder={'사용자 ID를 입력하세요'} value={userId} onChange={changeUserId} />
                  <label htmlFor={"user-id"}>사용자 ID를 입력하세요</label>
                </div>
              </div>
              <div className={'mt-3'}>
                <div className={'form-floating'}>
                  <textarea id={'board-contents'} className={'form-control'} rows={5} placeholder={'내용을 입력하세요'} style={{height: '150px'}} value={contents} onChange={changeContents}></textarea>
                  <label htmlFor={'board-contents'}>내용을 입력하세요</label>
                </div>
              </div>
              <div className={'mt-3 d-flex justify-content-end'}>
                <button type={'submit'} className={'btn btn-primary'}>등록</button>
                <Link to={'/board'} className={'btn btn-secondary ms-2'}>취소</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoardWrite;










