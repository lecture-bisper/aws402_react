//  File :  Compo.tsx
//  User :  it
//  Date :  2026-09-10
//  Time :  오전 11:39
//  Desc :  

import FuncComponent from "./FuncComponent.tsx";
import ClassComponent from "./ClassComponent.tsx";
import Welcome from "./Welcome.tsx";
import OriComponent from "./OriComponent.tsx";
import DivComponent from "./DivComponent.tsx";

const data = {
  name: '르센느 원이',
  avatarUrl: 'https://pimg.mk.co.kr/news/cms/202608/09/news-p.v1.20260809.7a75e36570114471806e5a7cba65fd08_R.jpg',
}

function Compo() {
  return (
    <>
      <h3>함수 컴포넌트 사용하기</h3>
      <FuncComponent />

      <hr/>
      <br/>

      <h3>클래스 컴포넌트 사용하기</h3>
      <ClassComponent />

      <br/><hr/><hr/>
      
      <div>
        <h3>컴포넌트 합성</h3>
        <Welcome name={'원이'} />
        <Welcome name={'리브'} />
        <Welcome name={'미나미'} />
        <Welcome name={'메이'} />
        <Welcome name={'제나'} />
      </div>

      <br/>
      <hr/>
      <br/>

      <div>
        <h3>컴포넌트 추출</h3>
        <h4>원본 컴포넌트</h4>

        {/* 하나의 컴포넌트에서 모든 내용을 출력하는 컴포넌트 */}
        {/* 자식 컴포넌트로 데이터 전달, text, date, author 속성 전달 */}
        {/* text 는 string, date 는 현재 시간을 알 수 있는 Date 객체, author 는 현재 파일 상단에서 생성한 object 타입의 변수 data 를 전달 */}
        <OriComponent text={'외부 이미지 사용'} date={new Date()} author={data} />

        <hr/>

        <h4>추출된 컴포넌트</h4>

        <DivComponent text={'외부 이미지 사용'} date={new Date()} author={data} />

      </div>


    </>
  );
}

export default Compo;










