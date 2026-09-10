//  File :  OriComponent.tsx
//  User :  it
//  Date :  2026-09-10
//  Time :  오후 12:14
//  Desc :  

function formatDate(date: Date) {
  return date.toLocaleString();
}

function OriComponent(props: {text: string, date: Date, author: {avatarUrl: string, name: string}}) {
  return (
    <div className={'comment'}>
      <div className={'user-info'}>
        <img src={props.author.avatarUrl} alt={props.author.name}/>
        <div className={'user-info-name'}>{props.author.name}</div>
      </div>
      <div className={'comment-text'}>{props.text}</div>
      <div className={'comment-date'}>{formatDate(props.date)}</div>
    </div>
  );
}

export default OriComponent;










