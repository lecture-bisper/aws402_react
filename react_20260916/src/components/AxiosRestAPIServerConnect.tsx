//  File :  AxiosRestAPIServerConnect.tsx
//  User :  it
//  Date :  2026-09-16
//  Time :  오후 2:14
//  Desc :  

import axios from "axios";

//  WEB(웹 브라우저) 은 보안을 위해서 기본적으로 SOP 정책을 사용함
//  다른 곳의 리소스를 사용하고자 할 경우 CORS 정책을 위반하게 되어 오류가 발생함
//  CORS 오류는 웹 브라우저에서 발생함 (POSTMAN 과 같은 프로그램으로 통신 시 오류 없음)

//  SOP (same-Origin Policy) : 동일 출처 정책, 동일한 출처의 리소스만 사용하는 정책
//  CORS (Cross-Origin Resource Sharing) : 다른 출처의 자원을 공유하여 사용하는 것
//  기본적으로 하나의 출처에서 리소스를 사용 시 문제가 없으나, 다른 출처에서 리소스를 가져와서 사용 시 CORS 정책 위반 오류가 발생함

//  CORS 오류 해결 방법
//  1. 리액트에서 프록시 서버 사용
//  2. 스프링 서버에서 CORS 설정
//    2.1 @CrossOrigin 어노테이션을 사용 (Controller 클래스, 메소드에 사용)
//    2.2 WebMvcConfigure 를 상속받아 addCorsMapping() 메소드를 오버라이딩하여 설정

function AxiosRestAPIServerConnect() {

  const sendDataTest = () => {
    axios.get("/api")
      .then(res => {
        console.log('axios 를 사용한 비동기 통신 성공!!');
        console.log(res.data);
      })
      .catch(err => {
        console.log('비동기 통신 중 오류가 발생했습니다.');
        console.log(err);
      });
  }

  const sendDataGet = () => {
    //  프록시 서버를 통해서 통신하는 URL 로 변경
    axios.get("/api/boardList")
      .then(res => {
        console.log('axios 를 사용한 비동기 통신(get 방식) 성공!!');
        console.log(res.data);
      })
      .catch(err => {
        console.log('비동기 통신(get 방식) 중 오류가 발생했습니다.');
        console.log(err);
      });
  }

  const sendDataGetParam = () => {
    // axios.get("/api/boardDetail?boardIdx=10")
    axios.get("/api/boardDetail", {
      params: {
        boardIdx: 10,
      }
    })
      .then(res => {
        console.log('axios 를 사용한 비동기 통신(get 파라미터 방식) 성공!!');
        console.log(res.data);
      })
      .catch(err => {
        console.log('비동기 통신(get 파라미터 방식) 중 오류가 발생했습니다.');
        console.log(err);
      });
  }

  const sendDataPost = () => {
    axios.post("/api/boardWrite", null, {
      params: {
        boardTitle: '테스트 제목 1',
        boardContents: '테스트 내용 1',
        boardCreateId: 'test1',
      }
    })
      .then(res => {
        console.log('axios 를 통한 비동기 통신 (post 파라미터 방식) 성공!!');
        console.log(res.data);
      })
      .catch(err => {
        console.log('비동기 통신 (post 파라미터 방식) 중 오류 발생!!');
        console.log(err);
      });
  }


  return (
    <>
      <h3>Axios 를 이용한 비동기 통신</h3>
      <div className={'row'}>
        <div className={'col-sm-8 mx-auto'}>
          <div className={'mt-3 d-flex justify-content-center'}>
            <button type={'button'} className={'btn btn-secondary me-2'} onClick={sendDataTest}>Spring REST API 서버 접속 테스트</button>
            <button type={'button'} className={'btn btn-primary me-2'} onClick={sendDataGet}>Get 방식 사용</button>
            <button type={'button'} className={'btn btn-success me-2'} onClick={sendDataGetParam}>Get 방식 파라미터 사용</button>
            <button type={'button'} className={'btn btn-info me-2'} onClick={sendDataPost}>POST 방식 사용</button>
            <button type={'button'} className={'btn btn-warning me-2'}>PUT 방식 사용</button>
            <button type={'button'} className={'btn btn-danger me-2'}>DELETE 방식 사용</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AxiosRestAPIServerConnect;










