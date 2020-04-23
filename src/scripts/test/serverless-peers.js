console.log("Loaded serverless-peers.js");


const RTCPeerConnection = window.RTCPeerConnection || webkitRTCPeerConnection || mozRTCPeerConnection;
const con = new RTCPeerConnection({
    'iceServers': [{
        'urls': ['stun:stun.l.google.com:19302']
    }]
});

const create_btn = document.querySelector('button#p2p-create');
const join_btn = document.querySelector('button#p2p-join');
const peer_list = document.querySelector('ul#peer-list');

const params = new URLSearchParams(window.location.search);
const join_room_id = params.get('roomid');

let heartbeat;

let data_chan = null;

create_btn.onclick = () => {
    console.log("Creating a new data channel.");
    disable(join_btn);
    if (data_chan != null) {
        console.log("Channel already created.");
        return;
    }
    data_chan = con.createDataChannel('foo-baz-bar');
    data_chan.onopen = (e) => {
        heartbeat = () => {
            data_chan.send('alive');
        };
    };
};

join_btn.onclick = () => {
    console.log("Joining a preset data channel.");
    disable(create_btn);
    if (data_chan != null) {
        console.log("Channel already created.");
        return;
    }
};


window.setInterval(function () {
    if (heartbeat == null) {
        console.log('Not connected.');
    } else {
        console.log("Heartbeat.");
        heartbeat();
    }
}, 3000);


function disable (obj) {
    obj.disabled = true;
    obj.style.setProperty("text-decoration", "line-through");
}

function visu_log(stringz){
    var li = document.createElement('li');
    li.innerHTML = stringz;
    peer_list.appendChild(li);
}

visu_log("Hello void!");

visu_log("BASTERD!");