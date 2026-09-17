//  File :  Header.tsx
//  User :  it
//  Date :  2026-09-17
//  Time :  오후 2:06
//  Desc :  

import {Link} from "react-router";

function Header() {
  return (
    <div>
      <nav className={'navbar navbar-expand-sm navbar-dark bg-dark'}>
        <div className={'container-fluid'}>
          <Link to={'/board'} className={'navbar-brand'}>Home</Link>
          <ul className={'navbar-nav me-auto'}>
            <li className={'nav-item'}><a href="#" className={'nav-link'}>링크 1</a></li>
            <li className={'nav-item'}><a href="#" className={'nav-link'}>링크 2</a></li>
            <li className={'nav-item'}><a href="#" className={'nav-link'}>링크 3</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;










