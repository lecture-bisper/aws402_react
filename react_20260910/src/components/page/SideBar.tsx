//  File :  SideBar.tsx
//  User :  it
//  Date :  2026-09-10
//  Time :  오후 5:32
//  Desc :

import SideMenu from "./SideMenu.tsx";

const styles = {
  fakeImg: {
    height: 200,
    backgroundColor: '#aaaaaa',
  }
}

function SideBar() {
  return (
    <div className={'col-sm-4'}>
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <div style={styles.fakeImg}>Fake image</div>
      <p>Some text about me in culpa qui officia desernut mollit anim</p>
      <h3 className={'mt-4'}>Some Link</h3>
      <p>Lorem ipsum dolor sit ame.'</p>

      {/* side menu */}
      <SideMenu />

      <hr className={'d-sm-none'}/>
    </div>
  );
}

export default SideBar;










