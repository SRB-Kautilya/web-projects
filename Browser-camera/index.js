let video = document.querySelector("video");

navigator.mediaDevices
    .getUserMedia({
        video: true,
        audio: true
    })
    .then(function (mediaStream) {
        video.srcObject = mediaStream;
    }).catch(function (err) {
        console.log(err);
    });