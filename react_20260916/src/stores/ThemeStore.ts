//  File :  ThemeStore.ts
//  User :  it
//  Date :  2026-09-16
//  Time :  오전 9:40
//  Desc :  

//  zustand 라이브러리 import
import {create} from "zustand";

//  zustand 로 상태관리하는 object 의 데이터 타입 설정
interface StateTheme {
  theme: string;
  setupTheme: (newTheme: string) => void;
}

//  zustand 상태 저장용 object 생성
//  커스텀 훅이기 때문에 접두사로 'use' 사용, 접미사로 'Store' 를 사용
const useThemeStore = create<StateTheme>()((set) => ({
  //  zustand 로 상태 관리 중인 변수, 외부에서 사용할 변수명, 기본값 설정
  theme: 'primary',
  //  zustand 로 상태 관리 중인 변수를 수정하기 위한 함수
  setupTheme: (newTheme: string) => set(() => ({theme: newTheme})),
}));

//  외부에서 사용할 수 있도록 export
export { useThemeStore };











