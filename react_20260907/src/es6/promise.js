//  File :  promise.js
//  User :  it
//  Date :  2026-09-07
//  Time :  오후 2:27
//  Desc :  비동기처리

//  프로미스 : 자바스크립트 ES6에서 비동기 함수의 동기 방식 처리를 위해서 제공하는 객체
//      - 자바스크립트는 기본적으로 싱글 스레드 방식으로 프로그램을 실행함
//      - 자바스크립트는 비동기 방식을 통해서 프로그램을 효율적으로 실행
//      - 비동기 방식으로 프로그램을 실행 중 반드시 동기 방식으로 프로그램의 실행이 이루어져야하는 상황이 발생하고, 이 때 callback 함수를 사용하여 동기 방식처럼 실행
//      - callback 함수를 여러번 사용하게 될 경우 프로그램의 복잡도가 급 상승함, 이러한 콜백지옥을 처리하기 위해서 ES6 에서 프로미스를 추가함

//  프로미스는 비동기 처리를 위해서 3가지 상태를 제공함
//      - Pending(대기) : 비동기 처리 로직이 완료되지 않은 상태
//      - Fulfilled(실행) : 비동기 처리가 완료되어 프로미스가 결과값에 반환된 상태
//      - Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

//  프로미스는 상태에 따른 실행함수 4가지를 제공함
//      - resolve(매개변수) : 프로미스 객체 생성 시 콜백함수의 매개변수로 추가하는 첫번째 함수, 프로미스의 상태가 Fulfilled 이 경우 호출할 수 있음
//      - reject(매개변수) : 프로미스 객체 생성 시 콜백함수의 매개변수로 추가하는 두번째 함수, 프로미스의 상태가 Rejected 일 경우 호출할 수 있음
//      - then(콜백함수) : 프로미스에서 resolve() 를 실행했을 경우 프로미스 객체 외부에서 자동으로 실행되는 함수
//      - catch(콜백함수) : 프로미스에서 reject() 을 실행했을 경우 프로미스 객체 외부에서 자동으로 실행되는 함수


//  사용법(선언) :
//  function 프로미스로 사용할 함수명(매개변수1, 매개변수2, ... ) {
//      return new Promise(function(resolve, reject) {
//          비동기 방식 실행 소스;
//          비동기 방식 실행 결과에 따라 resolve(), reject() 호출
//      });
//  }

//  사용법(실행) :
//  프로미스를 사용한 함수명()
//      .then( function(매개변수) {
//          성공 시 실행할 소스코드 ... ;
//      })
//      .catch( function(매개변수) {
//          실패 시 실행할 소스코드 ... ;
//      });


function work1(doDone) {
    // js 의 비동기 함수 setTimeout() 호출
    setTimeout(function() {
        doDone('작업 1 완료!');
    }, 1000);
}

function work2(doDone) {
    setTimeout(function() {
        doDone('작업 2 완료!');
    }, 2000);
}

function work3(doDone) {
    setTimeout(function() {
        doDone('작업 3 완료!');
    }, 3000);
}

function urgentWork() {
    console.log('긴급 작업!!');
}


// work1(function(msg1) {
//     console.log(msg1);
//
//     work2(function(msg2){
//         console.log(msg2);
//
//         work3(function(msg3) {
//             console.log(msg3);
//         });
//     });
// });
//
// urgentWork();

console.log('그냥 실행 1');
console.log('그냥 실행 2');
console.log('그냥 실행 3');
console.log('그냥 실행 4');
console.log('그냥 실행 5');

console.log();

//  자바스크립트는 비동기 방식으로 동작하기 때문에 여러개의 비동기 함수를 사용 시 순서대로 실행되지 않음
// console.log('그냥 실행 1');
// console.log('그냥 실행 2');
// //  비동기 함수 실행, 이벤트 큐로 이벤트 설정, 나머지 소스 실행
// setTimeout(function() {
//     console.log('그냥 실행 3');
// }, 2000);
//
// setTimeout(function() {
//     console.log('그냥 실행 4');
// }, 1000);
//
// setTimeout(function() {
//     console.log('그냥 실행 5');
// }, 500);

console.log();


//  자바스크립트에서 반드시 동기 방식으로 동작해야 할 경우 비동기 함수의 콜백함수 안에 다른 비동기 함수를 입력
console.log('그냥 실행 1');
console.log('그냥 실행 2');

//  setTimeout의 콜백함수 안에 다른 setTimeout 을 입력
setTimeout(function() {
    console.log('실행 3, 비동기');

    //  setTimeout 의 콜백함수 안에 또 다른 setTimeout 을 입력
    setTimeout(function() {
        console.log('실행 4, 비동기');

        setTimeout(function() {
            console.log('실행 5, 비동기');
        }, 500);
    }, 1000);
}, 2000);


console.log('\n ----- Promise 사용하기 ----- \n');

//  비동기 방식으로 동작할 함수
function getData() {

    return new Promise( function(resolve, reject) {
        const data = 100;

        // resolve(data);
        reject('통신 오류 발생!!');
    });
}

// 실행
getData()
    .then(function(data) {
        console.log(`프로미스 사용 반환값 : ${data}`);
    })
    .catch(function(err) {
        console.log(`프로미스 사용 오류 시 출력 메시지 : ${err}`);
    });


function getData2() {
    return new Promise( function(resolve, reject) {

        //  비동기 통신, jquery 의 ajax() 명령어로 서버와 비동기 통신
        $.ajax({
            url: 'http://localhost:8080/api/data1',
            type: 'post',
            success: function(data) {
                resolve(data);
            },
            error: function(xhr, status, error) {
                reject('ajax 통신 중 오류 발생');
            }
        });

    });
}

getData2()
    .then(function(data) {
        console.log('데이터 통신 성공!!');
        console.log(`가져온 데이터 : ${data}`);
    })
    .catch(function(err) {
        console.log('데이터 통신 실패!!');
        console.log(err);
    });













