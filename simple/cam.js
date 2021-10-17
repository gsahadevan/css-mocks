var stream, imageCapture; 

function getMediaStream()
{ 
    window.navigator.mediaDevices.getUserMedia({video: true})
    .then(function(mediaStream)
    { 
        stream = mediaStream; 
        let mediaStreamTrack = mediaStream.getVideoTracks()[0];
        imageCapture = new ImageCapture(mediaStreamTrack);
        console.log(imageCapture);
    })
    .catch(error);
}

function error(error)
{ 
    console.error('error:', error); 
}

function takePhoto(img)
{ 
    const img = img || document.querySelector('img');

    imageCapture.takePhoto()
    .then(blob => {
        let url = window.URL.createObjectURL(blob);
        img.src = url;
        window.URL.revokeObjectURL(url); 
    })
    .catch(error);
}; 

/* just call */ 
getMediaStream(); 

/* and when you want to capture an image */ 
takePhoto();