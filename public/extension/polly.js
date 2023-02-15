const getURL = (id) => `https://tts-stream.s3.amazonaws.com/${id}.mp3`;

const getAudioElement = () => {
    let audioEl = document.getElementById('sonia-polly-audio');
    if (!audioEl) {
        audioEl = document.createElement('audio');
        audioEl.id = 'sonia-polly-audio';
        const source = document.createElement('source');
        source.setAttribute('type', 'audio/mpeg')
        audioEl.appendChild(source);
        document.body.appendChild(audioEl);
    }
    return audioEl;
}

chrome.runtime.onMessage.addListener(
    async function (request, sender, sendResponse) {
        const url = getURL(request["TaskId"]);
        const audioEl = getAudioElement();
        audioEl.currentTime;
        audioEl.querySelector('source').setAttribute('src', url);
        audioEl.play();
    }
);