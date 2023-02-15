/// <reference types="chrome"/>

const LIMIT = 5000;

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "speak_with_sonia_app",
        title: "Speak with Sonia App",
        contexts: ["selection"]
    });
})

chrome.contextMenus.onClicked.addListener(async function (info, tab) {
    let result = {};
    const { selectionText } = info;

    try {
        result = await chrome.storage.sync.get(["pitch", "rate", "name", "lang", "char_count", "user", "type"]);
    } catch (e) {
        console.error(e);
    }

    speakWithPolly(selectionText);

    // if (!result.user?.has_expired) {
    //     if(result.type == "google") {
    //         await chrome.tts.speak(selectionText, {
    //             lang: result.lang,
    //             voiceName: result.name,
    //             pitch: parseFloat(result.pitch || "1", 10),
    //             rate: parseFloat(result.rate || "1", 10),
    //         });
    //     } else {
    //         speakWithPolly(selectionText);
    //     }
    // }

    const newCount = (result.char_count || LIMIT) - selectionText.replace(/\s/g, '').length;

    chrome.storage.sync.set({ "char_count": newCount });
})

const speakWithPolly = async (text) => {
    const response = await fetch(`https://3gkln5uvgdynivfv4u5ll3l47y0jqrey.lambda-url.us-east-1.on.aws/?text=${text}`, {
        method: "GET",
    });
    const json = await response.json();
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    chrome.tabs.sendMessage(tab.id, json);
}