//  File :  NumberStore.ts
//  User :  it
//  Date :  2026-09-16
//  Time :  오전 11:05
//  Desc :  

//  zustand 라이브러리 import
import {create} from "zustand";

//  zustand 의 Store 객체가 사용할 사용자 데이터 타입 설정
interface StateNumber {
  //  실제 데이터가 저장될 변수의 타입 설
  number: number;
  //  변수 수정용 함수의 타입
  upNumber: () => void;
  downNumber: () => void;
  resetNumber: () => void;
  updateNumber: (newNumber: number) => void;
}

//  zustand 로 생성한 Store 객체, 접두사 'use', 접미사 'Store' 사용
//  create() 로 zustand Store 객체 생성
const useNumberStore = create<StateNumber>()((set) => ({
  //  실제로 데이터를 저장할 변수
  number: 0,
  //  state : zustand 로 관리되는 객체의 현재 상태를 의미, useState 의 state 객체라고 생각하면 됨
  //  변수의 내용 수정용 함수 선언
  upNumber: () => set((state) => ({ number: state.number + 1 })),
  //  현재 값을 사용하여 다른 값으로 변경 시 state 를 매개변수로 사용하는 화살표 함수 형태로 사용
  downNumber: () => set((state) => ({ number: state.number - 1 })),
  //  단순히 값만 변경 시 object 로 받아서 저장
  resetNumber: () => set({ number: 0 }),
  //  매개변수로 외부 데이터를 입력받아 현재 상태의 값과 연산 시
  updateNumber: (newNumber) => set((state) => ({ number: state.number + newNumber })),
}));

export { useNumberStore };










