/// <reference types="chrome"/>

const LIMIT = 5000;

chrome.contextMenus.create({
    id: "speak_with_sonia_app",
    title: "Speak with Sonia App",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(async function (info, tab) {
    let result = {};
    const { selectionText } = info;

    try {
        result = await chrome.storage.sync.get(["pitch", "rate", "name", "lang", "char_count", "user"]);
    } catch(e) {
        console.error(e);
    }

    if(result.char_count && result.char_count > 0 && result.user && result.user.user_email) {
        await chrome.tts.speak(selectionText, {
            lang: result.lang,
            voiceName: result.name,
            pitch: parseFloat(result.pitch || "1", 10),
            rate: parseFloat(result.rate || "1", 10),
        });
    }

    chrome.storage.sync.set({ "char_count": (result.char_count || LIMIT) - selectionText.replace(/\s/g, '').length })
})