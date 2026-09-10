import ConfirmDialog from "./components/ConfirmDialog.tsx";
import Car from "./components/Car.tsx";
import Compo from "./components/Compo.tsx";
import CommentList from "./components/CommentList.tsx";
import BootstrapCDN from "./components/BootstrapCDN.tsx";
import BootstrapReact from "./components/BootstrapReact.tsx";

function App() {

  return (
    <>
      <ConfirmDialog />

      <hr/>

      {/* 자식 컴포넌트 호출 */}
      <Car />

      <hr/>

      <Compo />

      <br/>
      <hr/>
      <br/>

      <CommentList />

      <br/>
      <hr/>
      <br/>

      <BootstrapCDN />
      <br/><br/>
      <BootstrapReact />






      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </>
  );
}

export default App
