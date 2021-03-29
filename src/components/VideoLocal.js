import React, { useRef, useEffect } from 'react'

import Video from './Video'

const VideoLocal = ({name}) => {
  const videoRef = useRef(null)
  const currentVideoRef = videoRef.current
  useEffect(() => {
    console.log(videoRef)
    if (currentVideoRef === null) return;
    const getMedia = async () => {
      const constraints = { audio: true, video: true }
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        currentVideoRef.srcObject = mediaStream
      } catch (err) {
        console.log(err)
      }
    }
    getMedia()
  }, [currentVideoRef])
  return (
    <Video isLocal={true} videoRef={videoRef} name={name} />
  )
}

export default VideoLocal
