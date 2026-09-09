//  File :  async_await.js
//  User :  it
//  Date :  2026-09-07
//  Time :  오후 3:56
//  Desc :  비동기 처리 함수

//  async / await : ES8 에서 새로 추가된 비동기 처리 함수
//      - 비동기 실행을 마치 동기 실행처럼 읽고 쓸 수 있도록 하는 함수
//      - Promise 를 조금 더 쉽게 사용할 수 있도록 추가된 함수
//      - 프로미스를 사용하여 콜백지옥은 해결되었지만 함수 체이닝이 길어지면 소스 코드의 분석이 힘들어지고, 변수에 대한 스코프 관리가 힘들어지는 부분이 있음
//      - 가독성을 높이기 위해서 나온 것이 async/await 임

//  async : 함수 선언 키워드 앞에 붙임 (async function 처럼 사용함)
//      - async 키워드가 사용된 함수는 항상 Promise 를 반환
//      - return 1; 과 같은 일반 값을 반환해도 자바스크립트 엔진이 Promise.resolve(1) 과 같은 형태로 반환

//  await : 반드시 async 를 사용한 함수 내부에서 사용함
//      - Promise 가 사용된 함수 앞에 붙이며, Promise 가 완료(resolve, reject)될 때 까지 코드를 일시정시 시킴
//      - 성공 시 Promise의 결과를 변수에 저장할 수 있음


// 비동기로 서버와 통신하여 데이터를 가져오는 함수
function fetchUserData() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 'iu', name: '아이유', job: '가수'});
        }, 2000);
    });
}

async function displayUserInfo() {
    try {
        console.log('데이터 조회 시작 ... ');

        // 비동기로 데이터 조회
        // 비동기로 조회한 데이터의 결과를 받기까지 일시정지
        const user = await fetchUserData();

        console.log('사용자 정보 : ');
        console.log(user);
    }
    catch (error) {
        console.log(`데이터 조회 실패 : ${error}`);
    }
}

displayUserInfo();



//  기존 함수 선언 방식 사용 시
async function printData() {
    const res = await axios.get('http://localhost:8080/api/users');

    console.log(res);
}

printData();


//  화살표 함수 선언 방식 사용 시
const printData2 = async () => {
    const res = await axios.get('http://localhost:8080/api/users');

    console.log(res);
}

printData2();



