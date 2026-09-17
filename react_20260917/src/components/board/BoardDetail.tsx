//  File :  BoardDetail.tsx
//  User :  it
//  Date :  2026-09-17
//  Time :  오후 2:08
//  Desc :  

import {Link, useParams} from "react-router";
import {type ChangeEvent, useEffect, useState} from "react";
import type {BoardDTO} from "../../types/BoardDTO.ts";

const board: BoardDTO = {
  boardIdx: 1,
  boardTitle: '테스트 더미 제목1',
  boardContents: '테스트 더미 내용 1',
  boardCreateId: 'test1',
  boardCreateDate: '2026-09-17 16:27',
  boardUpdateId: null,
  boardUpdateDate: null,
  boardHitCnt: 25,
}

function BoardDetail() {

  // const [board, setBoard] = useState<BoardDTO, null>(null);

  const [boardTitle, setBoardTitle] = useState<string>('');
  const [boardContents, setBoardContents] = useState<string>('');

  const changeBoardTitle = (e: ChangeEvent<HTMLInputElement>) => setBoardTitle(e.target.value);
  const changeBoardContents = (e: ChangeEvent<HTMLTextAreaElement>) => setBoardContents(e.target.value);

  const params = useParams<'boardIdx'>();

  useEffect(() => {
  //   axios 를 사용하여 서버와 통신



    setBoardTitle(board.boardTitle);
    setBoardContents(board.boardContents);
  }, [params.boardIdx]);

  return (
    <>
      <div className={'container mt-5'}>
        <div>
          <div className={'row mt-3'}>
            <div className={'col-sm-2'}>
              <div className={'form-floating'}>
                <input type="text" className={'form-control'} id={'board-idx'} placeholder={'글번호'} readOnly={true} value={board.boardIdx}/>
                <label htmlFor={"board-idx"}>글번호</label>
              </div>
            </div>
            <div className={'col-sm'}>
              <div className={'form-floating'}>
                <input type="text" className={'form-control'} id={'board-title'} placeholder={'글제목'} value={boardTitle} onChange={changeBoardTitle}/>
                <label htmlFor={"board-title"}>글제목</label>
              </div>
            </div>
          </div>

          <div className={'row mt-3'}>
            <div className={'col-sm'}>
              <div className={'form-floating'}>
                <input type="text" className={'form-control'} id={'board-create-id'} placeholder={'작성자'} readOnly={true} value={board.boardCreateId}/>
                <label htmlFor={"board-create-id"}>작성자</label>
              </div>
            </div>
            <div className={'col-sm'}>
              <div className={'form-floating'}>
                <input type="text" className={'form-control'} id={'board-create-date'} placeholder={'등록시간'} readOnly={true} value={board.boardCreateDate}/>
                <label htmlFor={"board-create-date"}>등록시간</label>
              </div>
            </div>
            <div className={'col-sm'}>
              <div className={'form-floating'}>
                <input type="text" className={'form-control'} id={'board-hit-cnt'} placeholder={'추천수'} readOnly={true} value={board.boardHitCnt}/>
                <label htmlFor={"board-hit-cnt"}>추천수</label>
              </div>
            </div>
          </div>

          <div className={'row mt-3'}>
            <div className={'col-sm'}>
              <div className={'form-floating'}>
                <textarea className={'form-control'} id="board-contents" placeholder={'글내용'} style={{height: '150px'}} value={boardContents} onChange={changeBoardContents}></textarea>
                <label htmlFor={"board-contents"}>글내용</label>
              </div>
            </div>
          </div>

          <div className={'row mt-3'}>
            <div className={'col-sm'}>
              <Link to={'/board'} className={'btn btn-secondary'}>목록</Link>
            </div>
            <div className={'col-sm d-flex justify-content-end'}>
              <button type={'button'} className={'btn btn-warning me-2'}>수정</button>
              <button type={'button'} className={'btn btn-danger'}>삭제</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoardDetail;










