import '../styles/index.scss';
import adapter from 'webrtc-adapter';
import './sim/testing.js';

const connectButton = document.querySelector('button#connect-button');
const sendPane = document.querySelector('textarea#send-pane');
const sendButton = document.querySelector('button#send-button');
const recievePane = document.querySelector('textarea#recieve-pane');

const google_stun_url = 'stun:stun4.l.google.com:19302';
let send_counter = 0;

document.querySelector('p#browser-info').innerHTML =
    `Using ${adapter.browserDetails.browser} ${adapter.browserDetails.version}`;

connectButton.onclick = function () {
    console.log("Attempting to connect...");

    // If connnection was a success:
    document.querySelector('div#p2p-stuff').style.display = "block";
    document.querySelector('div#connection-stuff').style.display = "none";
};

sendButton.onclick = function () {
    console.log(`Send-${++send_counter}`);
};

const mediaStreamConstraints = {
    video: true,
    audio: true,
};

const localVideo = document.querySelector('video');
let localStream;

function gotLocalMediaStream (mediaStream) { 
    localStream = mediaStream;
    localVideo.srcObject = mediaStream;
}

function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);