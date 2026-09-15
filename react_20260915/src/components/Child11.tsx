//  File :  Child11.tsx
//  User :  it
//  Date :  2026-09-15
//  Time :  오전 10:08
//  Desc :  

interface Child11Props {
  data1: string | number;
  data2: string;
}

function Child11({data1, data2}: Child11Props) {
  return (
    <div className={'border border-2 border-primary rounded-2 m-4 p-4'}>
      <h3>왼쪽 자식 컴포넌트</h3>
      <h4>첫번째로 전달받은 데이터 : {data1}</h4>
      <h4>두번째로 전달받은 데이터 : {data2}</h4>
    </div>
  );
}

export default Child11;










