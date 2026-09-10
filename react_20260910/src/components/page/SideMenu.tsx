//  File :  SideMenu.tsx
//  User :  it
//  Date :  2026-09-10
//  Time :  오후 5:35
//  Desc :  

import SideMenuItem from "./SideMenuItem.tsx";

function SideMenu() {
  return (
    <>
      <ul className={'nav nav-pill flex-column'}>
        {/* menu item */}
        <SideMenuItem />
        <SideMenuItem />
        <SideMenuItem />
        <SideMenuItem />
      </ul>
    </>
  );
}

export default SideMenu;










