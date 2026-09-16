//  File :  ThemeStore2.ts
//  User :  it
//  Date :  2026-09-16
//  Time :  오전 11:04
//  Desc :  

import {create} from "zustand";

//  zustand 에서 사용할 사용자 타입 설정
interface StateTheme {
  theme: string;
  changeTheme: (newTheme: string) => void;
}

const useThemeStore2 = create<StateTheme>()((set) => ({
  theme: 'primary',
  changeTheme: (newTheme) => set({theme: newTheme}),
}));

export { useThemeStore2 };











