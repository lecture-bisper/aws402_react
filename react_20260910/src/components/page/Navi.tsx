//  File :  Navi.tsx
//  User :  it
//  Date :  2026-09-10
//  Time :  오후 5:28
//  Desc :  

function Navi() {
  return (
    <nav className={'navbar navbar-expand-sm bg-dark navbar-dark'}>
      <div className={'container-fluid'}>
        <ul className={'navbar-nav'}>
          <li className={'nav-item'}>
            <a href="#" className={'nav-link active'}>Active</a>
          </li>
          <li className={'nav-item'}>
            <a href="#" className={'nav-link'}>Link</a>
          </li>
          <li className={'nav-item'}>
            <a href="#" className={'nav-link'}>Link</a>
          </li>
          <li className={'nav-item'}>
            <a href="#" className={'nav-link disabled'}>Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navi;










