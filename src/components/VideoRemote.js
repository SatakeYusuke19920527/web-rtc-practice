import React, { useRef, useEffect } from 'react'

import Video from './Video'

const VideoRemote = ({name}) => {
  const videoRef = null
  return (
    <Video isLocal={false} videoRef={videoRef} name={name} />
  )
}

export default VideoRemote
