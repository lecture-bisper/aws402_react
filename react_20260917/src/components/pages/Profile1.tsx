//  File :  Profile1.tsx
//  User :  it
//  Date :  2026-09-17
//  Time :  오전 10:33
//  Desc :  

import {useLocation, useSearchParams} from "react-router";

function Profile1() {

  //  useLocation() hook 사용하여 정보 가져오기
  const profile = useLocation();
  console.log(`profile : `);
  console.log(profile);

  //  useLocation() hook 을 통해서 전달받은 데이터 중 pathname, search 데이터만 가져옴
  //  pathname : 서버 주소와 쿼리스트링을 제외한 URL을 가져옴
  //  search : 서버 주소와 하위 주소를 제외한 '?' 포함된 쿼리스트링을 모두 가져옴
  const {pathname, search} = profile;
  console.log(`pathname : ${pathname}`);
  console.log(`search : ${search}`);

  const data: string = search.substring(1);
  console.log(`? 를 제거한 문자열 ${data}`);

  const arrData = data.split('&');
  console.log(`& 기호를 기준으로 데이터를 잘라내기`)
  console.log(arrData);

  //  실제 데이터는 문자열 안의 '=' 기호 뒤에 있는 것이므로 다시 split() 로 잘라냄
  //  ?? 사용하여 기본값 설정 후 split() 으로 잘라내기
  const param1: string[] = (arrData[0] ?? '').split('=');
  const param2: string[] = (arrData[1] ?? '').split('=');
  console.log(`param1 : `);
  console.log(param1);
  console.log('param2 : ');
  console.log(param2);

  console.log();

  const locationParams: string[] = arrData.map(item => {
    const param = item.split('=');
    return decodeURI(param[1]);
  });

  console.log('배열 함수로 파라미터값 파싱 : ');
  console.log(locationParams);

  console.log('\n----- useSearchParams() 로 가져온 데이터 -----');
  //  useSearchParams() hook 을 사용하여 파라미터 데이터만 모두 자동으로 가져옴
  //  URLSearchParams 타입으로 가져옴
  //  useSearchParams() 사용 시 URL Decoding 이 자동으로 되어 있음
  //  get() 함수를 사용하여 URLSearchParams 객체에 저장된 데이터를 출력
  //    반환 타입이 'string | null' 로 되어 있음
  const [params] = useSearchParams();
  console.log(params);
  console.log(params.get('username'));
  console.log(params.get('age'));

  return (
    <>
      <div>
        <h1>쿼리스트링을 통해서 데이터를 가져오는 페이지</h1>
        <br/>

        {/* 웹 브라우저의 주소창에는 원래 영문자, 숫자, 특수문자만 출력 가능 */}
        {/* 현재는 영문자, 숫자, 특수문자가 아닐 경우 URL Encoding 을 사용하여 문자를 영문자, 숫자, 특수문자의 조합으로 변환하여 전달 */}
        {/* 해당 데이터를 받아서 사용 시 URL Decoding 을 진행하여 사용해야 함 */}
        <h4>useLocation() 사용 파라미터 1 : {decodeURI(param1[1] ?? '')}</h4>
        <h4>useLocation() 사용 파라미터 2 : {decodeURI(param2[1] ?? '')}</h4>

        <br/>

        <h3>배열 함수로 한번에 출력</h3>
        {
          arrData.map((item, index) => {
            const param = item.split('=');
            return <h4 key={index}>useLocation() 사용 파라미터 {index + 1} : {decodeURI(param[1] ?? '')}</h4>
          })
        }

        <br/>

        <h3>useSearchParams() 사용 파라미터</h3>
        <h4>useSearchParams() 사용 파라미터 1 : {params.get('username')}</h4>
        <h4>useSearchParams() 사용 파라미터 2 : {params.get('age')}</h4>
      </div>
    </>
  );
}

export default Profile1;










