//  File :  VolumeControl.tsx
//  User :  it
//  Date :  2026-09-11
//  Time :  오후 4:31
//  Desc :  

import {useEffect, useState} from "react";

function VolumeControl() {
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    setVolume(5);
  }, []);

  useEffect(() => {
    console.log(`볼륨이 ${volume}으로 변경되었습니다.`);
  }, [volume]);

  const volumeUp = () => {
    if (volume >= 10) {
      setVolume(10);
    }
    else {
      setVolume(volume + 1);
    }
  }

  const volumeDown = () => (volume - 1) <= 0 ? setVolume(0) : setVolume(volume - 1);

  return (
    <>
      <div>
        <button type={'button'} className={'btn btn-primary'} onClick={volumeDown}> - </button>
        <span className={'fs-3 mx-3'}>{volume}</span>
        <button type={'button'} className={'btn btn-primary'} onClick={volumeUp}> + </button>
      </div>
    </>
  );
}

export default VolumeControl;










