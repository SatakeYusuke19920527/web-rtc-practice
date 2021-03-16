import React from 'react'
import Button from '@material-ui/core/Button';

const getMedia = async () => {
  const constraints = {audio: true,video: true}

  try {
    await navigator.mediaDevices.getUserMedia(constraints);
    /* ストリームを使用 */
  } catch(err) {
    /* エラーを処理 */
    console.log(err)
  }
}

getMedia()

const App = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello world
    </Button>
    </div>
  );
}

export default App;
