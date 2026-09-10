//  File :  Profile.tsx
//  User :  it
//  Date :  2026-09-10
//  Time :  오전 10:35
//  Desc :  

// 자식 컴포넌트 선언
//  부모 컴포넌트에서 전달한 데이터를 받아오는 props 객체를 매개변수로 받아서 사용
//  props 라는 이름은 지정되어 있기 때문에 변경 불가능
//  props 는 읽기 전용
//  props 의 내용을 수정하고 싶을 경우 자식 컴포넌트에서 변수를 선언하고 props 의 값을 대입받은 후 해당 변수의 내용을 수정해서 사용

function Profile(props: {name: string, type: string, price: number, ele: boolean}) {
  // typescript 를 사용하여 일반 소스코드를 입력하는 부분

  //  부모컴포넌트가 전달한 props 객체를 자식 컴포넌트의 변수에 저장하여 사용
  const copy = props;
  console.log(copy.name);
  console.log(copy.type);
  console.log(copy.price);

  if (copy.ele) {
    console.log('전기차');
  }
  else {
    console.log('내연기관차');
  }

  // props 는 읽기 전용이므로 props 의 직접 수정은 불가능함
  // props.name = 'EV3';
  // console.log(`props 수정 후 : ${props.name}`);

  // props 가 가지고 있는 데이터를 일반 변수에 저장 후 수정은 가능함
  let pName = props.name;
  console.log(`원본 pName : ${pName}`);
  pName = 'EV3';
  console.log(`수정된 pName : ${pName}`);

  //  객체 구조 분해 할당 방식을 사용하여 props의 내용을 한번에 변수로 출력
  let {name, type, price, ele} = props;
  console.log(`원본 name : ${name}`);
  console.log(`원본 type : ${type}`);
  console.log(`원본 price : ${price}`);
  console.log(`원본 ele : ${ele}`);

  name = 'EV3';
  type = '소형 SUV';
  price = 3995;
  ele = true;

  console.log(`수정된 name : ${name}`);
  console.log(`수정된 type : ${type}`);
  console.log(`수정된 price : ${price}`);
  console.log(`수정된 ele : ${ele}`);


  // JSX 문법으로 UI 를 그리는 부분
  return (
    <div>
      {/* 부모 컴포넌트에서 전달받은 props 객체에 부모 컴포넌트에서 전달한 데이터의 속성명과 값이 포함되어 있음 */}
      <p>이름 : {props.name}</p>
      <p>타입 : {props.type}</p>
      <p>가격 : {props.price}</p>
      {/* 삼항연산자를 사용 */}
      <p>전기차 : {props.ele ? '전기차' : '내연기관차'}</p>

    {/*  JSX 문법에서는 if 문 사용불가, if 문 대신 삼항연산자를 사용 */}
    {/*  <p>*/}
    {/*    {*/}
    {/*      if (props.ele) {*/}
    {/*        console.log('ele 값이 true 입니다.');*/}
    {/*      }*/}
    {/*      else {*/}
    {/*        console.log('ele 값이 false 입니다.');*/}
    {/*      }*/}
    {/*    }*/}
    {/*  </p>*/}
    </div>
  );
}

export default Profile;










