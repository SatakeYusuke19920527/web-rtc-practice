import React from 'react'

const Video = ({name, videoRef, isLocal}) => {
  return (
    <div>
      <video autoPlay muted={isLocal} ref={videoRef} />
      <div>{name}</div>
    </div>
  )
}

export default Video
