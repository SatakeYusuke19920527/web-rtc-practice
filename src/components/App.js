import React, {useState} from 'react'
import InputFormLocal from './InputFormLocal'
import InputFormRemote from './InputFormRemote'
import VideoArea from './VideoArea'

const App = () => {
  const [localPeerName, setLocalPeerName] = useState('')
  const [remotePeerName, setRemotePeerName] = useState('')
  if (!localPeerName) {
    return <InputFormLocal
      localPeerName={localPeerName}
      setLocalPeerName={setLocalPeerName}
    />
  } else {
    return (
      <>
        <InputFormRemote
          localPeerName={localPeerName}
          remotePeerName={remotePeerName}
          setRemotePeerName={setRemotePeerName}
        />
        <VideoArea
          localPeerName={localPeerName}
          remotePeerName={remotePeerName}
        />
      </>
    );
  }
}

export default App;
