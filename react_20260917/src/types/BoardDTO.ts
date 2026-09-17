//  File :  BoardDTO.ts
//  User :  it
//  Date :  2026-09-17
//  Time :  오후 3:11
//  Desc :  

interface BoardDTO {
  boardIdx: number;
  boardTitle: string;
  boardContents: string;
  boardCreateId: string;
  boardCreateDate: string;
  boardUpdateId: string | null;
  boardUpdateDate: string | null;
  boardHitCnt: number;
}

export type { BoardDTO };








