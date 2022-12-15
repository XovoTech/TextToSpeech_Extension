/// <reference types="chrome"/>

chrome.contextMenus.create({
    id: "speak_with_blakify",
    title: "Speak with Blakify",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(async function (info, tab) {
    // chrome.tabs.sendMessage(tab.id, {
    //     action: "play_speech",
    //     text: info.selectionText,
    // });
    chrome.tts.speak(info.selectionText);
})