//  File :  BasicPage.tsx
//  User :  it
//  Date :  2026-09-10
//  Time :  오후 3:07
//  Desc :  

//  문제 1) BasicPage2 컴포넌트를 생성하고, BasicPage 컴포넌트의 내용을 컴포넌트 추출을 통해서 재사용할 수 있는 작은 컴포넌트로 분리한 후, BasicPage 와 동일한 화면에 출력될 수 있도록 화면을 꾸미세요
//  부모 컴포넌트 (components 폴더) : BasicPage2
//  생성할 기본 컴포넌트 (component/page 폴더) : Header, Footer, Navi, Main
//  추가 컴포넌트 : SideBar, SideMenu, SideMenuItem, MainContent, Content


//  문제 2) https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm 사이트를 리액트로 클론코딩 하세요. (컴포넌트 추출 필수)


const styles = {
  fakeImg: {
    height: 200,
    backgroundColor: '#aaaaaa',
  }
}

function BasicPage() {
  return (
    <div>
      {/* header */}
      <div className={'p-5 bg-primary text-white text-center'}>
        <h1>My First React Page (Bootstrap)</h1>
        <p>resize this responsive page to see the effect!</p>
      </div>

      {/* navi 로 */}
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

      {/* main */}
      <div className={'container mt-5'}>
        <div className={'row'}>
          {/* sidebar */}
          <div className={'col-sm-4'}>
            <h2>About Me</h2>
            <h5>Photo of me:</h5>
            <div style={styles.fakeImg}>Fake image</div>
            <p>Some text about me in culpa qui officia desernut mollit anim</p>
            <h3 className={'mt-4'}>Some Link</h3>
            <p>Lorem ipsum dolor sit ame.'</p>

            <ul className={'nav nav-pill flex-column'}>
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
            <hr className={'d-sm-none'}/>

          </div>

          {/* main content */}
          <div className={'col-sm-8'}>
            <h2>TITLE HEADING</h2>
            <h5>Title description, 2026-09-10</h5>
            <div style={styles.fakeImg}>Fake Image</div>
            <p>Some text...</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London,</p>

            <h2 className={'mt-5'}>TITLE HEADING</h2>
            <h5>Title description, 2026-09-10</h5>
            <div style={styles.fakeImg}>Fake Image</div>
            <p>Some text...</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London,</p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className={'mt-5 p-4 bg-dark text-white text-center'}>
        <p className={'text-center'}>Footer</p>
      </div>
    </div>
  );
}

export default BasicPage;










