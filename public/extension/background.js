/// <reference types="chrome"/>

chrome.contextMenus.create({
    id: "speak_with_blakify",
    title: "Speak with Blakify",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(async function (info, tab) {
    let result = {};
    const { selectionText } = info;

    try {
        result = await chrome.storage.sync.get(["pitch", "rate", "name", "lang", "char_count"]);
    } catch(e) {
        console.error(e);
    }

    await chrome.tts.speak(selectionText, {
        lang: result.lang,
        voiceName: result.name,
        pitch: parseFloat(result.pitch || "1", 10),
        rate: parseFloat(result.rate || "1", 10),
    });
    chrome.storage.sync.set({ "char_count": (result.char_count || 5000) - selectionText.replace(/\s/g, '').length })
})