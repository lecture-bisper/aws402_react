//  File :  Main.tsx
//  User :  it
//  Date :  2026-09-17
//  Time :  오후 2:06
//  Desc :  

import {BrowserRouter, Route, Routes} from "react-router";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import BoardList from "../board/BoardList.tsx";
import BoardDetail from "../board/BoardDetail.tsx";
import BoardWrite from "../board/BoardWrite.tsx";
import BoardErrorPage from "../board/BoardErrorPage.tsx";
import Login from "../auth/Login.tsx";
import Signup from "../auth/Signup.tsx";

function Main() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path={'/board'}>
            <Route index element={<BoardList />} />
            <Route path={':boardIdx'} element={<BoardDetail />} />
          </Route>
          <Route path={'/board/write'} element={<BoardWrite />} />
          <Route path={'/auth'}>
            <Route path={'login'} element={<Login />} />
            <Route path={'signup'} element={<Signup />} />
          </Route>
          <Route path={'*'} element={<BoardErrorPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Main;










