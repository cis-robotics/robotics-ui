import React, {Component} from 'react'
// import socket from '../socket'
import ss from 'socket.io-stream'

class Camera extends Component {

    componentDidMount() {
        window.navigator.getUserMedia({ audio: true, video: { width: 772, height: 386 } },
            stream => {
                this.video.src = window.URL.createObjectURL(stream)
                this.video.onloadedmetadata = function(e) {
                    this.video.play();
                };
            }, err => {
                console.log(err)
            })
    }

    render () {
        return (
            <div>
                <video style={{width: "100%", height: "100%"}} ref={ref => { this.video = ref }}/>
            </div>
        )
    }
}

export default Camera