//  File :  NameStore.ts
//  User :  it
//  Date :  2026-09-16
//  Time :  오전 9:46
//  Desc :  

import {create} from "zustand";

interface StateName {
  name: string;
  setupName: (newName: string) => void;
}

const useNameStore = create<StateName>()((set) => ({
  name: 'Guest',
  setupName: (newName: string) => set(() => ({name: newName})),
}));

export { useNameStore };










