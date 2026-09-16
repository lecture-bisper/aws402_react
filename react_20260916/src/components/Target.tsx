//  File :  Target.tsx
//  User :  it
//  Date :  2026-09-16
//  Time :  오전 10:43
//  Desc :  

//  zustand store 를 import
import {useNumberStore} from "../stores/NumberStore.ts";
import {useThemeStore2} from "../stores/ThemeStore2.ts";

function Target() {

  //  zustand store 에 저장된 값만 가져옴
  const number = useNumberStore((state) => state.number);
  const theme = useThemeStore2((state) => state.theme);

  return (
    <>
      <div className={'border border-2 border-success-subtle rounded-3 m-3 p-3'}>
        <h4>Target 영역</h4>
        {/* zustand store 에서 가져온 데이터 출력 */}
        <h4>number : {number}</h4>
        <h4 className={`text-${theme}`}>현재 theme : {theme}</h4>
      </div>
    </>
  );
}

export default Target;










