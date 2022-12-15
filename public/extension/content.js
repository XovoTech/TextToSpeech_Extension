chrome.runtime.onMessage.addListener(function (request) {
    if (request.action == "play_speech") {
        const _speachText = new window.SpeechSynthesisUtterance(request.text)
        window.speechSynthesis.speak(_speachText)
    }
});
