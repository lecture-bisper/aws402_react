//  File :  ZuStandTest2.tsx
//  User :  it
//  Date :  2026-09-16
//  Time :  오전 10:42
//  Desc :  

import Content1 from "./Content1.tsx";
import {type ChangeEvent, useEffect, useState} from "react";
import {useNumberStore} from "../stores/NumberStore.ts";
import {useThemeStore2} from "../stores/ThemeStore2.ts";

function ZuStandTest2() {

  //  현재 컴포넌트에서 state 로 관리중인 변수
  const [num, setNum] = useState(0);

  //  객체 분할 할당 방식으로 zustand의 store 에서 제공한 변수 및 함수 가져오기 (옛날 방식)
  // const { upNumber, downNumber, resetNumber, updateNumber} = useThemeStore2();

  //  zustand 의 Store 에서 제공한 변수 및 함수 가져오기(최신 방식, 추천)
  const upNumber = useNumberStore((state) => state.upNumber);
  const downNumber = useNumberStore((state) => state.downNumber);
  const resetNumber = useNumberStore((state) => state.resetNumber);
  const updateNumber = useNumberStore((state) => state.updateNumber);

  const changeTheme = useThemeStore2((state) => state.changeTheme);

  // setNum(Number(e.target.value)) 에서 e.target.value 를 사용 시 문자열로 받음
  // Number() 를 사용하여 정수로 변환하여 사용
  const numberSetup = (e: ChangeEvent<HTMLInputElement>) => setNum(Number(e.target.value));

  //  useEffect() 를 사용하여 componentDidUpdate() 함수 효과를 사용
  useEffect(() => {
    //  초기값 변경
    changeTheme('success');
  }, [changeTheme]);

  return (
    <>
      <div className={'border border-2 border-primary rounded-3 m-3 p-3'}>
        <button type={'button'} className={'btn btn-primary'} onClick={upNumber}> + </button>
        <button type={'button'} className={'btn btn-success ms-2'} onClick={downNumber}> - </button>
        <button type={'button'} className={'btn btn-info ms-2'} onClick={() => updateNumber(num)}>number setup</button>
        <button type={'button'} className={'btn btn-warning ms-2'} onClick={resetNumber}>reset</button>
        <button type={'button'} className={'btn btn-primary ms-2'} onClick={() => changeTheme('info')}>테마 변경</button>

        <div className={'my-3'}>
          <label htmlFor="num" className={'form-label'}>숫자 입력 :</label>
          <input type="number" className={'form-control'} id={'num'} min={0} value={num} onChange={numberSetup}/>
        </div>

        <Content1 />
      </div>
    </>
  );
}

export default ZuStandTest2;










