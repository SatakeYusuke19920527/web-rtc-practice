export default class RtcClient {
  constructor() {
    const config = {
      iceServers: [{urls: "stun.stunprotocol.org"}]
    }
    this.rtcPeerConnection = new RTCPeerConnection(config)
    this.localPeerName = '',
    this.remotePeerName = ''
  }
}