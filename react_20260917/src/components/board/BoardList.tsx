//  File :  BoardList.tsx
//  User :  it
//  Date :  2026-09-17
//  Time :  오후 2:07
//  Desc :  

import {Link, useNavigate} from "react-router";
import {useEffect, useState, type MouseEvent} from "react";
import axios from "axios";
import type {BoardDTO} from "../../types/BoardDTO.ts";

// const boardList = [
//   {boardIdx: 1, boardTitle: '테스트 제목 1', boardContents: '테스트 내용 1', boardCreateId: 'test1', boardCreateDate: '2026-09-15 15:25', boardHitCnt: 10},
//   {boardIdx: 2, boardTitle: '테스트 제목 2', boardContents: '테스트 내용 2', boardCreateId: 'test2', boardCreateDate: '2026-09-16 10:25', boardHitCnt: 5},
//   {boardIdx: 3, boardTitle: '테스트 제목 3', boardContents: '테스트 내용 3', boardCreateId: 'test3', boardCreateDate: '2026-09-16 12:25', boardHitCnt: 20},
//   {boardIdx: 4, boardTitle: '테스트 제목 4', boardContents: '테스트 내용 4', boardCreateId: 'test4', boardCreateDate: '2026-09-16 15:25', boardHitCnt: 17},
//   {boardIdx: 5, boardTitle: '테스트 제목 5', boardContents: '테스트 내용 5', boardCreateId: 'test5', boardCreateDate: '2026-09-17 13:00', boardHitCnt: 9},
//   {boardIdx: 6, boardTitle: '테스트 제목 6', boardContents: '테스트 내용 6', boardCreateId: 'test1', boardCreateDate: '2026-09-17 14:10', boardHitCnt: 12},
// ];

function BoardList() {

  const [boardList, setBoardList] = useState<BoardDTO[]>([]);
  const navi = useNavigate();

  const clickPost = (boardIdx: number, e: MouseEvent<HTMLTableCellElement>) => {
    navi(`/board/${boardIdx}`);

    e.preventDefault();
  }

  // 문제 1) BoardList 을 참고하여 BoardDetail 컴포넌트가 처음 로딩될 때 axios 로 서버와 통신하여 데이터를 화면에 출력하는 프로그램을 완성하세요

  // 문제 2) BoardWrite 컴포넌트의 axios 를 이용한 글 등록 기능을 구현하세요

  //  componentDidMount() 기능을 하는 useEffect() hook
  useEffect(() => {
    axios.get('/api/boardList')
      .then(res => {
        console.log('통신 성공!!');
        console.log(res.data);
        setBoardList(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className={'container mt-5'}>
        <div className={'row'}>
          <div className={'col-sm'}>
            <table className={'table table-striped table-hover text-center'}>
              <colgroup>
                <col width={'5%'}/>
                <col width={'50%'}/>
                <col width={'15%'}/>
                <col width={'15%'}/>
                <col width={'15%'}/>
              </colgroup>
              <thead>
                <tr>
                  <th>글번호</th>
                  <th>글제목</th>
                  <th>작성자</th>
                  <th>등록시간</th>
                  <th>추천수</th>
                </tr>
              </thead>
              <tbody>
                {
                  boardList.map(item => {
                    return (
                      <tr key={item.boardIdx}>
                        <td>{item.boardIdx}</td>
                        <td className={'text-start'} onClick={e => clickPost(item.boardIdx, e)}>{item.boardTitle}</td>
                        <td>{item.boardCreateId}</td>
                        <td>{item.boardCreateDate}</td>
                        <td>{item.boardHitCnt}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className={'mt-3 d-flex justify-content-end'}>
          <Link to={'/board/write'} className={'btn btn-primary'}>글등록</Link>
        </div>
      </div>
    </>
  );
}

export default BoardList;










