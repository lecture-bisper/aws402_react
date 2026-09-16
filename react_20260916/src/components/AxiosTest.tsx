//  File :  AxiosTest.tsx
//  User :  it
//  Date :  2026-09-16
//  Time :  오후 12:08
//  Desc :  

//  axios : ajax 비동기 통신을 위한 자바스크립트 라이브러리
//  리액트에서는 jQuery 를 사용하지 않기 때문에 비동기 통신을 위해서 axios 를 사용함
//  사용 시 해당 컴포넌트에 import 해야 함
//  단축 메소드를 제공하고 있음 (get, post, put, delete)
//  then(콜백함수) : 비동기 통신이 성공 시 자동으로 동작하는 함수
//  catch(콜백함수) : 비동기 통신이 실패 시 자동으로 동작하는 함수

//  사용법:
//  설치 : npm install axios

//  import axios from 'axios';

//  사용:
//  axios.단축메소드(접속주소, 매개변수)
//    .then(response => {접속 성공 시 실행할 소스코드 ... })
//    .catch(error => {접속 실패 시 실행할 소스코드 ...});

//  axios({
//    url: '접속주소',
//    method: '통신 방식',
//    data: {파라미터 값으로 전달할 데이터},
//  });

//  예시: (get/delete 의 사용방법이 같음, post/put 의 사용방법이 같음)
//    axios.get('http://localhost:8080/login?id=asdf1234&pw=1234')
//      .then(res => {성공 시 실행할 소스 ... })
//      .catch(err => {실패 시 실행할 소스 ... });

//    axios.get('http://localhost:8080/login', {
//        params: {
//          id: 'asdf1234',
//          pw: '1234',
//        }})
//      .then(res => { 성공 시 실행할 소스 ...})
//      .catch(res => {실패 시 실행할 소스 ...});

//    axios.delete('http://localhost:8080/login?id=asdf1234')
//      .then(res => { 성공 시 실행할 소스 ... })
//      .catch(err => { 실패 시 실행할 소스 ...});

//    axios.post('http://localhost:8080/login', null, {
//        param: {
//          id: 'asdf1234',
//          pw: '1234',
//        }})
//      .then(res => { 성공 시 실행할 소스 ...})
//      .catch(err => { 실패 시 실행할 소스 ... });

//    axios.put('http://localhost:8080/login', null, {
//        param: {
//          id: 'asdf1234',
//          pw: '1234',
//        }})
//      .then(res => { 성공 시 실행할 소스 ...})
//      .catch(err => { 실패 시 실행할 소스 ... });


import axios from "axios";

interface TypeDailyBoxOfficeItem {
  audiAcc: string;
  audiChange: string;
  audiCnt: string;
  audiInten: string;
  movieCd: string;
  movieNm: string;
  openDt: string;
  rank: string;
  rankInten: string;
  rankOldAndNew: string;
  rnum: string;
  salesAcc: string;
  salesAmt: string;
  salesChange: string;
  salesInten: string;
  salesShare: string;
  scrnCnt: string;
  showCnt: string;
}

function AxiosTest() {

  const getKobisData = () => {
    axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=c55013eadce1f0005fae142c556a228d&targetDt=20260912')
      .then(res => {
        console.log('비동기 통신 성공!!');

        const { boxOfficeResult } = res.data;
        const { dailyBoxOfficeList } = boxOfficeResult;

        dailyBoxOfficeList.forEach((item: TypeDailyBoxOfficeItem) => {
          let boxOfficeList = '';
          boxOfficeList += `순위 : ${item.rank}\n`;
          boxOfficeList += `영화명 : ${item.movieNm}\n`;
          boxOfficeList += `개봉일 : ${item.openDt}`;
          console.log(boxOfficeList);
        });

      })
      .catch(err => {
        console.log('비동기 통신 중 오류가 발생했습니다.');
        console.log(err);
      });
  }

  return (
    <>
      <button type={'button'} className={'btn btn-primary'} onClick={getKobisData}>클릭 시 데이터 가져오기</button>
    </>
  );
}

export default AxiosTest;










