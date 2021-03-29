import React, {useRef, useEffect} from 'react'

const VideoLocal = () => {
  const videoRef = useRef(null)
  const currentVideoRef = videoRef.current
  useEffect(() => {
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
    <div>
      
    </div>
  )
}

export default VideoLocal
