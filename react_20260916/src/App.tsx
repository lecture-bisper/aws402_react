import ZuStandTest from "./components/ZuStandTest.tsx";
import ZuStandTest2 from "./components/ZuStandTest2.tsx";
import AxiosTest from "./components/AxiosTest.tsx";
import AxiosRestAPIServerConnect from "./components/AxiosRestAPIServerConnect.tsx";

function App() {

  return (
    <>
      <div className={'container mt-5'}>
        <h2>zustand 사용하기</h2>
        <ZuStandTest />

        <hr/>

        <ZuStandTest2 />

        <br/><hr/><br/>

        <h2>Axios 사용하기</h2>
        <AxiosTest />

        <hr/>

        <AxiosRestAPIServerConnect />



        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    </>
  );
}

export default App
