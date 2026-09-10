//  File :  Main.tsx
//  User :  it
//  Date :  2026-09-10
//  Time :  오후 5:28
//  Desc :  

import SideBar from "./SideBar.tsx";
import MainContent from "./MainContent.tsx";

function Main() {
  return (
    <div className={'container mt-5'}>
      <div className={'row'}>
        {/* sidebar */}
        <SideBar />

        {/* main content */}
        <MainContent />

      </div>
    </div>
  );
}

export default Main;










